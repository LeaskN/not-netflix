import React, { useEffect, useState } from 'react'
import CardsContainer from '../CardsContainer/CardsContainer';
import SideScroll from '../../Functionality/SideScroll';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import './Category.css';

export default function Category() {
    const contentWrapper = React.useRef(null);
    const [media, setMedia] = useState([]);
    const [page, setPage] = useState(1);
    const [waitingPeriod, setWait] = useState(0);
    const [scrolledLength, setScrolledLength] = useState(0);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=fed5b7c4a0fea83e14866a8dd8cb6baa&page=${page}`)
            .then(req => req.json())
            .then(req => { setMedia([...media, ...req.results]) })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const handleNextLoad = (e) => {
        console.log('get new page')
        setPage(page + 1);
    }

    const handleClick = (e) => {

        //scrollRight
        if(e.currentTarget.previousSibling.className === 'categoryContainer'){
            let totalLength = e.currentTarget.previousSibling.scrollWidth;
            let viewWidth = e.currentTarget.previousSibling.offsetWidth;
            setScrolledLength(scrolledLength + viewWidth);
            console.log(scrolledLength)
            if(totalLength - scrolledLength < viewWidth*3){
                handleNextLoad();
            }
            let currTrans = e.currentTarget.previousSibling.style.transform.match(/-?\d*\.{0,1}\d+/);
            currTrans = currTrans === null ? 0 : Number(currTrans[0])
            let newNum = currTrans - 90
            e.currentTarget.previousSibling.style.transform = `translateX(${newNum}%)`;
        //scrollLeft
        } else if(e.currentTarget.nextSibling.className === 'categoryContainer' 
        && e.currentTarget.nextSibling.style.transform.match(/-?\d*\.{0,1}\d+/) < 0){
            let totalLength = e.currentTarget.nextSibling.scrollWidth;
            let viewWidth = e.currentTarget.nextSibling.offsetWidth;
            setScrolledLength(scrolledLength - viewWidth);
            console.log(scrolledLength)
            if(scrolledLength <= 0 ){
                return
            }
            let currTrans = e.currentTarget.nextSibling.style.transform.match(/-?\d*\.{0,1}\d+/);
            currTrans = currTrans === null ? 0 : Number(currTrans[0])
            let newNum = currTrans + 90
            e.currentTarget.nextSibling.style.transform = `translateX(${newNum}%)`;
        }
    }


    return (
        <div className='categoryContainerWrapper'>
            
            <h1>Trending</h1>
            <span className='scrollButton scrollLeft'
                onClick={handleClick}
                // onClick={() => {
                //     SideScroll(contentWrapper.current, 25, 100, -10);
                // }}
            ><FaChevronLeft /></span>
            <div onScroll={handleNextLoad} className='categoryContainer' ref={contentWrapper}>
                {media.map((movie) =>
                    <CardsContainer key={Math.random(1) * 10000000} movie={movie} />
                )}
            </div>
            <span className='scrollButton scrollRight'
                    onClick={handleClick}
                // onClick={() => {
                    // SideScroll(contentWrapper.current, 25, 100, 10);
                // }}
            ><FaChevronRight /></span>
        </div>
    )
}