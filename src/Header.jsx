import React from 'react'
import './css/header.css'
import { NavLink, Link } from 'react-router-dom';


const Header = () => {
	return (
	<nav className="header-container">
		<h1 className="h-title">
			<Link className="nav-title" to='/'>My Portfolio</Link>
		</h1>
	</nav>
	)
}
export default Header