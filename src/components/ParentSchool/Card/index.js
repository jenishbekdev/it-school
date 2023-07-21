import React from 'react';
import './index.scss'


const Card = () => {
    return (
        <div id="card">
            <h1>Уровень пакетов</h1>
            <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>
                <span> Вашем личном кабинете и больше списаний не будет</span></p>
            <div className="container">
                <div className="card">
                    <div className="card__block">
                        <h2>Месяц +</h2>
                        <p1>Доступны: Все статьи</p1>
                        <h3>105,00 $</h3>
                        <h4>Ежемесячно</h4>
                        <div className="card__block--btn">
                            <button className="card__block--btn__btn1">Оформить подписку</button>
                            <button className="card__block--btn__btn2">Подробнее</button>
                        </div>
                    </div>
                    <div className="card__block">
                        <h2>Месяц +</h2>
                        <p1>Доступны: Все статьи</p1>
                        <h3>105,00 $</h3>
                        <h4>Ежемесячно</h4>
                        <div className="card__block--btn">
                            <button className="card__block--btn__btn1">Оформить подписку</button>
                            <button className="card__block--btn__btn2">Подробнее</button>
                        </div>
                    </div>
                    <div className="card__block">
                        <h2>Месяц +</h2>
                        <p1>Доступны: Все статьи</p1>
                        <h3>105,00 $</h3>
                        <h4>Ежемесячно</h4>
                        <div className="card__block--btn">
                            <button className="card__block--btn__btn1">Оформить подписку</button>
                            <button className="card__block--btn__btn2">Подробнее</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;