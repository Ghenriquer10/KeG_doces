import React from 'react';
import * as C from './style';
import {chocoball, easteregg} from '../../assets/index'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
        <C.Container>
            <p>Os mais bonitos e deliciosos ovos de páscoa!</p>
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
            <p>E também os melhores brigadeiros!</p>
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
    )
}