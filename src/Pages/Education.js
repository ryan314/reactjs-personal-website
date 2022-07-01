import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Education.css';

function Education() {
  let navigate = useNavigate();

  return (
    <div className="education-border">
        <div className="education-title"></div>

          <div className="courses">
                ♠ MATH 135 - Algebra
                <br/>
                <br/>
                ♠ MATH 136 - Linear Algebra 
                <br/>
                <br/>
                ♠ MATH 137 - Calculus 1 
                <br/>
                <br/>
                ♠ MATH 138 - Calculus 2
                <br/>
                <br/>
                ♠ CS 135 - Designing Functional Programs
                <br/>
                <br/>
                ♠ CS 136 - Elementary Algorithm Design and Data Abstraction
                <br/>
                <br/>
                ♠ CS 245 - Logic and Computation
                <br/>
                <br/>
                ♠ CS 246 - Object-Oriented Software Development
            </div> 

        <button
        onClick={() => {
            navigate("/");}}
        className='education-home-btn'>
            HOME
        </button>
    </div>
  )
}

export default Education;
