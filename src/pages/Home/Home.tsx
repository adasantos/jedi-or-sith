import React from 'react';
import { useNavigate } from 'react-router-dom';

import Styles from './Styles';

const Home: React.FC = () => {
    const navigate = useNavigate();

    function handleStart() {
        navigate('/path');
    }

    return (
        <Styles.Container>
            <Styles.TitleContent>
                <h1>Welcome to <strong>iClinic</strong></h1>
            </Styles.TitleContent>
            <Styles.Subtitle>
                FrontEnd Challenge
            </Styles.Subtitle>
            <Styles.Button onClick={handleStart}>Start</Styles.Button>
        </Styles.Container>
    )
}

export default Home;