import React from 'react';
import './index.scss'
import {AiOutlineCheck} from "react-icons/ai";

const Choose = () => {
    return (
        <div id="choose">
            <h5>Главная / Пакет участия</h5>
            <h1>Выберите свой пакет участия</h1>
            <div className="container">
                <div className="choose">
                    <div className="choose__card">
                        <h2>Месяц +</h2>
                        <h3>105,00 $</h3>
                        <h4>Ежемесячно</h4>
                        <h6><AiOutlineCheck/> Все статьи</h6>
                        <div className="choose__card--btn">
                            <button>Оформить подписку</button>
                        </div>
                    </div>
                    <div className="choose__card">
                        <h2>Год</h2>
                        <h3>220,00 $</h3>
                        <h4>Ежегодно</h4>
                        <h6><AiOutlineCheck/> Все статьи</h6>
                        <p><AiOutlineCheck/> Все мастер классы</p>
                        <div className="choose__card--btn1">
                            <button>Оформить подписку</button>
                        </div>
                    </div>
                    <div className="choose__card">
                        <h2>Год +</h2>
                        <h3>585,00 $</h3>
                        <h4>Ежемесячно</h4>
                        <p><AiOutlineCheck/> Все статьи</p>
                        <p><AiOutlineCheck/> Все мастер классы</p>
                        <p><AiOutlineCheck/> 6 новых статей каждый месяц</p>
                        <p><AiOutlineCheck/> Доступ к курсу “DevOps <br/>- инженер”</p>
                        <div className="choose__card--btn2">
                            <button>Оформить подписку</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;