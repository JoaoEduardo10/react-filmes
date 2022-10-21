import { createGlobalStyle } from 'styled-components'
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif,;
    }

    body{
        background-color: #000;
        color: #fff;
    }

    a{
        text-decoration: none;
        color: ${theme.color.yellow};
        transition: all .5s;
    }

    a:hover{
        color: #b8930c;
    }

`;