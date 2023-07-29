import React from "react";
import { RxReader } from "react-icons/rx";

function Block() {
  return (
    <div id="blocks">
      <h2>Другие статьи </h2>
      <div className="blocks">
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

export default Block;
