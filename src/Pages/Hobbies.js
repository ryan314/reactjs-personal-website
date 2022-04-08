import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Hobbies.css';

function Hobbies() {
  let navigate = useNavigate();

  return (
    <div>
        This is hobby!

        <button
        onClick={() => {
            navigate("/");}}
        className='hobbies-home-btn'>
            HOME
        </button> 
    </div>
  )
}

export default Hobbies;

