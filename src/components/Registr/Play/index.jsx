import React, { useRef, useState } from "react";
import "./index.scss";
import { BsChevronDown, BsChevronUp, AiFillPlayCircle } from "react-icons/bs";

const Play = () => {
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [fal, setFal] = useState(1);
  const [selectedIframe, setSelectedIframe] = useState(null);
  const [on, setOn] = useState(false);

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

  const handleIframeClick = (index) => {
    setSelectedIframe(index);
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
              <div>
                <div
                  style={{
                    display: fal === 1 ? "block" : "none",
                  }}
                >
                  <iframe
                    style={{ borderRadius: "5px" }}
                    width="600"
                    height="375"
                    src="https://www.youtube.com/embed/2Ep6VmdKjGE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* //////////////////// */}
                <div>
                  <iframe
                    style={{
                      borderRadius: "5px",
                      display: fal === 2 ? "block" : "none",
                    }}
                    width="600"
                    height="375"
                    src="https://www.youtube.com/embed/am3TJ3RYyv4"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <iframe
                    style={{
                      borderRadius: "5px",
                      display: fal === 3 ? "block" : "none",
                    }}
                    width="600"
                    height="375"
                    src="https://www.youtube.com/embed/4cDw3a72cOo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
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
                    e.preventDefault();
                    handleAccordionClick(1);
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
                <div
                  onClick={() => {
                    setFal(1);
                    handleIframeClick(1);
                    setOn(true);
                  }}
                  className="accordion--we__left--title__accord--btn__answer--bloct"
                >
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <iframe
                      style={{
                        borderRadius: "5px",
                      }}
                      width="100"
                      height="75"
                      src="https://www.youtube.com/embed/2Ep6VmdKjGE"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <p
                      style={{
                        display: on ? "block" : "none",
                      }}
                    >
                      {" "}
                      on
                    </p>
                    {selectedIframe === 1 && <div className="green-dot" />}
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
                {/* ////////////////// */}
                <div
                  onClick={() => {
                    setFal(2);
                    handleIframeClick(2);
                    setOn(true);
                  }}
                  className="accordion--we__left--title__accord--btn__answer--bloct"
                >
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <iframe
                      style={{ borderRadius: "5px" }}
                      width="100"
                      height="75"
                      src="https://www.youtube.com/embed/am3TJ3RYyv4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <p
                      style={{
                        display: on  ? "block" : "none",
                      }}
                    >
                      {" "}
                      on
                    </p>
                    {selectedIframe === 2 && <div className="green-dot" />}
                  </div>
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-2">
                    <h1>3 Observable example</h1>
                    <h2>video</h2>
                  </div>
                </div>
                {/* ////////////// */}
                <div
                  onClick={() => {
                    setFal(3);
                    handleIframeClick(3);
                    setOn(true);
                  }}
                  className="accordion--we__left--title__accord--btn__answer--bloct"
                >
                  <div className="accordion--we__left--title__accord--btn__answer--bloct__bloct-1">
                    <iframe
                      style={{ borderRadius: "5px" }}
                      width="100"
                      height="75"
                      src="https://www.youtube.com/embed/am3TJ3RYyv4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <p
                      style={{
                        display: on ? "block" : "none",
                        
                      }}
                    >
                      {" "}
                      on
                    </p>
                    {selectedIframe === 3 && <div className="green-dot" />}
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
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
