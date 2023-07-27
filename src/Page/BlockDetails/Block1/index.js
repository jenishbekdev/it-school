import React from "react";
import Rectangle from "../../../img/Rectangle 2184.svg";
import { Link } from "react-router-dom";

function Block1() {
  return (
    <div id="block1">
      <div className="block1">
        <Link to={"/"}>
          <h3>
            Главная / <span>Статья / Мы подготовили...</span>
          </h3>
        </Link>
        <h3>11.09.2022</h3>
        <div className="block1__title">
          <h1>
            Мы подготовили подборку самых популярных <br /> курсов по
            направлению Java в IBS Training Center.
          </h1>
          <p>
            Когда-то ни один крупный проект не обходился без применения <br />
            функционального и асинхронного программирования. Эти подходы до сих
            пор <br /> популярны за счет своих преимуществ: они помогают
            выдерживать большие <br /> нагрузки и писать эффективный код, не
            теряя в скорости разработки.
          </p>
        </div>
        <img src={Rectangle} alt="img" />
      </div>
    </div>
  );
}

export default Block1;
