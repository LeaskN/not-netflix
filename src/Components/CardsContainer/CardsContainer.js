import { useEffect, useState } from 'react';
import './CardsContainer.css'
import { FaInfoCircle } from "react-icons/fa";
import YouTubeEmbed from '../../YouTubeEmbed/YouTubeEmbed';

export default function CardsContainer({ media, category}) {

  const mediaBackdrop = media.backdrop_path == null ? '' : `https://image.tmdb.org/t/p/original/${media.backdrop_path}`;
  const maturityRatingUrl = media.media_type === 'tv' ?
  `https://api.themoviedb.org/3/tv/${media.id}/content_ratings?&api_key=fed5b7c4a0fea83e14866a8dd8cb6baa` :
    `https://api.themoviedb.org/3/movie/${media.id}/release_dates?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa` 
  const [maturityRating, setMaturityRating] = useState('');

  useEffect(() => {
    fetch(maturityRatingUrl)
      .then(req => req.json())
      .then(req => {
        if (req.results) {
          for (let i = 0; i < req?.results?.length; i++) {
            if (req.results[i].iso_3166_1 === 'US') {
              if(category.title === 'Comedy Movies')console.log(media.media_type !== 'movie')
              return media.media_type === 'tb' ? req?.results?.[i]?.rating || 'No Rating' : req?.results?.[i]?.release_dates?.[0]?.certification || 'No Rating' ;
            }
          }
          return req?.results?.[0]?.release_dates?.[0]?.certification || 'No Rating';
        }
        return 'No Rating';
      })
      .then(req => setMaturityRating(req))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    mediaBackdrop === '' ? '' :
    <div className='movieCard' key={Math.random(1) * 10000000}>
      {mediaBackdrop === '' ? console.log(media) : ''}
      {mediaBackdrop === '' ? '' : <img alt='mediaBackdrop' loading="lazy" src={mediaBackdrop || 'loading'} />}
      <div className='cornerText topLeft'>{maturityRating}</div>
      <div className='cornerText topRight'>{Math.round(media.vote_average)}/10</div>
      <div className='cornerText bottomLeft'>{media?.release_date?.slice(0, 4) || media?.first_air_date?.slice(0, 4)}</div>
      <div className='cornerText bottomRight'>{<FaInfoCircle className='infoButton bounce'/>}</div>
      <div className='cornerText title'>{media.title || media.name}</div>
      {/* <p className='hiddenInfo'>{media.overview}</p> */}
      <div className='hiddenInfo' >
        <YouTubeEmbed embedId="dQw4w9WgXcQ" />
      </div>
    </div>
  )
}