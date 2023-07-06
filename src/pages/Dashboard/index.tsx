import React from "react";
import { FiChevronRight } from 'react-icons/fi'

import logoImg from "../../assets/logo.svg"

import { Title, Form, Repositories } from "./styles"

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no GitHub</Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/51389025?v=4" alt="Alan Shishido" />
                    <div>
                        <strong>rockeseat/uniform</strong>
                        <p>Easy peasy highly scalable ReacjJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                
                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/51389025?v=4" alt="Alan Shishido" />
                    <div>
                        <strong>rockeseat/uniform</strong>
                        <p>Easy peasy highly scalable ReacjJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>

                <a href="teste">
                    <img src="https://avatars.githubusercontent.com/u/51389025?v=4" alt="Alan Shishido" />
                    <div>
                        <strong>rockeseat/uniform</strong>
                        <p>Easy peasy highly scalable ReacjJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;
