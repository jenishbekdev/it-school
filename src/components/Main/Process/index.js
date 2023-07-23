import React from 'react';
import './index.scss'

const Process = () => {
    return (
        <div id="Process">
            <div className="container">
                <h1>Процесс обучения</h1>
                <div className="Process">
                    <div className="Process__divs">
                        <h2>1</h2> <br/>
                        <span>Мастер-класс</span>
                        <p>Вы получите доступ ко <br/>всем урокам мастер- <br/>класса и другим <br/>дополнительным <br/>материалам
                        </p>
                    </div>
                    <div className="Process__divs">
                        <h2>2</h2> <br/>
                        <span>Своё расписание</span>
                        <p>Доступ к мастер- <br/>классам открыт 24/7. Вы <br/>сами решаете, когда у <br/>вас следующий
                            урок</p>
                    </div>
                    <div className="Process__divs">
                        <h2>3</h2> <br/>
                        <span>Сообщество</span>
                        <p>Вы сможете общаться и обмениваться мнениями <br/>с другими учениками в комментариях</p>
                    </div>
                    <div className="Process__divs">
                        <h2>4</h2> <br/>
                        <span>Доступ</span>
                        <p>Мы предоставляем вам <br/>бессрочный доступ к <br/>материалам любого <br/>оплаченного
                            мастер-класса</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;