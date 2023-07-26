import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/headerlogo.svg";
import "./index.scss";
const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="menu">
            <li className="menu__item">
              <NavLink to={"/ourSchool"}>О школе</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={"/aboutcours"}>Наши курсы</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to={"/aboutUs"}>О насT</NavLink>
            </li>
          </ul>
          <div className="header__btn">
            <Link>Войти</Link>
            <button>Подписаться </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
