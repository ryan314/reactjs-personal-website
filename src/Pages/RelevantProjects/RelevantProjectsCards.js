import React from 'react';
import './RelevantProjectsCards.css';
import CardItem from '../../CardItem';
import math from '../../Images/math.jpg';
import game from '../../Images/game.jpg';

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
  useLocation,
} from 'react-router-dom';

function Cards() {
  return (
    <div className='rp-card-container'>
      <div className='rp-card-1'>
        <img src={math} className='math-img'></img>
        <Link to='/about-abs-func-simulator'>Absolute Value Function Simulator</Link>
      </div>
        
      <div className='rp-card-2'>
        <img src={game} className='game-img'></img>
        <Link to='/about-rpg-game'>RPG Game</Link>
      </div>
    </div>

    
  );
}

export default Cards;