import React from "react";

function BlockKomment() {
  return (
    <div id="blockkomment">
      <div className="blockkomment">
        <h1>Комментарии</h1>
        <div className="blockkomment__komment">
          <textarea
            placeholder="Ваш комментарий"
            cols="30"
            rows="10"
          ></textarea>
          <button>Отправить</button>
        </div>
        <ul>
          <li>nurikovn87@gmail.com</li>
          <li>nurikovn87@gmail.com</li>
          <li>nurikovn87@gmail.com</li>
          <li>nurikovn87@gmail.com</li>
        </ul>
        <button>Смотреть все</button>
      </div>
    </div>
  );
}

export default BlockKomment;
