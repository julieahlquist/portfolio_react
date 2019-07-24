import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './css/header.css'


const Header = () => {
  return (
    <nav className="header-container">
      <h1 className="header-title">
        <Link className="nav-title" to='/'>My Portfolio</Link>
      </h1>
      <div className="list-reset flex">
        <NavLink className="nav-item" to='/about'>About</NavLink>
        <NavLink className="nav-item" to='/projects'>Projects</NavLink>
      </div>
    </nav>
  ) 
}

export default Header