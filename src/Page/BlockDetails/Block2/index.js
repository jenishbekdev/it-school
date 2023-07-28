import React from "react";
import img13 from "../../../img/image 13.svg";

function Block2() {
  return (
    <div id="block2">
      <div className="block2">
        <h3>
          В рамках курса от IBS Training Center вы поймете, как работают
          основные <br /> фичи Spring Framework 5, и узнаете:
        </h3>
        <h4>
          <div></div>
          <span>Какие существуют конфигурации для Spring Framework 5;</span>
        </h4>
        <h4>
          <div></div>
          <span>
            Как работать с REST-сервисами и документацией при помощи Swagger.
          </span>
        </h4>
        <h4>
          <div></div>
          <span>Что такое бины и как с ними работать;</span>
        </h4>
        <h4>
          <div></div>
          <span>Что такое Концепция IoC;</span>
        </h4>
        <h4>
          <div></div>
          <span>Примеры использования AOP;</span>
        </h4>
        <div className="block">
          <img src={img13} alt="img" />
          <div className="title">
            <h1>
              Оформите подписку, чтобы <br /> посмотреть полную версию
            </h1>
            <h4>
              Вы уже авторизованы? <p>Авторизуйтесь</p>
            </h4>
          </div>
          <button>Получить доступ за 225,00$</button>
        </div>
      </div>
    </div>
  );
}

export default Block2;
