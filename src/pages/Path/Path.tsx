import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

const Path: React.FC = () => {
    const { data, loading, error, choiceYourPath} = useFetch();

    if (loading) return <h1>Loading</h1>

    if (error) return <h1>Error</h1>

    return (
        <>
            <h1>Path</h1>
            {data && <h2>{data.name}</h2> }
            <button onClick={choiceYourPath}>Escolher novamente</button>
            <Link to="/">
                <button>Voltar</button>
            </Link>
        </>
    )
}

export default Path;