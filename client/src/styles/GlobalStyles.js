import { createGlobalStyle } from 'styled-components';
import './normalize.css';
export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    body{
        font-family: 'Arial', sans-serif;
        margin: 0;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    h1, h2, h3,h4, p{
        margin: 0;
    }

    h1{
        font-size: ${props => props.theme.fontSizes.text_2xl};
    }
    h2{
        font-size: ${props => props.theme.fontSizes.text_xl};
    }
    h3{
        font-size: ${props => props.theme.fontSizes.text_l};
    }
    h4{
        font-size: ${props => props.theme.fontSizes.text_m};
    }

`;
