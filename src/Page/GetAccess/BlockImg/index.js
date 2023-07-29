import React from "react";
import Reactangle from "../../../img/Rectangle 2184.svg";

function BlockImg() {
  return (
    <div id="blockimg">
      <div className="blockimg">
        <div className="blockimg__h3">
          <h3>
            Главная / <span>Статья / Мы подготовили... </span>
          </h3>
          <h3>11.09.2022</h3>
        </div>
        <div className="blockimg__text">
          <h1>
            Мы подготовили подборку самых популярных <br />
            курсов по направлению Java в IBS Training Center.
          </h1>
          <p>
            Когда-то ни один крупный проект не обходился без применения <br />
            функционального и асинхронного программирования. Эти подходы до сих
            пор <br /> популярны за счет своих преимуществ: они помогают
            выдерживать большие <br /> нагрузки и писать эффективный код, не
            теряя в скорости разработки.
          </p>
        </div>
        <img src={Reactangle} alt="img" />
      </div>
    </div>
  );
}

export default BlockImg;
