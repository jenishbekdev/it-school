import React from 'react';
import './index.scss'
import {AiOutlineCheck} from "react-icons/ai";


const Block = () => {
    return (
        <div id="block">
            <div className="container">
                <h1>Процесс обучения</h1>
                <h2>Каждый из наших мастер-классов состоит из2-8 уроков. Рекомендуем <br/>проходить мастер-класс последовательно, урок за уроком</h2>
                <div className="main">
                    <div className="block">
                        <div className="block--divs">
                            <h3>1</h3>
                            <h2>Мастер-класс</h2>
                            <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                        </div>
                        <div className="block--divs">
                            <h3>2</h3>
                            <h2>Своё расписание</h2>
                            <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                        </div>
                        <div className="block--divs">
                            <h3>3</h3>
                            <h2>Сообщество</h2>
                            <p> Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях</p>
                        </div>
                        <div className="block--divs">
                            <h3>4</h3>
                            <h2>Доступ</h2>
                            <p>Мы предоставляем вам 6 неделный  доступ к материалам оплаченного мастер-класса</p>
                        </div>
                    </div>
                    <div className="block--divs__box">
                        <p>Мастер-класс “Реактивное программирование на Java : как, зачем и стоит ли? Часть 1”</p>
                        <h3>46,00 $</h3>
                        <div className="block--divs__box--icon">
                            <div className="block--divs__box--icon__main">
                                <AiOutlineCheck/>
                                <h4>Доступ к мастер классу навсегда</h4>
                            </div>
                            <div className="block--divs__box--icon__main">
                                <AiOutlineCheck/>
                                <h4>Доступны все 5 уроков</h4>
                            </div>
                            <div className="block--divs__box--icon__main">
                                <AiOutlineCheck/>
                                <h4>Дополнительные материалы</h4>
                            </div>
                            <button>Купить мастер-класс</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;