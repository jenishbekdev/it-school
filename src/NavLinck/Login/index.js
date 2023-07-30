import React, { useState } from "react";
import logo from "../../img/логотип.svg";
import { type } from "@testing-library/user-event/dist/type";

function Login() {
  const [item, setItem] = useState({
    
  });

  return (
    <div id="Login">
      <div className="container">
        <div className="Login">
          <img src={logo} alt="img" />
          <input className="Login__input1" type="text" />
          <input className="Login__input2" type="password" />
          <div className="Login__btns">
            <button className="btn1">Войти</button>
            <button className="btn2">Забыли пароль?</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
