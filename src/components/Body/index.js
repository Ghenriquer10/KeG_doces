import React from 'react';
import * as C from './style';
import { Carousel } from 'react-bootstrap';
import {verticalGallery} from '../../assets/index'

export default function Body(){      
    return(
        <C.Container>
            <p>Os mais bonitos e deliciosos ovos de páscoa!!!</p>
            <C.CarousselContainer>
                <Carousel interval={2000} dark>
                    {verticalGallery.map((item) => {
                        return(
                            <Carousel.Item>
                                <img className='d-block' style={{height: '500px', width: '400px'}} alt={item.title} src={item.src}/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </C.CarousselContainer>
        </C.Container>
    )
}