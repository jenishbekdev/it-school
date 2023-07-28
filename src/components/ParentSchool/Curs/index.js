import React from 'react';
import './index.scss'
import {BsArrowRight} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Curs = () => {
    return (
        <div id="curs">
            <div className="container">
                <h2>Курсы</h2>
                <div className="curs">

                            <NavLink to="/curs" onClick={() => window.scroll(0,0)}>
                                <div className="curs__card">
                                    <h1>Frontend-разработчик</h1>
                                    <p>
                                        Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                                        собирает
                                        фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                                        сложных
                                        вычислительных систем нейронных сетей.
                                    </p>
                                    <div className="curs__card--link">
                                        <h3>Подробнее</h3>
                                        <BsArrowRight className="curs__card--link__icon"/>
                                    </div>
                                </div>
                            </NavLink>
                    <div className="curs__card">
                        <h1>Backend-разработчик</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curs__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                            <div className="curs__card--link__line"></div>
                        </div>
                    </div>
                    <div className="curs__card">
                        <h1>UX / UI Дизайнер</h1>
                        <p>
                            Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                            собирает
                            фундамент и опорную систему для проекта - от простого сайта для магазина одежды до
                            сложных
                            вычислительных систем нейронных сетей.
                        </p>
                        <div className="curs__card--link">
                            <h3>Подробнее</h3>
                            <BsArrowRight className="curs__card--link__icon"/>
                        </div>
                    </div>
                </div>
                <NavLink to="/all-curs" onClick={() => window.scroll(0,0)}><button>Все курсы</button></NavLink>

            </div>
        </div>
    );
};

export default Curs;