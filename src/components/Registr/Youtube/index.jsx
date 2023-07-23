import React from "react";
import "./index.scss";
import Play from "../Play";

const Youtube = () => {
  return (
    <div id="youtube">
      <div className="container">
        <h4
          style={{
            color: "#A5A5A5",
            padding: "80px 0",
          }}
        >
          Главная / Мастер классы{" "}
          <span
            style={{
              color: "white",
            }}
          >
            / Frontend разработчик
          </span>
        </h4>
        <div className="youtube">
          <div className="youtube-front">
            <h1>Frontend-разработчик</h1>
            <p>
              Когда нужно переходить от прокачивания личной эффективности к
              изучению эффективности командой?
            </p>
          </div>
          <div className="youtube-progres">
            <h4>Прогресс по курсу</h4>
            <input type="range" id="volume" name="volume" min="0" max="10" />
            <div className="mud">
              <div>
                <h3>
                  Пройдено <br />
                  модулей
                </h3>
                <h2>0/3</h2>
              </div>
              <div>
                <h3>
                  Пройдено <br /> модулей
                </h3>
                <h2>4/60</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Play />
    </div>
  );
};

export default Youtube;
