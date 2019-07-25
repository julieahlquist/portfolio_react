import React from "react"
import './css/footer.css'
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
      <nav className="footer-container">
        <div className="list-reset flex">
        	<NavLink className="nav-item" to='/'>Start</NavLink>
          <NavLink className="nav-item" to='/about'>About</NavLink>
          <NavLink className="nav-item" to='/projects'>Projects</NavLink>
          <NavLink className="nav-item" to='/socialmedia'>Media</NavLink>
        </div>
      </nav>
    ) 
}

export default Footer