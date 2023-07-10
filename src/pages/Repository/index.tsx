import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import client from '../../services/client';
import logoImg from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface Repository {
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
}

interface Issue {
    title: string;
    id: number;
    html_url: string;
    user: {
        login: string;
    }
}

const RepositoryPage: React.FC = () => {
    const {'*': repo_name} = useParams()
    const [repository, setRepository] = useState<Repository | null>(null)
    const [issues, setIssues] = useState<Issue[]>([])

    useEffect( () => {
        client.get(`repos/${repo_name}`).then( response => {
            setRepository(response.data);
        } )
        
        client.get(`repos/${repo_name}/issues`).then( response => {
            setIssues(response.data);
        } )

        // async function loadData(): Promise<void>{
        //     const [repo, issues] = await Promise.all([
        //         client.get(`repos/${repo_name}`),
        //         client.get(`repos/${repo_name}/issues`)
        //     ])
        // }
        // loadData();

    }, [repo_name] )

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16}/>
                    Voltar
                </Link>
            </Header>

            {repository ? (<RepositoryInfo>
                <header>
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header> 

                <ul>
                    <li>
                        <strong>{repository.stargazers_count}</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>{repository.forks_count}</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>{repository.open_issues_count}</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>

            </RepositoryInfo>
            ): (
                <p>Carregando</p>
            )}

            <Issues>
                {issues.map( (issue) => {
                    return (
                        <a key={issue.id} href={issue.html_url}>
                            <div>
                                <strong>{issue.title}</strong>
                                <p>{issue.user.login}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </a>
                    )
                })}
            </Issues>
        </>
    );
};

export default RepositoryPage;
