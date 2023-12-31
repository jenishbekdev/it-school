import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./index.scss";
import {click} from "@testing-library/user-event/dist/click";

const Registr = () => {
    const [top, setTop] = useState(false);
    const [redirectToFront, setRedirectToFront] = useState(false);
    const [chek, setChek] = useState(false);
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
            // Если хотя бы одно поле пустое, применяем красную рамку к незаполненным полям
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
        } else {
            // Если все поля заполнены, применяем зеленую рамку к кнопке "Оплатить" и переходим на другую страницу
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
        i8.style.border = chek ? "chekbox" : "1px solid red";

        // i8.style.border = i8.value === "" ? "1px solid red" : "1px solid white";

        i9.parentNode.style.border = i9.checked
            ? "1px solid white"
            : "1px solid red";
        i10.parentNode.style.border = i10.checked
            ? "1px solid white"
            : "1px solid red";
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
                                <h6>Курс</h6>

                                <h1>Frontend-разработчик</h1>
                                <p>
                                    Идея реактивного программирования
                                    <br/>
                                    появилась сравнительно недавно, лет 10 назад.{" "}
                                </p>
                            </div>
                            <div className="action-redd">
                                <p1>Лектор</p1>
                                <h1>Евгений Александрович </h1>
                                <p>Frontend разработчик</p>
                            </div>
                            <div className="action--modul">
                                <div className="action--modul__d">
                                    <hh6>В курс входит</hh6>
                                    <h5>Доступ</h5>
                                </div>
                                <div className="action-mod">
                                    <p>3 модулей <br/><p> 60материалов</p>
                                    </p>
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
                                        type="number"
                                        maxLength={6}
                                    />
                                    <div className="god--about__input--cvc">
                                        <input
                                            onInput={oplata2}
                                            className="i6"
                                            required
                                            placeholder="ММ/ГГ *"
                                            type="tel"
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
                                    <div className="god--about__input--chekbox">
                                        <input
                                            onInput={oplata2}
                                            className="i8"
                                            required
                                            type="checkbox"
                                        />
                                        <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
                                    </div>
                                    <button
                                        // className="oplata"
                                        onClick={oplata}
                                        style={{cursor: "pointer", padding: "12px 15px"}}
                                        type="submit"
                                    >
                                        Оплатить 220.00$
                                    </button>

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
                                    <p style={{padding: "0 0 15px 50px"}}>
                                        Теперь вам доступен курс “Frontend разработчик”
                                    </p>
                                    <Link to="/you">
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


// import React, { useState } from "react";
// import { BsCreditCard } from "react-icons/bs";
// import "./index.scss";
// import { NavLink} from "react-router-dom";
// import Youtube from "../Youtube";
//
// const Registr = () => {
//   const [top, setTop] = useState(false);
//   const [redirectToFront, setRedirectToFront] = useState(false);
//   const oplata = (e) => {
//     const i1 = document.querySelector(".i1");
//     const i2 = document.querySelector(".i2");
//     const i3 = document.querySelector(".i3");
//     const i4 = document.querySelector(".i4");
//     const i5 = document.querySelector(".i5");
//     const i6 = document.querySelector(".i6");
//     const i7 = document.querySelector(".i7");
//     const i8 = document.querySelector(".i8");
//     const i9 = document.querySelector(".i9");
//     const i10 = document.querySelector(".i10");
//     e.preventDefault();
//     if (
//       i1.value === "" ||
//       i2.value === "" ||
//       i3.value === "" ||
//       i4.value === "" ||
//       i5.value === "" ||
//       i6.value === "" ||
//       i7.value === "" ||
//       i8.value === ""
//     ) {
//       i1.style.border = "1px solid red";
//       i2.style.border = "1px solid red";
//       i3.style.border = "1px solid red";
//       i4.style.border = "1px solid red";
//       i5.style.border = "1px solid red";
//       i6.style.border = "1px solid red";
//       i7.style.border = "1px solid red";
//       i8.style.border = "1px solid red";
//       i9.parentNode.style.border = "1px solid red";
//       i10.parentNode.style.border = "1px solid red";
//     } else {
//       i1.style.border = "1px solid white";
//       i2.style.border = "1px solid white";
//       i3.style.border = "1px solid white";
//       i4.style.border = "1px solid white";
//       i5.style.border = "1px solid white";
//       i6.style.border = "1px solid white";
//       i7.style.border = "1px solid white";
//       i8.style.border = "1px solid white";
//       i9.parentNode.style.border = "1px solid white";
//       i10.parentNode.style.border = "1px solid white";
//       setRedirectToFront(true);
//     }
//   };
//
//   function oplata2() {
//     const i = document.querySelector("input");
//     const i1 = document.querySelector(".i1");
//     const i2 = document.querySelector(".i2");
//     const i3 = document.querySelector(".i3");
//     const i4 = document.querySelector(".i4");
//     const i5 = document.querySelector(".i5");
//     const i6 = document.querySelector(".i6");
//     const i7 = document.querySelector(".i7");
//     const i8 = document.querySelector(".i8");
//     const i9 = document.querySelector(".i9");
//     const i10 = document.querySelector(".i10");
//     if (i.value.trim() === "") {
//       i.style.border = "1px solid red";
//     } else {
//       i.style.border = "1px solid white";
//     }
//     if (i1.value.trim() === "") {
//       i1.style.border = "1px solid red";
//     } else {
//       i1.style.border = "1px solid white";
//     }
//     if (i2.value === "") {
//       i2.style.border = "1px solid red";
//     } else {
//       i2.style.border = "1px solid white";
//     }
//     if (i3.value === "") {
//       i3.style.border = "1px solid red";
//     } else {
//       i3.style.border = "1px solid white";
//     }
//     if (i4.value === "") {
//       i4.style.border = "1px solid red";
//     } else {
//       i4.style.border = "1px solid white";
//     }
//     if (i5.value === "") {
//       i5.style.border = "1px solid red";
//     } else {
//       i5.style.border = "1px solid white";
//     }
//     if (i6.value === "") {
//       i6.style.border = "1px solid red";
//     } else {
//       i6.style.border = "1px solid white";
//     }
//     if (i7.value === "") {
//       i7.style.border = "1px solid red";
//     } else {
//       i7.style.border = "1px solid white";
//     }
//     if (i8.value === "") {
//       i8.style.border = "1px solid red";
//     } else {
//       i8.style.border = "1px solid white";
//     }
//   }
//
//   return (
//     <div id="god">
//       <div className="container">
//         <div className="god">
//           <h4
//             style={{
//               color: "white",
//               padding: "50px 0 50px 0",
//             }}
//           >
//             Главная/ <span> Зарегистрироваться на курс</span>
//           </h4>
//           <h3
//             style={{
//               color: "white",
//               fontSize: "36px",
//               padding: "20px 0 90px 0",
//             }}
//           >
//             Зарегистрироваться на курс
//           </h3>
//           <div className="banner">
//             <div className="action">
//               <div className="action-red">
//                 <h4>Курс</h4> <br />
//                 <br />
//                 <h1>Frontend-разработчик</h1>
//                 <p>
//                   Идея реактивного программирования
//                   <br />
//                   появилась сравнительно недавно, лет 10 назад.{" "}
//                 </p>
//               </div>
//               <div className="action-redd">
//                 <p1>Лектор</p1> <br />
//                 <br />
//                 <h1>Евгений Александрович </h1>
//                 <p>Frontend разработчик</p>
//               </div>
//               <div className="action-modul">
//                 <div>
//                   <h3>В курс входит </h3>
//                   <p>
//                     3 модулей
//                     <br /> 60материалов
//                   </p>
//                 </div>
//                 <div className="action-mod">
//                   <h3>Доступ</h3>
//                   <p>Навсегда</p>
//                 </div>
//               </div>
//               <h6>
//                 * - материалы включают уроки, тесты и задания. Некоторые
//                 материалы могут быть недоступны при самостоятельном обучении.{" "}
//               </h6>
//             </div>
//             <div className="god--about">
//               <form action="src/components/Registr/Registr/index#">
//                 <div className="god--about__input">
//                   <input
//                     onInput={oplata2}
//                     className="i1"
//                     required
//                     placeholder="Ф.И.О*"
//                     name="name"
//                     type="text"
//                   />
//                   <input
//                     onInput={oplata2}
//                     className="i2"
//                     required
//                     placeholder="Телефон*"
//                     name="tel"
//                     type="number"
//                   />
//                   <input
//                     onInput={oplata2}
//                     className="i3"
//                     required
//                     placeholder="E mail*"
//                     name="email"
//                     type="email"
//                   />
//                   <input
//                     onInput={oplata2}
//                     className="i4"
//                     required
//                     placeholder="Пароль"
//                     type="password"
//                   />
//                   <div className="god--about__input--radio">
//                     <div className="god--about__input--radio__one">
//                       <input
//                         onInput={oplata2}
//                         className="i9"
//                         required
//                         name="radio"
//                         type="radio"
//                       />
//                       <h2>Visa</h2>
//                     </div>
//                     <div className="god--about__input--radio__one">
//                       <input
//                         onInput={oplata2}
//                         className="i10"
//                         name="radio"
//                         type="radio"
//                       />
//                       <h2>MasterCard</h2>
//                     </div>
//                   </div>
//                   <input
//                     onInput={oplata2}
//                     className="i5"
//                     required
//                     placeholder="Номер карты *"
//                     name="karta"
//                     type="number"
//                   />
//                   <div className="god--about__input--cvc">
//                     <input
//                       onInput={oplata2}
//                       className="i6"
//                       required
//                       placeholder="ММ/ГГ *"
//                       type="tel"
//                     />
//                     <input
//                       onInput={oplata2}
//                       className="i7"
//                       required
//                       placeholder="CVC *"
//                       type="text"
//                     />
//                   </div>
//                   <div className="god--about__input--chekbox">
//                     <input
//                       onInput={oplata2}
//                       className="i8"
//                       required
//                       type="checkbox"
//                     />
//                     <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
//                   </div>
//                   <button
//                     className="oplata"
//                     onClick={() => setTop(true)}
//                     style={{ cursor: "pointer", padding: "12px 15px" }}
//                     type="submit"
//                   >
//                     Оплатить 220.00$
//                   </button>
//                 </div>
//                 <div
//                   style={{
//                     fontSize: "15px",
//                     color: "white",
//                     position: "fixed",
//                     left: "39%",
//                     top: "50%",
//                     right: 0,
//                     background: "rgba(27, 41, 89)",
//                     borderRadius: "10px",
//                     width: "500px",
//                     padding: "30px 10px",
//                     display: top ? "block" : "none",
//                   }}
//                 >
//                   <h1
//                     style={{
//                       fontSize: "15px",
//                       textAlign: "center",
//                       padding: "0 0 0 180px",
//                     }}
//                   >
//                     Благодарим за покупку!!!
//                   </h1>
//                   <p style={{ padding: "0 0 15px 50px" }}>
//                     Теперь вам доступен курс “Frontend разработчик”
//                   </p>
//                 <NavLink to="/you"><button
//                       className="top"
//                       style={{
//                         padding: "10px 30px",
//                         border: "none",
//                         borderRadius: "10px",
//                         margin: "0 0 0 130px",}}>Ок, посмотреть покупку{" "}</button></NavLink>
//                   <h1
//                     onClick={() => setTop(false)}
//                     style={{
//                       position: "absolute",
//                       top: "10px",
//                       right: "20px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     x
//                   </h1>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Youtube/>
//     </div>
//   );
// };
//
// export default Registr;
