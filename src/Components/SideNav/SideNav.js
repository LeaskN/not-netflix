import { BsSearch, BsHouse, BsShuffle, BsDisplay, BsPlusLg  } from "react-icons/bs";
import { BiTrendingUp, BiMovie } from "react-icons/bi";

import './SideNav.css';

export default function SideNav(){
    return(
        <div className='sideNav'>
            <button className='buttonIcon'><BsSearch className='icon'/>Search</button>
            <button className='buttonIcon'><BsHouse className='icon'/>Home</button>
            <button className='buttonIcon'><BsShuffle className='icon'/>Play Random</button>
            <button className='buttonIcon'><BiTrendingUp className='icon'/>What's Trending?</button>
            <button className='buttonIcon'><BsDisplay className='icon'/>TV Shows</button>
            <button className='buttonIcon'><BiMovie className='icon'/>Movies</button>
            <button className='buttonIcon'><BsPlusLg className='icon'/>My List</button>
        </div>
    )
}