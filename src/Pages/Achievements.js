import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Achievements.css';

function Achievements() {
  let navigate = useNavigate();

  return (
    <div>
        <div className="achievements-title">Achievements</div> 
        
        <h4 className="achievements">
            In Grade 9, I received the Mathematics Highest Achievement Award. This award is given to students who achieve the highest average
            in Grade 9 Mathematics. 
            <br/>
            <br/>
            In Grade 12, I received the Mathematics Highest Achievement Award for Calculus and Vectors. This award is given to students who
            achieve the highest average within the course "Calculus and Vectors". 
            <br/>
            <br/>
            I received the President's School/Distinction Scholarshid, which is awarded to incoming students who achieve 95%+ in Grade 12.
        </h4>
        
        <button
        onClick={() => {
            navigate("/");}}
        className='achievements-home-btn'>
            HOME
        </button>

    </div>
  )
}

export default Achievements;

