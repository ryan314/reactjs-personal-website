import React from 'react';
import ReactDOM from 'react-dom';
import './HobbiesCards.css';
import CardItem from '../../CardItem';
import ComputerScience from '../../Images/computer-science.jpg';
import piano from '../../Images/Piano/piano.jpg';
import chess from '../../Images/Chess/chess.jpg';
  
function Cards() {
  return (
    <div>
      <div className='card-items2'>
        <CardItem
          src={ComputerScience}
          text='Explore the Depths of Computer Science Application'
          label='Coding Passion Projects'
          path='/about-cs-projects'
        />
        <CardItem
          src={piano}
          text='Explore the World of Musical Creativity'
          label='Piano'
          path='/about-piano'
        />
        <CardItem
          src={chess}
          text='Exercise the Mind to Think Ahead'
          label='Chess'
          path='/about-chess'
        />
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