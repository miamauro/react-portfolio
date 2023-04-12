import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
