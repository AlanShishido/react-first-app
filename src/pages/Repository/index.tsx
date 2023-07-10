import React from "react";
import { useParams } from "react-router-dom";

const Repository: React.FC = () => {
    const {'*': repository} = useParams()

    return (
    <>
        <h1>Repository: {repository}</h1>
    </>
    );
};

export default Repository;
