import React from 'react';
import './index.scss'
import {AiOutlineCheck} from "react-icons/ai";

const Block = () => {
    return (
        <div id="block">
            <div className="container">
                <h1>Процесс обучения</h1>
                <span>Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем <br/>
                    проходить мастер-класс последовательно, урок за уроком</span>
                <div className="block">
                    <div className="block--main">
                        <div className="block--main__divs">
                            <h2>1</h2><br/>
                            <h4>Мастер-класс</h4>
                            <p>Вы получите доступ ко <br/>всем урокам мастер- <br/>класса и
                                другим <br/>дополнительным <br/>материалам</p>
                        </div>
                        <div className="block--main__divs">
                            <h2>2</h2> <br/>
                            <h4>Своё расписание</h4>
                            <p>Доступ к мастер-классам <br/>открыт 24/7. Вы сами <br/>решаете, когда у вас <br/>следующий
                                урок</p>
                        </div>
                        <div className="block--main__divs">
                            <h2>3</h2> <br/>
                            <h4>Сообщество</h4>
                            <p>Вы сможете общаться и <br/>обмениваться мнениями с <br/>другими учениками в <br/>комментариях
                            </p>
                        </div>
                        <div className="block--main__divs">
                            <h2>4</h2> <br/>
                            <h4>Доступ</h4>
                            <p>Мы предоставляем вам 6 <br/>неделный доступ к <br/>материалам оплаченного <br/>мастер-класса
                            </p>
                        </div>

                    </div>
                    <div className="block--main__left">
                        <h1>Мастер-класс “Реактивное программирование на Java : как, зачем и стоит ли? Часть 1”</h1>
                        <h2>46,00 $</h2>
                        <div className="block--main__left--icon">
                            <h5><AiOutlineCheck/></h5>
                            <h3>Доступ к мастер классу навсегда</h3>
                        </div>
                        <div className="block--main__left--icon">
                            <h5><AiOutlineCheck/></h5>
                            <h3>Доступ к мастер классу навсегда</h3>
                        </div>
                        <div className="block--main__left--icon">
                            <h5><AiOutlineCheck/></h5>
                            <h3>Доступ к мастер классу навсегда</h3>
                        </div>
                        <button>Купить мастер-класс</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;