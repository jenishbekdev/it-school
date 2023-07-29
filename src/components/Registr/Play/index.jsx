import React, { useState } from "react";
import "./index.scss";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Play = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const handleAccordionClick = (accordionNumber) => {
    if (accordionNumber === 1) {
      setQuestion1(!question1);
      setQuestion2(false);
      setQuestion3(false);
    } else if (accordionNumber === 2) {
      setQuestion1(false);
      setQuestion2(!question2);
      setQuestion3(false);
    } else if (accordionNumber === 3) {
      setQuestion1(false);
      setQuestion2(false);
      setQuestion3(!question3);
    }
  };

  return (
    <div id="play">
      <div className="container">
        <div className="play">
          <div className="play-one">
            <div className="play--youtube">
              <h1
                style={{
                  color: "white",
                  fontSize: "36px",
                  padding: "25px 0",
                }}
              >
                ПРОГРАММА КУРСА{" "}
              </h1>
              <iframe
                width="600"
                height="375"
                src="https://www.youtube.com/embed/F7D1kD7nbMc?modestbranding=1&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="accordions--we">
            <div
              onClick={() => handleAccordionClick(1)}
              style={{ height: question1 ? "210px" : "" }}
              className="accordion--we__left"
            >
              <div className="accordion--we__left--title">
                <h3 className="accordion--we__left--title__accord">
                  <button>Модуль 1</button>
                </h3>
                <div className="accordion--we__left--title__accord--cod">
                  <h1>Reactivity</h1>
                  <p>Пройдено материалов: 4/15</p>
                </div>
                <button
                  className="accordion--we__left--title__accord--btn"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent the default button click behavior
                    handleAccordionClick(1); // Call the accordion click handler
                  }}
                >
                  {question1 ? (
                    <span className="accordion--we__left--title__accord--btn__icon">
                      <BsChevronUp />
                    </span>
                  ) : (
                    <span className="accordion--we__left--title__accord--btn__down">
                      <BsChevronDown />
                    </span>
                  )}
                </button>
              </div>
              <div className="accordion--we__left--title__accord--btn__answer">
                <div className="accordion--we__left--title__accord--btn__answer--bloct">
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <p>
                      {" "}
                      <iframe
                        width="100"
                        height="75"
                        style={{ borderRadius: "5px" }}
                        src="https://www.youtube.com/embed/F7D1kD7nbMc?modestbranding=1&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
                <div className="accordion--we__left--title__accord--btn__answer--bloct">
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <p>
                      {" "}
                      <iframe
                        width="100"
                        height="75"
                        style={{ borderRadius: "5px" }}
                        src="https://www.youtube.com/embed/F7D1kD7nbMc?modestbranding=1&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
                <div className="accordion--we__left--title__accord--btn__answer--bloct">
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <p>
                      {" "}
                      <iframe
                        width="100"
                        height="75"
                        style={{ borderRadius: "5px" }}
                        src="https://www.youtube.com/embed/F7D1kD7nbMc?modestbranding=1&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={() => handleAccordionClick(2)}
              style={{ height: question2 ? "210px" : "" }}
              className="accordion--we__left"
            >
              <div className="accordion--we__left--title">
                <h3 className="accordion--we__left--title__accord">
                  <button>Модуль 1</button>
                </h3>
                <div className="accordion--we__left--title__accord--cod">
                  <h1>Reactivity</h1>
                  <p>Пройдено материалов: 4/15</p>
                </div>
                <button
                  className="accordion--we__left--title__accord--btn"
                  onClick={(e) => {
                    e.preventDefault(); 
                    handleAccordionClick(2);
                  }}
                >
                  {question2 ? (
                    <span className="accordion--we__left--title__accord--btn__icon">
                      <BsChevronUp />
                    </span>
                  ) : (
                    <span className="accordion--we__left--title__accord--btn__down">
                      <BsChevronDown />
                    </span>
                  )}
                </button>
              </div>
              <div className="accordion--we__left--title__accord--btn__answer">
                <div className="accordion--we__left--title__accord--btn__answer--bloct">
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <p>
                      {" "}
                      <iframe
                        width="100"
                        height="75"
                        style={{ borderRadius: "5px" }}
                        src="https://www.youtube.com/embed/F7D1kD7nbMc?modestbranding=1&controls=0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </p>
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Add similar code for the third accordion if needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
