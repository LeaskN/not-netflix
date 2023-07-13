import React, { useEffect, useState } from 'react'
import SidewaysScroll from "../../Functionality/SidewaysScroll";
import CardsContainer from '../CardsContainer/CardsContainer';
import './LandingPage.css';

export default function LandingPage() {
    const [media, setMedia] = useState([]);
    const [page, setPage] = useState(1);
    const scrollRef = SidewaysScroll();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa&page=${page}`)
            .then(req => req.json())
            .then(req => {setMedia([...media, ...req.results])})
    }, [page])
    
    const handleNextLoad = (e) => {
        if(e.currentTarget.scrollLeft>e.currentTarget.scrollWidth-(2*e.currentTarget.offsetWidth)){
            console.log(page)
            setPage(page+1);
        }
    }


    return(
        <div ref={scrollRef} onScroll={handleNextLoad} className='landingPageContainer' >
            {media.map((movie) => 
                <CardsContainer key={Math.random(1) * 10000000} movie={movie}/>
            )}
        </div>
    )
}