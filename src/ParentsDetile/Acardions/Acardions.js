import React, {useState} from 'react';
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import './index.scss'
import log from './../Acardions/../../img/qw.png'

const Accardions = () => {
    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const [question3, setQuestion3] = useState(false)
    const [question4, setQuestion4] = useState(false)
    const [question5, setQuestion5] = useState(false)
    const [question6, setQuestion6] = useState(false)
    const [question7, setQuestion7] = useState(false)
    return (
        <div id="accordion">
            <div className="container">
                <div className="accordion">
                    <div className="accordion--right">
                        <h1>Остались <br/> вопросы?</h1>
                        <img src={log} alt=""/>
                    </div>
                    <div className="accordions--we">
                        <div onClick={() => {
                            setQuestion1(!question1)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)
                            setQuestion5(false)
                            setQuestion6(false)
                            setQuestion7(false)
                        }} style={{height: question1 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Что такое зарезервированные слова в программировании?</h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {question1 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(!question2)
                            setQuestion3(false)
                            setQuestion4(false)
                            setQuestion5(false)
                            setQuestion6(false)
                            setQuestion7(false)
                        }} style={{height: question2 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Могу ли я отказаться от автопродления подписки
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question2 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(!question3)
                            setQuestion4(false)
                            setQuestion5(false)
                            setQuestion6(false)
                            setQuestion7(false)
                        }} style={{height: question3 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Могу ли я вернуть деньги
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question3 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(!question4)
                            setQuestion5(false)
                            setQuestion6(false)
                            setQuestion7(false)
                        }} style={{height: question4 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Какие направление в IT самые актуальные
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question4 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)
                            setQuestion5(!question5)
                            setQuestion6(false)
                            setQuestion7(false)
                        }} style={{height: question5 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Нужно ли учить другой язык программирования, перед изучением языка С++?
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question5 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)
                            setQuestion5(false)
                            setQuestion6(!question6)
                            setQuestion7(false)
                        }} style={{height: question6 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Платформа обнавляется?
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question6 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ipsum nam
                                    repellendus veniam voluptatibus. Ab architecto consectetur culpa, cupiditate
                                    distinctio doloribus dolorum eaque iusto magni maiores maxime perspiciatis, quam
                                    quibusdam recusandae reprehenderit tempore ullam vel voluptatem! A adipisci alias
                                    error et eum molestias optio, perspiciatis, quisquam repudiandae velit vitae
                                    voluptas?</p>
                            </div>
                        </div>
                        <div onClick={() => {
                            setQuestion1(false)
                            setQuestion2(false)
                            setQuestion3(false)
                            setQuestion4(false)
                            setQuestion5(false)
                            setQuestion6(false)
                            setQuestion7(!question7)
                        }} style={{height: question7 ? "210px" : ""}} className="accordion--we__left">
                            <div className="accordion--we__left--title">
                                <h3 className="accordion--we__left--title__accord">
                                    Как я могу получить доступ ка всем курсом
                                </h3>
                                <button className="accordion--we__left--title__accord--btn">
                                    {
                                        question7 ? <span className="accordion--we__left--title__accord--btn__icon">
                                <BsChevronUp/>
                            </span> : <span className="accordion--we__left--title__accord--btn__down">
                                <BsChevronDown/>
                            </span>
                                    }
                                </button>
                            </div>
                            <div className="accordion--we__left--title__accord--btn__answer">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium aspernatur eaque error laboriosam molestiae nam omnis
                                    quaerat repellendus vero, vitae!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accardions;