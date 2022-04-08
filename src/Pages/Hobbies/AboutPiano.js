import './AboutPiano.css';
import myPiano from '../../Images/Piano/my-piano.jpg';

import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';

function AboutPiano() {
    const navigate = useNavigate()

    return (
        <div>
            <div className='about-piano-title'>Piano</div>
            <img className='my-piano' src={myPiano} ></img>

            <div className='about-piano-description'>
                On the piano, I like to compose my own music as well as play Classical music. 
            </div>

            <div className='about-piano-footer'></div>

            <button 
            onClick={() => {
            navigate("/", {state: true })}}
            className="btn about-piano-home-btn"> 
                Home
            </button>
        </div>
    );
}

export default AboutPiano;