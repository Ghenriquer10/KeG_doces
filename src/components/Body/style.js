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
    width: 100%;
    height: 400px;
    border-radius: 5%;
`;

