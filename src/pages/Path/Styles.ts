import styled, { css } from 'styled-components';

interface ContainerProps {
    path: string;
}

export const Content = styled.div<ContainerProps>`
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

export const Container = styled.main `
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

export const Header = styled.header `
    display: flex;
    align-items: center;
    padding: 35px 48px;
    margin-bottom: 78px;

    @media(min-width: 800px) {
        margin-bottom: 58px;
    }
`;