import React from 'react';
import './RelevantProjectsCards.css';
import CardItem from '../../CardItem';
import math from '../../Images/math.jpg';
import game from '../../Images/game.jpg';

function Cards() {
  return (
    <div className='card-container'>
      <div className='card-items'>
        <CardItem 
          src={math} 
          text='Enrich Oneself about Absolute Value Functions'
          label='Absolute Value Function Simulator'
          path='/about-abs-func-simulator'
        />
        <CardItem
          src={game}
          text='Explore the Depths of RPGs'
          label='RPG Game '
          path='/about-rpg-game'
        />
      </div>
    </div> 
    
  );
}

export default Cards;