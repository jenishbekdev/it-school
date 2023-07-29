import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Registr = () => {
  const [top, setTop] = useState(false);
  const [redirectToFront, setRedirectToFront] = useState(false);
  const [chek, setChek] = useState(false);
  const [showCheckboxMessage, setShowCheckboxMessage] = useState(false);

  const oplata = (e) => {
    e.preventDefault();

    const i1 = document.querySelector(".i1");
    const i2 = document.querySelector(".i2");
    const i3 = document.querySelector(".i3");
    const i5 = document.querySelector(".i5");
    const i6 = document.querySelector(".i6");
    const i7 = document.querySelector(".i7");
    const i8 = document.querySelector(".i8");
    const i9 = document.querySelector(".i9");
    const i10 = document.querySelector(".i10");

    if (
      i1.value.trim() === "" ||
      i2.value.trim() === "" ||
      i3.value.trim() === "" ||
      i5.value.trim() === "" ||
      i6.value.trim() === "" ||
      i7.value.trim() === "" ||
      i8.value.trim() === ""
    ) {
      // If at least one field is empty, apply a red border to the empty fields
      i1.style.border =
        i1.value.trim() === "" ? "1px solid red" : "1px solid white";
      i2.style.border =
        i2.value.trim() === "" ? "1px solid red" : "1px solid white";
      i3.style.border =
        i3.value.trim() === "" ? "1px solid red" : "1px solid white";
      i5.style.border =
        i5.value.trim() === "" ? "1px solid red" : "1px solid white";
      i6.style.border =
        i6.value.trim() === "" ? "1px solid red" : "1px solid white";
      i7.style.border =
        i7.value.trim() === "" ? "1px solid red" : "1px solid white";
      i8.style.border =
        i8.value.trim() === "" ? "1px solid red" : "1px solid white";
      i9.parentNode.style.border = i9.checked
        ? "1px solid white"
        : "1px solid red";
      i10.parentNode.style.border = i10.checked
        ? "1px solid white"
        : "1px solid red";
    } else if (!chek) {
      // If all fields are filled, but the checkbox is not checked, show the checkbox message
      setShowCheckboxMessage(true);
    } else {
      // If all fields are filled, and the checkbox is checked, apply a green border to the "Оплатить" button and redirect to another page
      setTop(true);
      setTimeout(() => {
        setRedirectToFront(true);
      }, 2000);
    }
  };

  function oplata2() {
    const i = document.querySelector("input");
    const i1 = document.querySelector(".i1");
    const i2 = document.querySelector(".i2");
    const i3 = document.querySelector(".i3");
    const i5 = document.querySelector(".i5");
    const i6 = document.querySelector(".i6");
    const i7 = document.querySelector(".i7");
    const i8 = document.querySelector(".i8");
    const i9 = document.querySelector(".i9");
    const i10 = document.querySelector(".i10");

    i.style.border =
      i.value.trim() === "" ? "1px solid red" : "1px solid white";
    i1.style.border =
      i1.value.trim() === "" ? "1px solid red" : "1px solid white";
    i2.style.border = i2.value === "" ? "1px solid red" : "1px solid white";
    i3.style.border = i3.value === "" ? "1px solid red" : "1px solid white";
    i5.style.border = i5.value === "" ? "1px solid red" : "1px solid white";
    i6.style.border = i6.value === "" ? "1px solid red" : "1px solid white";
    i7.style.border = i7.value === "" ? "1px solid red" : "1px solid white";
    i8.style.border = chek ? "1px solid white" : "1px solid red"; // Update the border for checkbox

    const radioVisa = document.querySelector(".i9");
    const radioMasterCard = document.querySelector(".i10");

    radioVisa.parentNode.style.border = "1px solid white";
    radioMasterCard.parentNode.style.border = "1px solid white";

    if (radioVisa.checked || radioMasterCard.checked) {
      radioVisa.parentNode.style.border = "1px solid white";
      radioMasterCard.parentNode.style.border = "1px solid white";
    } else {
      radioVisa.parentNode.style.border = "1px solid red";
      radioMasterCard.parentNode.style.border = "1px solid red";
    }

    setChek(radioVisa.checked || radioMasterCard.checked);
  }
  return (
    <div id="god">
      <div className="container">
        <div className="god">
          <h4
            style={{
              color: "white",
              padding: "50px 0 50px 0",
            }}
          >
            Главная/ <span> Зарегистрироваться на курс</span>
          </h4>
          <h3
            style={{
              color: "white",
              fontSize: "36px",
              padding: "20px 0 90px 0",
            }}
          >
            Зарегистрироваться на курс
          </h3>
          <div className="banner">
            <div className="action">
              <div className="action-red">
                <h4>Курс</h4> <br />
                <br />
                <h1>Frontend-разработчик</h1>
                <p>
                  Идея реактивного программирования
                  <br />
                  появилась сравнительно недавно, лет 10 назад.{" "}
                </p>
              </div>
              <div className="action-redd">
                <p1>Лектор</p1> <br />
                <br />
                <h1>Евгений Александрович </h1>
                <p>Frontend разработчик</p>
              </div>
              <div className="action-modul">
                <div>
                  <h3>В курс входит </h3>
                  <p>
                    3 модулей
                    <br /> 60материалов
                  </p>
                </div>
                <div className="action-mod">
                  <h3>Доступ</h3>
                  <p>Навсегда</p>
                </div>
              </div>
              <h6>
                * - материалы включают уроки, тесты и задания. Некоторые
                материалы могут быть недоступны при самостоятельном обучении.{" "}
              </h6>
            </div>
            <div className="god--about">
              <form action="#">
                <div className="god--about__input">
                  <input
                    onInput={oplata2}
                    className="i1"
                    required
                    placeholder="Ф.И.О*"
                    name="name"
                    type="text"
                  />
                  <input
                    onInput={oplata2}
                    className="i2"
                    required
                    placeholder="Телефон*"
                    name="tel"
                    type="number"
                  />
                  <input
                    onInput={oplata2}
                    className="i3"
                    required
                    placeholder="E mail*"
                    name="email"
                    type="email"
                  />

                  <div className="god--about__input--radio">
                    <div className="god--about__input--radio__one">
                      <input
                        onInput={oplata2}
                        className="i9"
                        required
                        name="radio"
                        type="radio"
                      />
                      <h2>Visa</h2>
                    </div>
                    <div className="god--about__input--radio__one">
                      <input
                        onInput={oplata2}
                        className="i10"
                        name="radio"
                        type="radio"
                      />
                      <h2>MasterCard</h2>
                    </div>
                  </div>
                  <input
                    onInput={oplata2}
                    className="i5"
                    required
                    placeholder="Номер карты *"
                    name="karta"
                    type="text"
                    maxLength={14}
                  />
                  <div className="god--about__input--cvc">
                    <input
                      onInput={oplata2}
                      className="i6"
                      required
                      placeholder="ММ/ГГ *"
                      type="text"
                      maxLength={4}
                    />
                    <input
                      onInput={oplata2}
                      className="i7"
                      required
                      placeholder="CVC *"
                      type="text"
                      maxLength={3}
                    />
                  </div>

                  <button
                    className="oplata"
                    onClick={oplata}
                    style={{ cursor: "pointer", padding: "12px 15px" }}
                    type="submit"
                  >
                    Оплатить 220.00$
                  </button>
                  <div className="god--about__input--chekbox">
                    <input
                      onInput={oplata2}
                      className="i8"
                      required
                      type="checkbox"
                      checked={chek}
                      onChange={() => setChek(chek)}
                    />
                    <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    color: "white",
                    position: "fixed",
                    left: "39%",
                    top: "50%",
                    right: 0,
                    background: "rgba(27, 41, 89)",
                    borderRadius: "10px",
                    width: "500px",
                    padding: "30px 10px",
                    display: top ? "block" : "none",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "15px",
                      textAlign: "center",
                      padding: "0 0 0 180px",
                    }}
                  >
                    Благодарим за покупку!!!
                  </h1>
                  <p style={{ padding: "0 0 15px 50px" }}>
                    Теперь вам доступен курс “Frontend разработчик”
                  </p>
                  <Link to="/pass">
                    <button
                      className="top"
                      style={{
                        padding: "10px 30px",
                        border: "none",
                        borderRadius: "10px",
                        margin: "0 0 0 130px",
                      }}
                    >
                      Ок, посмотреть покупку
                    </button>
                  </Link>
                  <h1
                    onClick={() => setTop(false)}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "20px",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </h1>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registr;
