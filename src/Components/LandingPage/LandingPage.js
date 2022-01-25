import React, { useEffect, useState } from 'react'

export default function LandingPage() {
    const [media, setMedia] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/week?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa')
            .then(req => req.json())
            .then(req => {setMedia(req.results); return req})
            .then(req => console.log(req))

        console.log(media)
    }, [])

    return(
        <div>
            {/* <CardsContainer /> */}
            {media.map((movie, key) => <div className='ladingPageMedia' key={Math.random(1)*10000000}>{movie.title}</div>)}
        </div>
    )
}