import React from 'react';
import { Link } from 'react-router-dom';

const Path: React.FC = () => {
    return (
        <>
            <h1>Path</h1>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}

export default Path;