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
    width: 400px;
    height: 600px;
    border-radius: 5%;
    background-color: rgba(0,0,0,0.7);
    border: 2px solid brown;
    .d-block{
        border-radius: 10px;
    }
`;

