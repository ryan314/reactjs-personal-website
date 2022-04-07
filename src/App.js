import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home.js';
import RelevantProjects from './Pages/RelevantProjects.js';
import Education from './Pages/Education.js';
import Achievements from './Pages/Achievements.js';
import ClubsAndSocieties from './Pages/ClubsAndSocieties.js';
import Hobbies from './Pages/Hobbies.js';


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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/RelevantProjects">Relevant Projects</Link>
        <Link to="/Education">Education</Link>
        <Link to="/Achievements">Achievements</Link>
        <Link to="/ClubsAndSocieties">Clubs and Societies</Link>
        <Link to="/Hobbies">Hobbies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RelevantProjects" element={<RelevantProjects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/ClubsAndSocieties" element={<ClubsAndSocieties />} />
        <Route path="/Hobbies/:id" element={<Hobbies />} />
      </Routes>

      <div>FOOTER</div>
    </Router>
  );
}

export default App;
