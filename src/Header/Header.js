import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Pegasus Games</h1>
      </Link>
      <FaBars className="mobile-icon" />
      <ul className="header-ul">
        <Link to="/board-games">
          <li className="header-li">
            <b>Board Games</b>
          </li>
        </Link>
        <Link to="magic">
          <li className="header-li">
            <b>Magic</b>
          </li>
        </Link>
        <Link to="rpg">
          <li className="header-li">
            <b>RPG</b>
          </li>
        </Link>
        <Link to="about">
          <li className="header-li">
            <b>About</b>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
