import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./questionaire.css";
import icono  from "../images/icon.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ letterSpacing: "3px", fontSize: "30px" }}
        >
          <img src={icono} style={{width: "50px", height: "50px"}} alt="..." />
        
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/anxiety"
              >
                Ansiedad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/depresion"
              >
                Depresión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/toc"
              >
                TOC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/mood"
              >
                Estado de animo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/stress"
              >
                Estrés postraumático
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/info"
              >
                Información
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
