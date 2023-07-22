import React from 'react';
import './index.scss'
import logo from "../../../img/ManBisnace.png";

const Image = () => {
    return (
        <div id="image">
            <div className="container">
                <img src={logo} alt=""/>
                <div className="image">
                    <div className="Master">
                        <span>Мастер класс ведет</span>
                        <h1>Евгений Александрович</h1>
                        <span> Frontend developer </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Image;