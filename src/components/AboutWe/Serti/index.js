import React from 'react';
import "./index.scss"
import serti from "../../../img/serti.svg"

const Serti = () => {
    return (
        <div id="serti">
            <div className="container">
                <div className="serti">
                    <h1>Сертификат</h1>
                    <span>По окончании обучения выдается онлайн сертификат.</span>
                    <img src={serti} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Serti;