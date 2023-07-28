import React from "react";
import men from "../../img/men 1.svg";
import imeges1 from "../../img/images (1) 2.svg";
import imeges2 from "../../img/images (1) 1.svg";
import imeges3 from "../../img/tools 1.svg";
import imeges4 from "../../img/lamp 1.png";
import Articles from "../HomePage/Articles/idex";
import Accor from "./Accor";
import Application from "./Application";
function HomePage() {
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <div className="home__title">
            <h1>IT образовательная платформа </h1>
            <p>
              Наша образовательная платформа вам даст необходимые практические
              знания для адаптации в IT-сфере.
            </p>
          </div>
          <div className="home__img">
            <img src={men} alt="" />
            <img className="home__img-icon" src={imeges1} alt="" />
            <img className="home__img-icon2" src={imeges2} alt="" />
            <img className="home__img-icon3" src={imeges3} alt="" />
            <img className="home__img-icon4" src={imeges4} alt="" />
          </div>
        </div>
      </div>
      <Articles />
      <Accor />
      <Application />
    </div>
  );
}

export default HomePage;
