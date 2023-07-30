import React from 'react';
import './index.scss'

const MasterCurs = () => {
    return (
        <div id="MasterCurs">
            <div className="container">
                <h3><span>Главная / Мастер классы / </span>Реактивное программирование на Java</h3>
                <div className="MasterCurs">
                    <div className="MasterCurs__right">
                        <h1>Реактивное программирование на Java : как, зачем и стоит ли? Часть 1 </h1>
                        <p>Идея реактивного программирования появилась
                            сравнительно недавно, лет 10 назад. Что вызвало популярность
                            этого относительно нового подхода и почему сейчас он в тренде, рассказал
                            на конференции
                        </p>
                        <button>Купить мастер-класс за 46 $</button>
                    </div>
                    <div className="MasterCurs--left">
                        <div className="MasterCurs--left__title">
                            <span>Доступ: </span>
                            <h3>6 недель</h3>
                        </div>
                        <div className="MasterCurs--left__title2">
                            <span>В мастер-класс входит: </span>
                            <h3>5 уроков</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MasterCurs;