import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';


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

function Home() {

  return (
    <div>
      THIS IS THE HOME PAGE
    </div>
  );
}

export default Home;
