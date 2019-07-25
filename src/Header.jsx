import React from 'react'
import './css/header.css'
import './css/index.css'
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
	<nav className="header-container">
		<h1 className="he-title">
			<Link className="he-title" to='/'>My Portfolio</Link>
		</h1>
	</nav>
	)
}
export default Header