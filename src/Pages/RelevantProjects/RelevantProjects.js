import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelevantProjects.css';
import Cards from './RelevantProjectsCards.js';


function RelevantProjects() {
  let navigate = useNavigate();

  return (
    <div className="relevantprojects-border">
        

        <button
        onClick={() => {
            navigate("/");}}
        className='relevantprojects-home-btn'>
            HOME
        </button>   

        <Cards />
    </div>
  )
}

export default RelevantProjects;

