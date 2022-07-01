// CSS file 
import './Home.css';

// Other imports 
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// Images 
import selfie from '../Images/selfie.jpg';

function Home() {
  return (
    <div>
      <img className='selfie' src={selfie}></img>

      <div className='biography'>
        Hello! My name is Ryan Chiu. 
        Can you guess what major I am in? If you look at the reflection of my glasses, you will see that I have 
        VS Code saved as a bookmark! This implies that I am a CS major! I study Computer Science at the University of Waterloo and currently, 
        I am in my 2B term. In my free time, I like to play piano, chess, and read books.  
        Hopefully you will get to know a little more about me
        through this website! Fun fact: I used VS Code to code and design this website :)
      </div>

      <div className="reference-box">
        
      </div>

      <a className="site-link1" href="https://www.linkedin.com/in/ryan-chiu-835745205/">LinkedIn</a>
      <a className="site-link2" href="https://github.com/ryan314?tab=repositories">GitHub</a> 
    </div>
  );
}

export default Home;
