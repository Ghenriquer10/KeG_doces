import styled from 'styled-components';

export const Container = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #FFF;
    background-color: #671B0B;

    @media (max-width: 700px) {
        flex-direction: column;
        height: 350px;
        p{
            text-align: center;
        }
    }
`;

export const Contacts = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        font-size: 2em;
        margin: 0;
    }
    p:first-child{
        margin-top: 20px;
    }

    .social-media{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        width: 20%;

        svg{
        color: #fff;
        background-color: brown;
        border-radius: 15px;
        }
    }
`;

export const Developer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        font-family: sans-serif;
        font-size: 0.9em;
    }
    
    p:first-child{
        font-size: 0.6em;
    }

    .social-media{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        width: 20%;

        svg{
            color: blue;
            border-radius: 15px;
        }
    }

`;