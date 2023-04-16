import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <ul className="nav flex-column">
      <li className="nav-link">
        <NavLink to="/react-portfolio/" className="navOpts" end>
          about
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/portfolio" className="navOpts">
          portfolio
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/contact" className="navOpts">
          contact
        </NavLink>
      </li>
      <li className="nav-link">
        <NavLink to="/react-portfolio/resume" className="navOpts">
          resume
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
