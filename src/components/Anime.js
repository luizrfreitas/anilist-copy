import './Anime.css';

export default function Anime ({ animes }) {

    let animeList = [];

    animes.map((anime) => {
        animeList.push(
            <div id={anime.key}>
                <img
                src={anime.image}
                alt={anime.name}
                className='anime__banner'
                ></img>
                <div className='anime__info-box'>
                    <a href='null' className='anime__name'>{anime.name}</a>
                </div>
            </div>
            );
        
        return (animeList);
    })

    return(
        <>
        {animeList}
        </>
        );

}