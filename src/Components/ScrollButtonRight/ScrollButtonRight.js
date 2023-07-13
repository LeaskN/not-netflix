import { BsArrow90DegRight } from "react-icons/bs";
import './ScrollButtonRight.css';

export default function ScrollButtonRight(){
    return(
        <div className='ScrollButtonRight'>
            <button className='ScrollButtonRightImg'>
                <BsArrow90DegRight className='icon'/>
            </button>
        </div>
    )
}