import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar is-dark">
      <div className="navbar-brand">
        <a className="navbar-item" href="#/">
          <strong>My Portfolio</strong>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item" to="/home">Home</Link>
          <Link className="navbar-item" to="/about">About</Link>
          <Link className="navbar-item" to="/education">Education</Link>
          <Link className="navbar-item" to="/training">Training</Link>
          <Link className="navbar-item" to="/skills">Skills</Link>
          <Link className="navbar-item" to="/projects">Projects</Link>
          <Link className="navbar-item" to="/achievements">Achievements</Link>
          <Link className="navbar-item" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
