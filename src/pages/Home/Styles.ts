import styled from 'styled-components';

export const Container = styled.main `
    max-width: 800px;
    margin: 210px auto 8px auto;
    padding: 0 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 800px) {
        max-width: 1440px;
    }
`;

export const TitleContent = styled.header `
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

export const Subtitle = styled.h4 `
    font-weight: 400;
    text-align:center;
    margin-bottom: 162px;
    font-size: 0.875em;
    line-height: 17px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #2c97d1;
`;

export const Button = styled.button `
    padding: 0 32px;
    height: 56px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 8px;
    text-transform: uppercase;
    border: 0;
    border-radius: 10px;
    background: #2C97D1;
    text-align: center;
    color: #FFFFFF;
  
    &:hover {
        opacity: 0.8;
    }
`;