import React from 'react';
import './index.scss'

const Class = () => {
    return (
        <div id="class">
            <div className="container">
                <span>Что, как и почему</span>
                <div className="class--main">
                    <div className="class--main__class">
                        <h1>О МАСТЕР-КЛАССЕ</h1>
                        <p>В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий ввод-вывод,
                            в чем минусы классической многопоточности, в каких ситуациях нужна
                            реактивность, и что она может дать. А еще описал недостатки реактивного
                            подхода.
                        </p>
                        <div className="class--main__class--title">
                            <h2>Переходите к видеоурокам, что бы научится: </h2>
                            <ul>
                                <li>Чтению  файла (blocked on reading file);</li>
                                <li>Что бы научиться базе данных (blocked on reading from DB);</li>
                                <li>Научится использовать в  сложных вычислениях (blocked on heavy calculations);</li>
                                <li>На ответе от клиента (blocked on responding the client).</li>
                            </ul>
                            <div className="class--main__class--title--btn">
                                <button className="class--main__class--title--btn__but1">Купить мастер-класс</button>
                                <button  className="class--main__class--title--btn__but2">Смотреть программу</button>
                            </div>
                        </div>
                    </div>
                    <div className="class--main__title2">
                        <div className="class--main__title2--span1">
                            <span>Доступ: </span>
                            <h3>6 недель</h3>
                        </div>
                        <div className="class--main__title2--span2">
                            <span>В мастер-класс входит: </span>
                            <h3>5 уроков</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;