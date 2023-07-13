import './CardsContainer.css'

export default function CardsContainer({movie}) {
  return (
    <div className='movieCard' key={Math.random(1) * 10000000}>
      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
      <p className='hoverText'>Click for more info!</p>
    </div>
  )
}