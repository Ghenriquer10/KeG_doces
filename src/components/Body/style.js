import styled from 'styled-components';

export const Container = styled.div`
    height: 100hv;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: brown;

    .tittle-container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        img:nth-child(2){
            height: 100px;
            width: 100px;
        }
    }
    
    
    p{
        font-size: 4.5em;
        color: #FFF;
        margin-top: 10px;
    }

    @media(max-width: 700px) {
        .tittle-container{
            flex-direction: column;
            padding: 10px;
        }

        p{
            text-align: center;
        }
    }

`;

export const CarousselContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 550px;
    flex-direction: column; 
    background-color: #F7ECEA;
    
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

        @media (max-width: 400px) {
            img{
                height: 350px;
                width: 250px;
            }
        }
        
    }


.slick-prev:before, .slick-next:before{
    opacity: .75;
    color: brown;
}

@media (max-width: 400px) {
    .slick-prev:before{
        margin-left: 20px;
    }
    .slick-next:before{
        margin-left: -40px;
    }
}

`;






