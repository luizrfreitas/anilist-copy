import './Category.css';
import Anime from './Anime.js';

//Category tem a função de retornar todos os animes de cada categoria.

function Category ({ animes }) {

    return (
        <>
        <ul>
            <li>
                <Anime animes={animes}/>
            </li>
        </ul>
        
        </>
        );
}

export default Category;