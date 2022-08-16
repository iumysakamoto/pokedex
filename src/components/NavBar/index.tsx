import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.Nav}>
      <div className="dv-line">
        <div className="dv-column">
          <Link to="/">
            <h5>Devnote</h5>
          </Link>
        </div>
        <div className="dv-column dv-screen">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/noticias">Blog</Link>
            </li>
            <li>
              <Link to="/pokedex">Pokedex</Link>
            </li>
            <li>
              <Link to="/fila">Fila</Link>
            </li>
          </ul>
        </div>
        <div className="dv-column"></div>
      </div>
    </nav>
  );
};

export default NavBar;
