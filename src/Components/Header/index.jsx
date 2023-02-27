import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {

  return (
    <header className="header-container">
        <nav className="nav">
          <ul>
            <li><Link className="link" to="/Inicio">Inicio</Link> </li>
            <li><Link className="link" to="/Inicio">About us</Link> </li>
            <li><Link className="link" to="/"> Salir</Link></li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;