import styled, { css } from 'styled-components';

export interface ButtonProps {
    path: string;
    disabled: boolean;
    onClick(): void;
}

export const Button = styled.button`
    max-width: 347px;
    padding: 0 16px;
    height: 56px;
    font-weight: 700;
    font-size: 1em;
    line-height: 20px;
    border: 0;
    border-radius: 10px;

    @media(min-width: 800px) {
        margin-bottom: 60px;
    }

    ${({ path }: ButtonProps) => path === 'dark' && (
        css `
            background: #ffffff;
            color: #2A2A2A;
        `
    )}

    ${({ path }: ButtonProps) => path === 'light' && (
        css `
            background: #2A2A2A;
            color: #FBFE63;
        `
    )}

    &:enabled:hover {
        opacity: 0.9;
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;