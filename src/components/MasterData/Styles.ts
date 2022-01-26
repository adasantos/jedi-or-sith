import styled, { css } from 'styled-components';

interface pathProps {
    path: string;
}

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img `
    width: 302px;
    height: 302px;
    border-radius: 50%;
    margin-bottom: 18px;

    @media(min-width: 800px) {
        width: 380px;
        height: 380px;
    }
`;

const DescriptionContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align:center;
    margin-bottom: 36px;

    @media(min-width: 800px) {
        flex-direction: row;
    }
`;

const Text = styled.span `
    font-weight: 400;
    font-size: 2.25em;
    line-height: 44px;

    ${({ path }: pathProps) => path === 'dark' && (
        css `
            color: #FFFFFF;
        `
    )}

    ${({ path }: pathProps) => path === 'light' && (
        css `
            color: #2A2A2A;
        `
    )}

    @media(min-width: 800px) {
        margin-right: 8px;
    }
`;

const MasterName = styled.span `
    font-weight: 700;
    font-size: 2.25em;
    line-height: 44px;

    ${({ path }: pathProps) => path === 'dark' && (
        css `
            color: #FFFFFF;
        `
    )}

    ${({ path }: pathProps) => path === 'light' && (
        css `
            color: #2A2A2A;
        `
    )}
`;

export default { Container, Image, DescriptionContainer, Text, MasterName };