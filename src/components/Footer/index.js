import React from "react";
import * as C from './style'
import {FaWhatsapp, FaInstagram, FaLinkedin} from 'react-icons/fa'

export default function Footer(){
    return(
        <C.Container>
            <C.Contacts>
                <p>Adquira já a sua lembrancinha!</p>
                <p>Entre em contato:</p>
                <div className='social-media'>
                    <a href='https://www.instagram.com/keg.lembracinhas/'><FaInstagram size={40}/></a>
                    <a href='http://api.whatsapp.com/send?phone=5561993821683'><FaWhatsapp size={40}/></a>
                    <a href='http://api.whatsapp.com/send?phone=5561993821683'><FaWhatsapp size={40}/></a>
                </div>
            </C.Contacts>
            <C.Developer>
                <p>Desenvolvido por:</p>
                <p>Gustavo Henrique Nogueira</p>
                <div className='social-media'>
                    <a href='https://www.linkedin.com/in/gustavo-henrique-a584021a2/'><FaLinkedin size={40}/></a>
                    <a href='http://api.whatsapp.com/send?phone=5561995776284'><FaWhatsapp size={40}/></a>
                    <a href='https://www.instagram.com/gustavo_h.n.f/'><FaInstagram size={40}/></a>
                </div>
            </C.Developer>
        </C.Container>
    )
}
