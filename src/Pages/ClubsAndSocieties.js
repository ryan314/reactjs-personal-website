import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ClubsAndSocieties.css';

function ClubsAndSocieties() {
  let navigate = useNavigate();

  return (
    <div>
        <div className="clubsandsocieties-title">ClubsAndSocieties</div>

        <h4 className="club-societies">
            From 2019 to 2020, I was a part of St. Augustine CHS DECA. In this club, I participated in case competitions where me and my 
            DECA partner have to analyze a business case problem and provide a rational solution.
            <br/>
            <br/>
            From 2019 to 2022, I was in the St. Augustine CHS Mathematics Club where the club members would collaborate on how to solve
            interesting and difficult math problem sets. 
            <br/>
            <br/>
            In 2021, I was a participant in the FinTech Hackathon where I attempted to create a finance-based project with group 
            members. 
            <br/>
            <br/>
            From 2021 to 2022, I was a member of the UW Computer Science Club where we would discuss about CS-related topics and
            bond as CS enthusiasts.
        </h4>

        <button
        onClick={() => {
            navigate("/");}}
        className='clubsandsocieties-home-btn'>
            HOME
        </button>
    </div>
  )
}

export default ClubsAndSocieties;

/*



 

*/