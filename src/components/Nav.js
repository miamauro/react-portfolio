import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  );
}

export default Nav;
