import React from "react";
import { RxReader } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import articles from "../../img/Articles.png";

function BtnDetails() {
  return (
    <div id="btndetails">
      <div className="container">
        <div className="btndetails">
          <h3>
            Главная / <span>Наши курсы</span>
          </h3>
          <h1>Статьи</h1>
          <div className="btndetails__block">
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="btndetails__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="btndetails__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="btndetails__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="btndetails__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="btndetails__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
            <div className="btndetails__card">
              <NavLink to={"/BlockDetails"}>
                <img src={articles} alt="" />
              </NavLink>
              <div className="btndetails__card-block">
                <span className="btndetails__card-block-state">Статьи</span>
                <p>
                  Мы подготовили подборку самых популярных курсов по направлению
                  Java в IBS Training Center.
                </p>
                <ul className="btndetails__card-date">
                  <li className="btndetails__card-date-icons">
                    <RxReader className="articles__card-date-icon" />
                    <span className="btndetails__card-date-read">Читать</span>
                  </li>
                  <span className="btndetails__card-date-data">01.02.2022</span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtnDetails;
