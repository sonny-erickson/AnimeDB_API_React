import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card">
            <a href="{anime.url}">
                <figure>
                    <img src={anime.image_url} alt="imageAnime" />
                </figure>
                <h3>{anime.title}</h3>
            </a>
            
        </article>
    )
}

export default AnimeCard