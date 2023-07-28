import React from "react";
import { NavLink, Link } from "react-router-dom";
 import logo from './../../img/headerlogo.svg'
import './index.scss'

function Header() {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header__logo">
                        <NavLink to={"/"} className="header__menu-link">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <nav className="header__nav">
                            <ul className="header__menu-list">
                                <li className="header__menu-item">
                                    <NavLink to={"/ourSchool"}  className="header__menu-link">
                                        О школе
                                    </NavLink>
                                </li>
                                <li className="header__menu-item">
                                    <NavLink to={"/all-curs"} className="header__menu-link">
                                        Наши курсы
                                    </NavLink>
                                </li>
                                <li className="header__menu-item">
                                    <NavLink to={"/aboutus"} className="header__menu-link">
                                        О нас
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__podpiska">
                        <Link to={"/Login"} className="header__podpiska-voyti">
                            Войти
                        </Link>
                        <Link to={""} className="header__podpiska-podpis">
                            Подписаться
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;







{/*<li className="menu__item"><NavLink to={'/ourSchool'}>О школе</NavLink></li>*/}
{/*<li className="menu__item"><NavLink to={'/aboutcours'}>Наши курсы</NavLink></li>*/}
{/*<li className="menu__item"><NavLink to={'/aboutUs'}>О нас</NavLink></li>  */}