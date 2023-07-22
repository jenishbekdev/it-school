import React from 'react';
import './index.scss'
import man from '../../../img/man.png'

const ProgramCurs = () => {
    return (
        <div id="ProgramCurs">
            <div className="container">
                <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                <div className="ProgramCurs">
                    <div className="">
                        <div className="ProgramCurs__input">
                            <h2>Модуль 1</h2>
                            <span>Reactivity</span>
                        </div>
                        <div className="ProgramCurs__input">
                            <h2>Модуль 2</h2>
                            <span>Reactive approach</span>
                        </div>
                        <div className="ProgramCurs__input">
                            <h2>Модуль 3</h2>
                            <span>Observable example</span>
                        </div>
                        <div className="ProgramCurs__input">
                            <h2>Модуль 4</h2>
                            <span>Implementing and subscribing to an observer</span>
                        </div>
                        <div className="ProgramCurs__input">
                            <h2>Модуль 5</h2>
                            <span>Reactive Streams spec</span>
                        </div>
                        <div className="ProgramCurs__input">
                            <h2>Модуль 6</h2>
                            <span>Reactive Streams spec</span>
                        </div>
                        <button>Зарегистрироваться</button>
                    </div>
                    <div className="ProgramCurs__img">
                        <img src={man} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramCurs;