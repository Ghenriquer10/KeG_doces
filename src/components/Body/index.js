import * as C from './style'
import { myGallery } from '../../assets';

export default function Body(){
      
    return(
        <C.Container>
            <p>Os mais bonitos e deliciosos ovos de páscoa!!!</p>
            <C.Content>
                <ul>
                    {myGallery.map((item) => {
                        return(
                            <li key={item.title} ><img alt={item.title} src={item.src}/></li>
                        )
                    })}
                </ul>
            </C.Content>
        </C.Container>
    )
}