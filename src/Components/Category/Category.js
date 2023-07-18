import React, { useEffect, useState } from 'react'
import SidewaysScroll from "../../Functionality/SidewaysScroll";
import CardsContainer from '../CardsContainer/CardsContainer';
import './Category.css';

export default function Category() {
    const [media, setMedia] = useState([]);
    const [page, setPage] = useState(1);
    const [waitingPeriod, setWait] = useState(0);
    const scrollRef = SidewaysScroll();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa&page=${page}`)
            .then(req => req.json())
            .then(req => { setMedia([...media, ...req.results]) })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const handleNextLoad = (e) => {
        if (waitingPeriod === 0 && e.currentTarget.scrollLeft > e.currentTarget.scrollWidth - (2 * e.currentTarget.offsetWidth)) {
            console.log(page)
            setPage(page + 1);
            setWait(5000)
            setTimeout(() => {
                setWait(0)
            }, 1000);
        }
    }


    return (
        <div className='categoryContainerWrapper'>
            <h1>Trending</h1>
            <div ref={scrollRef} onScroll={handleNextLoad} className='categoryContainer' >
                    {media.map((movie) =>
                        <CardsContainer key={Math.random(1) * 10000000} movie={movie} />
                    )}
            </div>
        </div>
    )
}