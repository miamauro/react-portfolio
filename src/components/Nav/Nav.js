import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-link">
        <NavLink to="/react-portfolio" className="test">
          About
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/portfolio" className="test">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/contact" className="test">
          Contact
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/resume" className="test">
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
