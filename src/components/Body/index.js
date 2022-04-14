import React from 'react';
import * as C from './style';
import {chocoball, easteregg} from '../../assets/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import easterimg from '../../assets/images/website-images/ovo-de-pascoa-imagem-animada-0067.gif'
import chocoballimg from '../../assets/images/website-images/brigadeiro-gif.gif'

import Slider from "react-slick";

export default function Body(){  
    
    const settingsVertical = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className: 'slider',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    
    return(
        
        <>
          <C.Container>
              <div className='tittle-container'>
                <p>Os mais bonitos e deliciosos ovos de páscoa!</p>
                <img src={easterimg} alt="imagem ovo de pascoa"/> 
              </div>
              <C.CarousselContainer>
                  <Slider {...settingsVertical} style={{maxWidth:'90%'}}>
                      {easteregg.map((item)=> {
                        return(
                          <div className='slider-div' key={item.title}>
                                  <img alt={item.title} src={item.src}/>
                              </div>
                          )
                        })}
                  </Slider>
              </C.CarousselContainer>
              <div className='tittle-container'>
                <p>E também os melhores brigadeiros!</p>
                <img src={chocoballimg} alt="imagem ovo de pascoa"/> 
              </div>
              <C.CarousselContainer>
                  <Slider {...settingsVertical} style={{maxWidth:'90%'}}>
                      {chocoball.map((item)=> {
                          return(
                              <div className='slider-div' key={item.title}>
                                  <img alt={item.title} src={item.src}/>
                              </div>
                          )
                      })}
                  </Slider>
              </C.CarousselContainer>
          </C.Container>
        </>
    )
}