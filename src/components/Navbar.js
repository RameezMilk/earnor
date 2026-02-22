import React from "react";

import "../styles/Navbar.css";
import earnorLogo from "../assets/earnor-logo-green.png";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={earnorLogo} alt="Earnor Logo" className="navbar-logo-img large-logo neon-red-logo" />
        <span className="navbar-title large-title">Earnor</span>
      </div>
      <ul className="navbar-links">
        <li>About</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
        <li className="navbar-dropdown">All Pages <span className="navbar-caret">▼</span></li>
      </ul>
      <button className="navbar-cta">GET STARTED</button>
    </nav>
  );
}

export default Navbar;
