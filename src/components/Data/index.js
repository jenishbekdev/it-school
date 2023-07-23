import React from 'react';
import user from "../../img/user.svg"
import {FiUser} from "react-icons/fi";
import "./index.scss"
import {AiOutlineCreditCard} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {BsBasket} from "react-icons/bs";
import {IoExitOutline} from "react-icons/io5";
import sim from "../../img/sim.svg"
import wifi from "../../img/wifi.svg"
import img from '../../img/visa1.svg'


const Data = () => {
    return (
        <div id="data">
            <div className="container">
                <h1><span>Главная /</span> Профиль / Личные данные</h1>
                <div className="data">
                    <div className="data__title"><img src={user} alt=""/>
                        <button>Добавить фото</button>
                        <div className="data__title--line"><FiUser className="data__title--line__icon"/>
                            <h3> Личные данные</h3></div>
                        <div className="data__title__lions"></div>
                        <div className="data__title--line"><AiOutlineCreditCard className="data__title--line__icon"/>
                            <h3>Платежные карты</h3></div>
                        <div className="data__title__lions"></div>
                        <div className="data__title--line"><FaRegComment className="data__title--line__icon"/>
                            <h3> Подписки</h3></div>
                        <div className="data__title__lions"></div>
                        <div className="data__title--line"><BsBasket className="data__title--line__icon"/>
                            <h3> Мои покупки</h3></div>
                        <div className="data__title__lions"></div>
                        <div className="data__title--line"><IoExitOutline className="data__title--line__icon"/>
                            <h3> Выйти</h3></div>
                    </div>
                    <div className="data--card">
                        <h1>Платежные карты</h1>
                     <div className="data--card__title1">
                         <div className="data--card__title1__title">
                             <h1>Visa Classic</h1>
                             <img className='data--card__title1__title--img1' src={sim} alt=""/>
                             <img className='data--card__title1__title--img2' src={wifi} alt=""/>
                             <h3>4000 1234 5678 9010</h3>
                             <span>12/34</span>
                             <img className='data--card__title1__title--img' src={img} alt=""/>
                         </div>
                         <div className="data--card__title1__title">
                             <h1>Visa Classic</h1>
                             <img className='data--card__title1__title--img1' src={sim} alt=""/>
                             <img className='data--card__title1__title--img2' src={wifi} alt=""/>
                             <h3>4000 1234 5678 9010</h3>
                             <span>12/34</span>
                             <img className='data--card__title1__title--img' src={img} alt=""/>
                         </div>
                     </div>
                        <div className="data--card__divs">
                            <div className="data--card__divs--divs2">
                                <h2>Добавить карту</h2>
                                <span>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</span>
                                <button>Добавить карту</button>
                                <p>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет возвращена вам а течении 48 часов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};
export default Data;