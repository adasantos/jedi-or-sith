import styled, { css } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

interface pathProps {
    path: string;
}

const Link = styled(LinkRouter) `
    display: flex;
    align-items: center;
`;

const IconArrowLeft = styled(FiArrowLeft) `
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

const Text = styled.span `
    margin-left: 16px;
    font-size: 1.25em;
    line-height: 22px;
    color: #2A2A2A;

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

export default {Link, IconArrowLeft, Text};