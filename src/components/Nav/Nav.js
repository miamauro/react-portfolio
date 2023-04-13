import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-link">
        <Link to="/react-portfolio" className="test">
          About
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/react-portfolio/portfolio" className="test">
          Portfolio
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/react-portfolio/contact" className="test">
          Contact
        </Link>
      </li>
      <li className="nav-link">
        <Link to="/react-portfolio/resume" className="test">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
