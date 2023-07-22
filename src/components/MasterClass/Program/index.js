import React from 'react';
import './index.scss'
import man from "../../../img/man.png";

const Program = () => {
    return (
        <div id="Program">
            <div className="container">
                <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                <div className="Program">
                    <div className="">
                        <div className="Program__input">
                            <h2>1</h2>
                            <span>Reactivity</span>
                        </div>
                        <div className="Program__input">
                            <h2>2</h2>
                        </div>
                        <div className="Program__input">
                            <h2>3</h2>
                            <span>Observable example</span>
                        </div>
                        <div className="Program__input">
                            <h2>4</h2>
                            <span>Implementing and subscribing to an observer</span>
                        </div>
                        <div className="Program__input">
                            <h2>5</h2>
                            <span>Reactive Streams spec</span>
                        </div>
                        <button>Купить мастер-класс </button>
                    </div>
                    <div className="Program__img">
                        <img src={man} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;