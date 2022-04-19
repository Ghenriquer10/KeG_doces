import styled from "styled-components";
import parallax from '../../assets/parallax/parallax-wallpaper.jpg'

export const Container = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #671B0B;
    
    @media (max-width: 700px){
        flex-direction: column;
        height: 400px;
    }
`;



export const Logo = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    img{
        width: 150px;
        height: 150px;
        border: 2px solid brown;
        border-radius: 50%;
        margin-top: 50px;
    }

    p {
        font-size: 3em;
        color: #FFF;
        font-weight: bold;
    }

    @media (max-width: 700px) {
        margin-bottom: 0;
        height: 70%;
    }
`;

export const Contacts = styled.div`
    height: 20%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 0px;
    
    
    .label{
        font-size: 1.5em;
        margin-bottom: 5px;
        color: #FFF;
    }

    .social-media{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        width: 50%;
    }
    
    svg{
        color: #fff;
        background-color: brown;
        border-radius: 15px;
    }

    @media (max-width: 700px){
        flex-direction: row;
        position: initial;
        width: 90%;
    
        .label{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        p{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5em;
            margin-top: 20px;
        }
        

        .social-media{
            width: 30%;
            margin-left: 10px;
        }
    }
`;

export const Caixa = styled.div`
        height: 55%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.9;
        background-attachment: fixed;
        position: relative;
        background-image: url(${parallax});
    .conteudo-caixa{
        width: 100%;
        position: absolute;
        top: 50%;
        font-size: 2.0em;
        text-align: center;
        color: #fff;
    }
`;