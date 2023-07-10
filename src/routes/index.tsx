import React from "react";
import { Routes, Route } from 'react-router-dom'

import Dashboard from "../pages/Dashboard";
import RepositoryPage from "../pages/Repository";

const Routers: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/repositories">
                <Route path="*" element={<RepositoryPage />}/>
            </Route>

            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
};
 
export default Routers
