import React from 'react';
import ReactDOM from 'react-dom';
import './HobbiesCards.css';
import CardItem from '../../CardItem';
import ComputerScience from '../../Images/computer-science.jpg';
import piano from '../../Images/Piano/piano.jpg';
import chess from '../../Images/Chess/chess.jpg';
  
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
    <div className='h-card-container'>
      <div className='h-card-1'>
        <img src={ComputerScience} className='cs-proj-img'></img>
        <Link to='/about-cs-projects'>CS Projects</Link>
      </div>
      
      <div className='h-card-2'>
        <img src={piano} className='piano-img'></img>
        <Link to='/about-piano'>Piano</Link>
      </div>

      <div className='h-card-3'>
        <img src={chess} className='chess-img'></img>
        <Link to='/about-chess'>Chess</Link>
      </div>
    </div>
  );
}

export default Cards;

/*
<CardItem
              src={chess}
              text='Exercise the Mind to Think Ahead'
              label='Chess'
              path='/about-chess'
            />

      */