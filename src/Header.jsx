import React from "react";
import "./css/header.css";
import "./css/index.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
    <nav className="header-container">
      <div className="he-title">
        <Link className="he-title" to='/'>Julie Ahlquist</Link>
      </div>
    </nav>
	)
};

export default Header;