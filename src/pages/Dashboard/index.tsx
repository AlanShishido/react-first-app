import React, { useState, useEffect, FormEvent } from "react";
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import client from '../../services/client';
import logoImg from "../../assets/logo.svg";

import { Title, Error,Form, Repositories } from "./styles";

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')
    const [inputError, setInputError] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories)
        }
        else {
            return []
        }
    })

    useEffect( () => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories]);

    async function handleAddReposity(event: FormEvent<HTMLFormElement>,): Promise<void>{
        event.preventDefault();
        
        if (!newRepo){
            setInputError('Digite o autor/nome do repositório');
            return
        }
        
        try {
            const response = await client.get<Repository>(`repos/${newRepo}`);
            
            // console.log(response.data)
            
            const repository = response.data;
            
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');
        }
        catch (err) {
            setInputError('Erro na busca por esse repositório')
            
        }
    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form hasError={!!inputError} onSubmit={handleAddReposity}>
                <input type="text"
                    placeholder="Digite o nome do repositório" 
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    />
                <button type="submit">Pesquisar</button>
            </Form>

            { inputError && <Error>{inputError}</Error> }

            <Repositories>
                {repositories.map((repo) => {
                    return (
                        <Link key={repo.full_name} to={`/repositories/${repo.full_name}`}>
                            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
                            <div>
                                <strong>{repo.full_name}</strong>
                                <p>{repo.description}</p>
                            </div>
                            <FiChevronRight size={20} />
                        </Link>
                    )
                })}

            </Repositories>
        </>
    )
};

export default Dashboard;
