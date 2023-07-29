import React, { useState, useEffect } from "react";
import { BsCreditCard } from "react-icons/bs";
import "./index.scss";

const State = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000 * 60 * 60 * 24); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="state">
      <div className="container">
        <div className="state">
          <h4>
            Главная / <span>Уведомлении</span>
          </h4>
          <h1>Уведомлении</h1>
          <div className="state--uvo">
            <h1><BsCreditCard /></h1>
            
            <div className="state--uvo__title">
              <h3>{currentDate.toLocaleDateString("ru-RU")}</h3>
              <p>Вы оформили подписку пакет "год"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;
