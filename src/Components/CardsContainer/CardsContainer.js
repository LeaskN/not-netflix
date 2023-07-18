import { useEffect, useState } from 'react';
import './CardsContainer.css'

export default function CardsContainer({media}) {
  const mediaBackdrop = `https://image.tmdb.org/t/p/original/${media.backdrop_path}`;
  // const maturityRatingUrl = `https://api.themoviedb.org/3/tv/${movie.id}/content_ratings?&api_key=fed5b7c4a0fea83e14866a8dd8cb6baa`
  const maturityRatingUrl = `https://api.themoviedb.org/3/movie/${media.id}/release_dates?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa`
  const [maturityRating, setMaturityRating] = useState('');

  useEffect(() => {
    if(media.media_type === 'movie'){
      console.log(media.id)
      fetch(maturityRatingUrl)
      .then(req => req.json())
      .then(req => {
        if(req.results){
            for(let i = 0; i < req?.results?.length; i++){
              if(req.results[i].iso_3166_1 === 'US') {
                return req.results[i].release_dates[0].certification;
              }
            }
            return req.results[0].release_dates[0].certification;
          }
          console.log(req)
          return 'N/A';
        })
        .then(req => setMaturityRating(req))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='movieCard' key={Math.random(1) * 10000000}>
      <img alt='movieBackdrop' src={mediaBackdrop} />
      <div className='cornerText topLeft'>{maturityRating}</div>
      <div className='cornerText topRight'>{Math.round(media.vote_average)}/10</div>
      <div className='cornerText bottomLeft'>{media.release_date?.slice(0,4)}</div>
      <div className='cornerText bottomRight'>{media.release_date?.slice(0,4)}</div>
      <div className='cornerText title'>{media.title}</div>
      {/* <p className='hoverText'>{media.overview}</p> */}
    </div>
  )
}