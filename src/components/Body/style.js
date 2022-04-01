import styled from 'styled-components';

export const Container = styled.div`
    height: 100hv;
    width: 100%;
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
    height: 600px;
    background-color: rgba(0,0,0,0.2);
    flex-direction: column; 
    margin-bottom: 50px;

    .slider{
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }

    
    .slider-div{
        width: 100% !important;
        height: 600px;
        display: flex !important; 
        align-items: center !important;
        justify-content: center !important;
        object-fit: contain;
    }
    
    
    img{
        width: 400px;
        height: 500px;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        border-radius: 10px;
    }

    img:hover{
        transition: all 1s;
        transform: scale(1.1);
    }
`;

