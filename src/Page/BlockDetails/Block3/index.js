import React from "react";
import img18 from "../../../img/image 18.svg";
import { RxReader } from "react-icons/rx";
import { Link } from "react-router-dom";

function Block3() {
  return (
    <div id="block3">
      <div className="block3">
        <h2>Комментарии</h2>
        <div className="block">
          <img src={img18} alt="img" />
          <div className="title">
            <h1> Вы не зарегистрировались!</h1>
            <h4>
              Чтобы оставить комментарий, пожалуйста авторизуйтесь или <br />
              зарегитрируйтесь.
            </h4>
          </div>
          <button>Зарегистрироваться</button>
        </div>
        <h2>Другие статьи </h2>
        <div className="blocks">
          <div className="blocks__block1">
            <h4>Статьи</h4>
            <p>
              Мы подготовили подборку <br /> самых популярных курсов <br /> по
              направлению Java в IBS <br /> Training Center.
            </p>
            <di className="blocks__block1__date">
              <h3>
                <RxReader />
                Читать
              </h3>
              <h3>21.09.2022</h3>
            </di>
          </div>
          <div className="blocks__block1">
            <h4>Статьи</h4>
            <p>
              Мы подготовили подборку <br /> самых популярных курсов <br /> по
              направлению Java в IBS <br /> Training Center.
            </p>
            <di className="blocks__block1__date">
              <h3>
                <RxReader />
                Читать
              </h3>
              <h3>21.09.2022</h3>
            </di>
          </div>
          <div className="blocks__block1">
            <h4>Статьи</h4>
            <p>
              Мы подготовили подборку <br /> самых популярных курсов <br /> по
              направлению Java в IBS <br /> Training Center.
            </p>
            <di className="blocks__block1__date">
              <h3>
                <RxReader />
                Читать
              </h3>
              <h3>21.09.2022</h3>
            </di>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Block3;
