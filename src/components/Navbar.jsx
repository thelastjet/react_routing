import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="row py-3">
        <ul className="nav align-items-end">
          <li>
            <img
              src="GhibliLogo.png"
              alt="Studio Ghibli Logo"
              className="img mx-2"
              height="50px"
            />
          </li>
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link text-dark">
              Home
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/films" className="nav-link text-dark">
              Films
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link to="/people" className="nav-link text-dark">
              People
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
