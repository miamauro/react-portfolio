import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-link">
        <NavLink to="/react-portfolio" className="navOpts" end>
          About
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/portfolio" className="navOpts">
          Portfolio
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/contact" className="navOpts">
          Contact
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/resume" className="navOpts">
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
