import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import BackButton from '../../components/BackButton';
import MasterData from '../../components/MasterData';

import useFetch from '../../hooks/useFetch';

import {Content, Header, Container} from './Styles';

const Path: React.FC = () => {
    const navigate = useNavigate();
    const { data, loading, error, choiceYourPath} = useFetch();
    const path = (data === 'Darth Vader' && 'dark') || (data === 'Luke Skywalker' && 'light') || null;

    useEffect(() => {
        if (error) {
            navigate('/');
        }
    }, [error, navigate]);

    return path && (
        <Content path={path}>
                <Header>
                    <BackButton path={path} routeNavigate='/' />
                </Header>
                <Container>
                    <MasterData path={path} masterName={data}/>
                    <Button
                        onClick={choiceYourPath}
                        path={path}
                        text='choose your path again, Padawan'
                        disabled={loading}
                    />
                </Container>
        </Content>
    )
}

export default Path;