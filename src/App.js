import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import RelevantProjects from './Pages/RelevantProjects/RelevantProjects.js';
import Education from './Pages/Education.js';
import Achievements from './Pages/Achievements.js';
import ClubsAndSocieties from './Pages/ClubsAndSocieties.js';
import Hobbies from './Pages/Hobbies/Hobbies.js';
import AboutChess from './Pages/Hobbies/AboutChess.js';
import AboutPiano from './Pages/Hobbies/AboutPiano.js';
import AboutCSProjects from './Pages/Hobbies/AboutCSProjects.js';
import AboutAbsFuncSimulator from './Pages/RelevantProjects/AboutAbsFuncSimulator.js';
import AboutRPGGame from './Pages/RelevantProjects/AboutRPGGame.js';

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
  useLocation,
} from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="logo">Ryan Chiu</div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/RelevantProjects" className="nav-link">Relevant Projects</Link>
        <Link to="/Education" className="nav-link">Education</Link>
        <Link to="/Achievements" className="nav-link">Achievements</Link>
        <Link to="/ClubsAndSocieties" className="nav-link">Clubs and Societies</Link>
        <Link to="/Hobbies" className="nav-link">Hobbies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RelevantProjects" element={<RelevantProjects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/ClubsAndSocieties" element={<ClubsAndSocieties />} />
        <Route path="/Hobbies" element={<Hobbies />} />

        <Route path="/about-chess" element={<AboutChess />} />
        <Route path="/about-piano" element={<AboutPiano />} />
        <Route path="/about-cs-projects" element={<AboutCSProjects />} />

        <Route path="/about-abs-func-simulator" element={<AboutAbsFuncSimulator />} />
        <Route path="/about-rpg-game" element={<AboutRPGGame />} />
      </Routes>

      <div className="footer">
      
      </div>
    </Router>
  );
}

export default App;
