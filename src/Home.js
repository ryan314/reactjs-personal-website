import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';

import selfie from './images/selfie.jpg';

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

function Home() {
  return (
    <div>
       <div className='link-bar'></div>

      <img className='selfie' src={selfie}></img>

      <div className='biography'>
        Hello! My name is Ryan Chiu. Can you guess what major I am in? If you look at the reflection of my glasses, you will see that I have 
        VS Code saved as a bookmark! This implies that I am a CS major! I study Computer Science at the University of Waterloo and currently 
        I am in my 2B term. I like to play piano, chess, and read books in my free time! Hopefully you will get to know a little more about me
        through this website! Fun fact: I used VS Code to design this website :)

      </div>

      <a className="site-link1" href="https://www.linkedin.com/in/ryan-chiu-835745205/">LinkedIn</a>
      <a className="site-link2" href="https://github.com/ryan314?tab=repositories">GitHub</a>
    </div>
  );
}

export default Home;
