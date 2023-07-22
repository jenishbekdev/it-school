import React from 'react';
import './index.scss'
import logo from "../../../img/ManBisnace.png"

const Master = () => {
    return (
        <div id="Master">
            <div className="container">
                <img src={logo} alt=""/>
                <div className="Master">
                    <span>Мастер класс ведет</span>
                    <h1>Евгений Александрович</h1>
                    <span> Frontend developer </span>
                </div>
            </div>
        </div>
    );
};

export default Master;