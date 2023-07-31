import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordion = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  return (
    <div id="faq">
      <div className="container">
        <div className="faq">
          <span>FAQ</span>
          <div className="faq--right">
            <h1>Остались вопросы?</h1>
          </div>
          <div className="faq--we">
            <div
              onClick={() => {
                setQuestion1(!question1);
                setQuestion2(false);
                setQuestion3(false);
              }}
              style={{ height: question1 ? "210px" : "" }}
              className="faq--we__left"
            >
              <div className="faq--we__left--title">
                <h3 className="faq--we__left--title__accord">
                  Как мне начать обучение ?
                </h3>
                <button className="faq--we__left--title__accord--btn">
                  {question1 ? (
                    <span className="faq--we__left--title__accord--btn__icon">
                      <BsChevronUp />
                    </span>
                  ) : (
                    <span className="faq--we__left--title__accord--btn__down">
                      <BsChevronDown />
                    </span>
                  )}
                </button>
              </div>
              <div className="faq--we__left--title__accord--btn__answer">
                <p>
                  Очень просто – зарегистрироваться. Это займет всего несколько
                  <br />
                  минут. Создайте свой аккаунт с помощью адреса электронной
                  <br />
                  почты и номера телефона. Мастер-класс станет доступен сразу
                  <br />
                  после оплаты или в день запуска.
                </p>
              </div>
            </div>

            <div
              onClick={() => {
                setQuestion1(false);
                setQuestion2(!question2);
                setQuestion3(false);
              }}
              style={{ height: question2 ? "210px" : "" }}
              className="faq--we__left"
            >
              <div className="faq--we__left--title">
                <h3 className="faq--we__left--title__accord">
                  Могу ли я отказаться от автопродления подписки
                </h3>
                <button className="faq--we__left--title__accord--btn">
                  {question2 ? (
                    <span className="faq--we__left--title__accord--btn__icon">
                      <BsChevronUp />
                    </span>
                  ) : (
                    <span className="faq--we__left--title__accord--btn__down">
                      <BsChevronDown />
                    </span>
                  )}
                </button>
              </div>
              <div className="faq--we__left--title__accord--btn__answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium aspernatur eaque error laboriosam molestiae nam
                  omnis quaerat repellendus vero, vitae!
                </p>
              </div>
            </div>

            <div
              onClick={() => {
                setQuestion1(false);
                setQuestion2(false);
                setQuestion3(!question3);
              }}
              style={{ height: question3 ? "210px" : "" }}
              className="faq--we__left"
            >
              <div className="faq--we__left--title">
                <h3 className="faq--we__left--title__accord">
                  Могу ли я вернуть деньги
                </h3>
                <button className="faq--we__left--title__accord--btn">
                  {question3 ? (
                    <span className="faq--we__left--title__accord--btn__icon">
                      <BsChevronUp />
                    </span>
                  ) : (
                    <span className="faq--we__left--title__accord--btn__down">
                      <BsChevronDown />
                    </span>
                  )}
                </button>
              </div>
              <div className="faq--we__left--title__accord--btn__answer">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusantium aspernatur eaque error laboriosam molestiae nam
                  omnis quaerat repellendus vero, vitae!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
