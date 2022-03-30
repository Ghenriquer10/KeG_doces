import React from 'react';
import * as C from './style';
import { Carousel } from 'react-bootstrap';
import {verticalGallery} from '../../assets/index'

export default function Body(){      
    return(
        <C.Container>
            <p>Os mais bonitos e deliciosos ovos de páscoa!!!</p>
            <C.CarousselContainer>
                <Carousel fade>
                    {verticalGallery.map((item) => {
                        return(
                            <Carousel.Item>
                                <img alt={item.title} src={item.src}/>
                                <p>{item.title}</p>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </C.CarousselContainer>
        </C.Container>
    )
}