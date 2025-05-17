import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          {/* Aquí irá tu logo cuando lo tengas */}
          <span>Dulce Sabores</span>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/categorias">CATEGORIAS</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login">LOGIN</Link>
      </div>
    </nav>
  );
}

export default Navbar;
