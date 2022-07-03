import Home from '../../index.js';
import './AboutCSProjects.css';

import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Navigate,
    Link,
    Outlet,
    useParams,
    NavLink,
    useNavigate,
    useLocation
} from 'react-router-dom';

function AboutCSProjects() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='about-cs-projects-title'>CS Projects</div>

            <div className='about-cs-projects-description'>
                Navigate to the "Home" button below and click on the "Relevant Projects" button on the Home
                page to see details about personal CS projects I have done.
            </div> 
        </div>
    );
}

export default AboutCSProjects;