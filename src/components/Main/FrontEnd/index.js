import React from 'react';
import './index.scss'

const FrontEnd = () => {
    return (
        <div id="FrontEnd">
            <div className="container">
                <h1 className='FrontEnd__h1'>Главная / Наши курсы / <span>Frontend- разработчик</span></h1>
                <div className="FrontEnd">
                    <div className="FrontEnd1">
                        <h1>Frontend-разработчик</h1>
                        <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                            популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на
                            конференции </p>
                        <button>Купить курс за 46 $</button>
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