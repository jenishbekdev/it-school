import React from 'react';
import './index.scss'

const AboutCurs = () => {
    return (
        <div id="AboutCurs">
            <div className='container'>
                <div className="AboutCurs">
                    <span>Что, как и почему</span>
                    <div className="AboutCurs__text">
                        <h1>О КУРСЕ</h1>

                        <div className="main">
                            <div>
                                <p>Это всё, что ты видишь и кликаешь на сайте или в приложении - <br/>картинки,
                                    кнопочки, анимации и даже бесячая реклама.
                                    <br/>
                                    <br/>
                                    Самые главные инструменты frontend разработки сайтов это <br/>JavaScript, HTML и
                                    CSS.
                                    <br/>
                                    <br/>
                                    В Кыргызстане фронтенд-разработчики востребованы практически в <br/>каждой
                                    IT-компании. Это также одно из самых популярных <br/>направлений для фриланса и
                                    удаленной работы. Все потому, что в <br/>современном мире сайт нужен каждому</p>
                            </div>

                            <div className="FrontEnd2__text">
                                <span>Доступ:</span>
                                <h3>Навсегда</h3>

                                <span>В курс входит:</span>
                                <h3>3 модулей <br/> 60материалов</h3>
                            </div>
                        </div>

                        <div className="bain">
                            <h4>Для кого это </h4>
                            <span>Для людей  с математическим складом ума.</span>
                            <h2>Вы изучтие</h2>
                        </div>

                        <div className="text">
                            <div className="text__h4">
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                                <h5>JavaScript</h5>
                                <h5>Soft skills. Нетехнические навыки</h5>
                            </div>
                            <div className="text__h5">
                                <h5>Кроссплатформенность и кроссбраузерность</h5>
                                <h5>Управление версиями</h5>
                                <h5>Тестирование и отладка</h5>
                            </div>
                        </div>

                        <div className="span">
                            <h1>К каким результатам вас может привести этот курс?</h1>
                            <p>С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши <br/>мечты и цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы <br/>живете той жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы <br/>сами для себя создали. <br/> <br/>

                                Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать <br/>дела в правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на <br/>месяц, потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен <br/>позволит вам правильно планировать правильные вещи и увеличить степень контроля над <br/>своей жизнью, чтобы сделать её счастливой и успешной.</p>
                            <h4>Учитесь, применяйте полученные на курсе знания и будьте счастливы!</h4>
                            <div className="span--btn">
                                <button className="span--btn__but1">Купить курс</button>
                                <a href="#ProgramCurs" className="span--btn__but2">Смотреть программу</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCurs;