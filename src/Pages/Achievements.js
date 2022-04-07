import React from 'react'
import { useNavigate } from 'react-router-dom';

function Achievements() {
  let navigate = useNavigate();
  return (
    <div>
        Achievements 
        <button
        onClick={() => {
            navigate("/");
        }}>
            Home
        </button>

    </div>
  )
}

export default Achievements;