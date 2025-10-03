// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  // Navigation එක collapsed ද කියලා track කරන්න state එකක් හදමු.
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Button එක click කළාම state එක toggle කරන function එක.
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <span className="fw-bold">Hathisa Thissara</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/work">My Work</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <a href="/hathisa_thissara_2025.pdf" download className="btn btn-primary ms-3">Download CV</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;