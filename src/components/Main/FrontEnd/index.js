import React from 'react';
import './index.scss'
import {NavLink} from "react-router-dom";

const FrontEnd = () => {
    return (
        <div id="FrontEnd">
            <div className="container">
                <h1><NavLink to="/">Главная / </NavLink><NavLink to="/all-curs">Наши курсы / </NavLink><span>Frontend- разработчик</span></h1>
                <div className="FrontEnd">
                    <div className="FrontEnd1">
                        <h2>Frontend-разработчик</h2>
                        <p>Идея реактивного программирования появилась  сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции </p>
                        <NavLink to="/regis">
                            <button>Купить курс за 46 $</button>
                        </NavLink>
                    </div>
                    <div className="FrontEnd2">
                        <div className="FrontEnd2__text">
                            <span>Доступ:</span>
                            <h3>Навсегда</h3>
                        </div>
                        <div className="FrontEnd2__text2">
                            <span>В курс входит:</span>
                            <h3>3 модулей <br/> 60материалов</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrontEnd;