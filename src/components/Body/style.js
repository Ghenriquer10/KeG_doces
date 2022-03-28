import styled from 'styled-components';
import background from '../../assets/background/backgroundegg.jpg'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-size: cover;
    background-image: url(${background});
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    `;

export const CarousselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 400px;
    border-radius: 5%;
`;

export const Card = styled.div`
    width: 250px;
    height: 300px;
    display: flex;
    flex: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    margin: 0 30px;
    border: 1px solid red;
    
    img {
        width: 100%;
        border-radius: 5px;
        height: auto;
}

`;
