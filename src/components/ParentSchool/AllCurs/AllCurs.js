import React from 'react';
import './index.scss'
import {BsArrowRight} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Curs = () => {
    return (
        <div id="curses">
            <div className="container">
                <h5> <NavLink to="/"><span>Главная /</span></NavLink> Наши курсы</h5>
                <h2>Курсы</h2>
                <div className="curses">
                    <div className="curses__card">
                        <h1>Frontend-разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                            <div className="curs__card--link__line"></div>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>Backend-разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                            <div className="curs__card--link__line"></div>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>UX / UI Дизайнер</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>DevOps - инженер</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>Android-разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>Java-разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>С++ - разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>IOS - разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                    <div className="curses__card">
                        <h1>Python - разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curses__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Curs;


