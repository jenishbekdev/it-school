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
                        <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                    </div>
                    <div className="Process__divs">
                        <h2>3</h2> <br/>
                        <span>Сообщество</span>
                        <p>Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях</p>
                    </div>
                    <div className="Process__divs">
                        <h2>4</h2> <br/>
                        <span>Доступ</span>
                        <p>Мы предоставляем вам бессрочный доступ к материалам любого оплаченного мастер-класса</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;