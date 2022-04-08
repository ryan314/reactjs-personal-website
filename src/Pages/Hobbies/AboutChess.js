import './AboutChess.css';
import Home from '../../index.js';

import game0 from '../../Images/Chess/game0.jpg';
import modes from '../../Images/Chess/modes.jpg';
import puzzle0 from '../../Images/Chess/puzzle0.jpg';

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

function AboutChess() {
    const navigate = useNavigate()
    
    return (   
        <div>
            <div className='about-chess-title'>Chess Journey</div>
            <img className='modes' src={modes} alt=''></img>
            <img className='puzzle0' src={puzzle0} alt=''></img>
            <img className='game0' src={game0} alt=''></img>
            <div className='about-chess-description'>
                (Reading from top to bottom)
                <br/>
                <br/>
                Image 1: These are the various gamemodes I would play on Lichess
                where the number to the left of the plus operator is the base amount
                of time each player receives and the number to the right of the plus
                operator is the increment time a player receives for each move they 
                make. 
                <br/>
                <br/>
                Image 2: This is an example of a puzzle you can practice in prepartion 
                for a chess game.
                <br/>
                <br/>
                Image 3: This is an example of a game you can play against a Stockfish
                engine (in this picture, the Stockfish engine is rated 3000, which 
                is the highest rating possible on Lichess)
            </div>
            
            <div className='about-chess-footer'></div>

            <button 
            onClick={() => {
            navigate("/", {state: true })}}
            className="btn about-chess-home-btn"> 
                Home
            </button>
        </div>
    );
}

export default AboutChess;