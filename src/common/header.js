import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar navbar-light gradient">
      <div className="logo">
        <a href="/home"></a>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span className="nav-items">Publier un project</span>
          </Link>
        </li>
        <li>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span className="nav-items">S'inscrire</span>
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span className="nav-items">Connexion</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
