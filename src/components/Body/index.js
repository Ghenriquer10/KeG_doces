import React from 'react';
import * as C from './style';
import Carousel from 'react-elastic-carousel';
import './style.css';

import { myGallery } from '../../assets/index';

export default function Body(){

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 5 }
      ];

      
    return(
        <C.Container>
            <p>Os mais bonitos e deliciosos ovos de páscoa!!!</p>
            <C.CarousselContainer>
                <Carousel breakPoints={breakPoints}>
                    {myGallery.map((item) => {
                        return(
                            <C.Card key={item.src}>
                                <img alt={item.title} src={item.src}/>
                            </C.Card>
                        )
                    })}
                </Carousel>
            </C.CarousselContainer>
        </C.Container>
    )
}