import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

interface ContainerProps {
    path: string;
}

const Content = styled.div<ContainerProps>`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;

    ${({ path }: ContainerProps) => path === 'dark' && (
        css `
            background: #2B2B2B;
        `
    )}

    ${({ path }: ContainerProps) => path === 'light' && (
        css `
            background: #FBFE63;
        `
    )}
`;

const Container = styled.main `
    max-width: 800px;
    margin: 0 auto 0 auto;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 800px) {
        max-width: 1440px; 
        flex-direction: column-reverse;
    }
`;

const TitleContent = styled.header `
    display: flex;
    align-items: center;
    justify-content: center;
    text-align:center;

    h1 {
        font-weight: 400;
        font-size: 4.5em;
        line-height: 88px;
        color: #2c97d1;
    }

    strong {
        font-weight: 700;
    }
`;

const Header = styled.header `
    display: flex;
    align-items: center;
    padding: 35px 48px;
    margin-bottom: 78px;

    @media(min-width: 800px) {
        margin-bottom: 58px;
    }
`;

const Link = styled(LinkRouter) `
    display: flex;
    align-items: center;
`;

const ArrowLeftIcon = styled(FiArrowLeft) `
    width: 40px;
    heihgt: 40px;

    ${({ path }: ContainerProps) => path === 'dark' && (
        css `
            color: #FFFFFF;
        `
    )}

    ${({ path }: ContainerProps) => path === 'light' && (
        css `
            color: #2A2A2A;
        `
    )}
`;

const BackText = styled.span `
    font-size: 1.25em;
    line-height: 22px;
    color: #2A2A2A;

    ${({ path }: ContainerProps) => path === 'dark' && (
        css `
            color: #FFFFFF;
        `
    )}

    ${({ path }: ContainerProps) => path === 'light' && (
        css `
            color: #2A2A2A;
        `
    )}
`;

const Image = styled.img `
    width: 302px;
    height: 302px;
    border-radius: 50%;

    @media(min-width: 800px) {
        width: 380px;
        height: 380px;
    }
`;

export default {Content, Container,TitleContent, Image, ArrowLeftIcon, BackText, Header, Link };