import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/react-portfolio">About</Link>
      </li>
      <li>
        <Link to="/react-portfolio/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/react-portfolio/contact">Contact</Link>
      </li>
      <li>
        <Link to="/react-portfolio/resume">Resume</Link>
      </li>
    </ul>
  );
}

export default Nav;
