import React from 'react';
import people from './/../../../img/people.svg'
import girl from './/../../../img/girle.svg'
import './index.scss'
import Slider from "react-slick";

const SliderPage = () => {
    let settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section id="slider">
            <h1>Отзывы о нашей школе</h1>
            <div className="container">
                <div className="slider">
                    <Slider {...settings}>

                       <div className="slider__title">
                           <img src={people} alt=""/>
                           <div className="slider__title--cards">
                               <h2>Виктор Александарович</h2>
                               <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                   полностью доволен, что
                                   мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                   прокачка в выбранной вами
                                   области. Всячески рекомендую и благодарю!</p>
                               <h5>23.02.2022 г</h5>
                           </div>
                       </div>

                        <div className="slider__title">
                            <img src={girl} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Алина Татьянован</h2>
                                <p>Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану выпускником
                                    Motion Web. За это время
                                    мне дали фундаментальные знания программирования ( C++, C#, Python ), дискретной
                                    математики, криптографии,
                                    созданию сайтов со сложной серверной архитектурой и многим другим важным навыкам. </p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                        <div className="slider__title">
                            <img src={people} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Виктор Александарович</h2>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                    полностью доволен, что
                                    мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                    прокачка в выбранной вами
                                    области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                        <div className="slider__title">
                            <img src={girl} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Виктор Александарович</h2>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                    полностью доволен, что
                                    мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                    прокачка в выбранной вами
                                    области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                        <div className="slider__title">
                            <img src={people} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Виктор Александарович</h2>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                    полностью доволен, что
                                    мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                    прокачка в выбранной вами
                                    области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                        <div className="slider__title">
                            <img src={girl} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Виктор Александарович</h2>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                    полностью доволен, что
                                    мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                    прокачка в выбранной вами
                                    области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                        <div className="slider__title">
                            <img src={people} alt=""/>
                            <div className="slider__title--cards">
                                <h2>Виктор Александарович</h2>
                                <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с остался
                                    полностью доволен, что
                                    мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена
                                    прокачка в выбранной вами
                                    области. Всячески рекомендую и благодарю!</p>
                                <h5>23.02.2022 г</h5>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default SliderPage;