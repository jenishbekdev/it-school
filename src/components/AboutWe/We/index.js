import React from 'react';
import './index.scss'
import {NavLink} from "react-router-dom";
import comanda1 from '../../../img/image 20.svg'
import comanda2 from '../../../img/comanda.svg'

const We = () => {
    return (
        <div id="we">
            <div className="container">
               <NavLink to="/home"><h4>Главная / <span>О нас</span></h4></NavLink>
                <div className="we">
                    <h1>О нас</h1>
                    <p>Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию.</p>
                    <h5>Форма обучения - онлайн, с применением электронного обучения и дистанционных образовательных технологий  на образовательной платформе Moodle и прямые эфиры с преподавателем. 154 академических часа трудоёмкости учебной деятельности отведено практическим занятиям и выполнению практических заданий.</h5>

                    <div className="we--img">
                        <img src={comanda1} alt=""/>
                        <img src={comanda2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default We;