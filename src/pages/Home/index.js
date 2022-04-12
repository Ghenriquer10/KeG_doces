import Body from '../../components/Body'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import * as C from './style'
export default function Home(){
    return(
        <C.Container>
            <Header/>
            <Body/>
            <Footer/>
        </C.Container>
    )
}