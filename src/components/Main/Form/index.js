import React from 'react';
import './index.scss'
import img1 from "../../../img/img1.svg"
import img2 from "../../../img/img2.svg"
import img3 from "../../../img/img3.svg"

const Form = () => {
    return (
        <div id="Form">
            <div className="container">
                <div className="Form">
                    <div className="Forms">
                        <img src={img1} alt=""/>
                        <h1>100 материалов</h1>
                        <p>Только полезная информация, никакой воды. Применяйте эти знания первыми!</p>
                    </div>
                    <div className="Forms">
                        <img src={img2} alt=""/>
                        <h1>100% эксклюзив</h1>
                        <p>Курс записан эксклюзивно для нашей платформы</p>
                    </div>
                    <div className="Forms">
                        <img src={img3} alt=""/>
                        <h1>В любое время, в любом месте</h1>
                        <p>Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Form;