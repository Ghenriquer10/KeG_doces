import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
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
    border: 2px solid brown;
    height: 100px;
    border-radius: 30%;
    margin-bottom: 10px;
}

    p {
        font-size: 2em;
        color: brown;
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
        color: brown;
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
`;