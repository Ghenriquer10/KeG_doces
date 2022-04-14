import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: Hurricane;
    }

    html, body, #root{
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        @media (max-width: 700px) {
            overflow-x: hidden;
        }
    }

    p{
        font-family: 'Beau Rivage', cursive;
    }
    
    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }
`;