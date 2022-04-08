import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelevantProjects.css';


function RelevantProjects() {
  let navigate = useNavigate();

  return (
    <div>
        RelevantProjects

        <button
        onClick={() => {
            navigate("/");}}
        className='relevantprojects-home-btn'>
            HOME
        </button>   
    </div>
  )
}

export default RelevantProjects;

