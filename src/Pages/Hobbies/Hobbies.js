import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hobbies.css';
import Cards from './HobbiesCards.js';

function Hobbies() {
  let navigate = useNavigate();

  return (
    <div className="hobbies-border">
        <Cards />
    </div>
  )
}

export default Hobbies;

