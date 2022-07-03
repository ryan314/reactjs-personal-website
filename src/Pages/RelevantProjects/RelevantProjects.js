import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RelevantProjects.css';
import Cards from './RelevantProjectsCards.js';


function RelevantProjects() {
  let navigate = useNavigate();

  return (
    <div>
      <Cards />
    </div>
  )
}

export default RelevantProjects;

