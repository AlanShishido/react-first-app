import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global'
import Routers from './routes'

const App: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>

            <GlobalStyle/>
        </>
    );
}

export default App;
