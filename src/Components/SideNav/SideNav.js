import { BsSearch, BsHouse, BsShuffle, BsDisplay, BsPlusLg  } from "react-icons/bs";
import { BiTrendingUp, BiMovie } from "react-icons/bi";

import './SideNav.css';

export default function SideNav(){
    return(
        <div className='sideNav'>
            <BsSearch className='icon'/>
            <BsHouse className='icon'/>
            <BsShuffle className='icon'/>
            <BiTrendingUp className='icon'/>
            <BsDisplay className='icon'/>
            <BiMovie className='icon'/>
            <BsPlusLg className='icon'/>
        </div>
    )
}