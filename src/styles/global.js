import {createGlobalStyle} from 'styled-components'
import Hurricane from './Fonts';

export default createGlobalStyle`
    ${Hurricane}
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
    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }
`;