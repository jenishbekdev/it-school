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
                    <NavLink to={'/curs'}>
                        <div className="curs__card">
                            <h1>Frontend-разработчик</h1>
                            <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим
                                функционалом.
                                Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые
                                проекты</p>
                            <NavLink to="/curs">
                                <div className="curs__card">
                                    <h1>Frontend-разработчик</h1>
                                    <p>Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим
                                        функционалом.
                                        Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать
                                        новые
                                        проекты</p>
                                    <div className="curs__card--link">
                                        <h3>Подробнее</h3>
                                        <BsArrowRight/>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
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
                                <BsArrowRight/>
                            </div>
                        </div>
                        <div className="curs__card">
                            <h1>UX / UI Дизайнер</h1>
                            <p>
                                Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист
                                UX/UI
                                отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров
                                для
                                комфорьного использования продукта.
                            </p>
                            <div className="curs__card--link">
                                <h3>Подробнее</h3>
                                <BsArrowRight/>
                            </div>
                        </div>
                        <button><NavLink to="/all-curs">Все курсы</NavLink></button>
                    </NavLink>
                </div>
            </div>
        </div>
);
};

export default Curs;