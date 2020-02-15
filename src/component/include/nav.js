import React, { Component } from 'react';
import { NavLink} from "react-router-dom";

class Nav extends Component{
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <NavLink  className="navbar-brand" to="/"><img src="./images/logo.png" alt="..." /></NavLink>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
      <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-4">
            <li className="nav-item active">
                <NavLink  className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" to="/stuff">Stuff</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >
                Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <NavLink className="dropdown-item" to="/stuff">Stuff</NavLink>
                  <a className="dropdown-item" href="#">
                  Another action
                  </a>
                  <a className="dropdown-item" href="#">
                  Something else here
                  </a>
                </div>
            </li>
          </ul>
      </div>
    </nav>
    );
  }
}
export default Nav;