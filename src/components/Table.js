import Filter from './Filter.js';
import Lists from './Lists.js';

export default function Table ({ animes }){
    return (
        <div>
            <Filter />
            <Lists animes={animes}/>
        </div>
        );
}