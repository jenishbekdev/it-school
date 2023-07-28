import React from 'react';
import './index.scss'
import logo from '../../../img/logo.png'
import {NavLink} from "react-router-dom";

const School = () => {
    return (
        <div id="school">
            <div className="container">
                <h3> <NavLink to="/">Главная /</NavLink> О школе</h3>
                <div className="school">
                    <div className="school__title">
                            <h1> О нашей школе:</h1>
                            <p> Наша платформа — это интенсивная программа <br/>
                                обучения для тех, кто хочет освоить востребованную <br/>
                                профессию, войти в IT и зарабатывать больше.
                            </p>
                            <h1>Наша миссия:</h1>
                            <p>Сформировать интерес к современным технологиям <br/>
                                и помочь школьнику определиться с выбором <br/>
                                будущей специальности.</p>
                    </div>
                    <div>
                        <img src={logo} alt=""/>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default School;