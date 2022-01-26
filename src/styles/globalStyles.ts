import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
    }

    body, input, button {
        font: 16px Montserrat, sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;