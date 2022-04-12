import styled from 'styled-components';

export const Container = styled.div`
    height: 100hv;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: brown;

    
    p{
        font-size: 4.5em;
        color: #FFF;
        margin-top: 10px;
    }

    `;

export const CarousselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
    flex-direction: column; 
    background-color: rgba(0,0,0,0.5);
    
    .slider{
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }
    
    
    .slider-div{
        width: 100% !important;
        height: 500px;
        display: flex !important; 
        align-items: center !important;
        justify-content: center !important;
        object-fit: contain;
        img{
            height: 450px;
            width: 350px;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 10px;
        }
    
        img:hover{
            transition: all 1s;
            transform: scale(1.1);
        }
        
    }

    .slider-div-2{
        width: 550px;
        height: 400px;
        object-fit: contain;
        display: flex !important; 
        align-items: center !important;
        justify-content: center !important;
        
        img{
            width: 550px;
            height: 350px;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            border-radius: 10px;
        }
        
        img:hover{
            transition: all 1s;
            transform: scale(1.07);
            border-radius: 15%;
        }
    }

.slick-prev:before, .slick-next:before{
    opacity: .75;
    color: #FFF;
}
`;

