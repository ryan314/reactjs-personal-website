import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home.js';
import reportWebVitals from './reportWebVitals';


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

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
