import * as C from './style';
import logo from '../../assets/logo/K_GDoces-.png'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
export default function Header(){
    return(
        <C.Container>
            <C.Logo>
                <img src={logo} alt="K&G Doces"/>
                <p>Chocolates</p>
            </C.Logo>
            <C.Contacts>
                <div className='label'>
                    <p>Contatos:</p>
                </div>
                <div className='social-media'>
                    <a href='https://www.instagram.com/keg.lembracinhas/'><FaInstagram size={40}/></a>
                    <a href='http://api.whatsapp.com/send?phone=5561993821683'><FaWhatsapp size={40}/></a>
                    <a href='http://api.whatsapp.com/send?phone=5561993821683'><FaWhatsapp size={40}/></a>
                </div>
            </C.Contacts>
        </C.Container>
    )
}