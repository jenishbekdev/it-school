import React from 'react';
import './index.scss'
import {AiOutlineCheck} from "react-icons/ai";


const Section = () => {
    return (
        <div id="section">
            <div className="container">
                <div className="section">
                    <h1>Подписки</h1>
                    <div className="section--block">
                        <div className="section--block__span1">
                            <h5>Тариф:</h5>
                            <h5>Год</h5>
                            <h5>Статус :</h5>
                            <h5>Начальная</h5>
                            <h5>Сумма :</h5>
                        </div>
                        <div className="section--block__span2">
                            <h5>220.00 $</h5>
                            <h5>Карта :</h5>
                            <h5>5106 21 ХХ ХХХХ 4186</h5>
                            <h5>Действует до :</h5>
                            <h5> 30 . 09. 2022 г</h5>
                        </div>
                    </div>
                    <h1>Другие тарифы</h1>
                   <div style={{display:"flex"}} className="lol">
                       <div className="section--block2">

                           <div>
                               <h2>Месяц +</h2>
                               <h3>105,00 $</h3>
                               <h4>Ежемесячно</h4>
                               <h6><AiOutlineCheck/> Все статьи</h6>
                           </div>
                           <div className="section--block2__btn">
                               <button>Оформить подписку</button>
                           </div>
                       </div>
                       <div className="section--block2">
                           <div>
                               <h2>Год +</h2>
                               <h3>585,00 $</h3>
                               <h4>Ежегодно</h4>
                               <h6><AiOutlineCheck/> Все статьи</h6>
                               <h6><AiOutlineCheck/> Все мастер классы</h6>
                               <h6><AiOutlineCheck/> 6 новых статей каждый месяц</h6>
                               <h6><AiOutlineCheck/> Доступ к курсу “DevOps - <br/> инженер”</h6>
                           </div>
                           <div className="section--block2__btn">
                               <button>Оформить подписку</button>
                           </div>
                       </div>
                   </div>

                </div>
            </div>
        </div>
    );
};

export default Section;


