import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, TitleContent, Subtitle, Button} from './Styles';

const Home: React.FC = () => {
    const navigate = useNavigate();

    function handleStart() {
        navigate('/path');
    }

    return (
        <Container>
            <TitleContent>
                <h1>Welcome to <strong>iClinic</strong></h1>
            </TitleContent>
            <Subtitle>
                FrontEnd Challenge
            </Subtitle>
            <Button onClick={handleStart}>Start</Button>
        </Container>
    )
}

export default Home;