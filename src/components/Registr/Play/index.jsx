import React, { useState } from "react";
import "./index.scss";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";

const accordionData = [
  {
    title: "Модуль 1",
    image: "https://primemusic.zone/uploads/posts/2023-01/63c09cad3fb50.jpg",
    image: "https://primemusic.zone/uploads/posts/2023-01/63c09cad3fb50.jpg",
    image: "https://primemusic.zone/uploads/posts/2023-01/63c09cad3fb50.jpg",
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oSCNuV_GiJikmv00PB3Fl6grvQRZYG7L_g&usqp=CAU", 
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    video: "https://www.youtube.com/watch?v=iT_qKUG_m28",
    video2: "https://www.youtube.com/embed/wpbHmjQJl1Y",
    video3: "https://www.youtube.com/embed/QBUXsvjZIWI",
    text: "Бат эле унутамын",
    text2: "Суротуно",
    text3: "Керексин",
    id: 1,
  },
  {
    title: "Модуль 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU",
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    video: "https://www.youtube.com/embed/j1DhaufCHmI",
    video2: "https://www.youtube.com/embed/BiBwujgYNvc",
    video3: "https://www.youtube.com/embed/XflFSWaNJxU",
    text: "Бат эле унутамын",
    text2: "Суротуно",
    text3: "Керексин",
    урок:'hbnjkm',
    id: 2,
  },
  {
    title: "Модуль 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    image1:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    image2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-lF-cbqbe0ogtj9ee5f9Bz7SglY90fIwJg&usqp=CAU", 
    video: "https://www.youtube.com/embed/j1DhaufCHmI",
    video2: "https://www.youtube.com/embed/BiBwujgYNvc",
    video3: "https://www.youtube.com/embed/XflFSWaNJxU",
    text: "Бат эле унутамын",
    text2: "Суротуно",
    text3: "Керексин",
    id: 2,
  },
  // Добавьте остальные данные для модулей...
];

const Play = () => {
  const [youtube, setYoutube] = useState(accordionData[0].video);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const programClick = (index) => {
    const a = document.querySelector(".accordion-item");
    if (index <= currentIndex) {
      a.style.opacity = "1";
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  const programVideoClick = (video, index) => {
    if (index === activeIndex) {
      setYoutube(video);
      setActiveIndex(null);
      setCurrentIndex(index + 1);
    }
  };

  return (
    <div id="program">
      <div className="container">
        <div className="program">
          <div className="program--fr">
            <h1>ПРОГРАММА КУРСА </h1>
          </div>
          <div className="program--vid">
            <div className="program--vid__if">
              <iframe
                width="560"
                height="315"
                src={youtube}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div
              className="program--vid__accordion"
              style={{ cursor: "pointer" }}
            >
              {accordionData.map((item, index) => (
                <div
                  key={index}
                  className={`accordion-item ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => programClick(index)}
                >
                  <div className="program--vid__accordion--title">
                    <div
                      style={{
                        color: "#fffff",
                        width: "156px",
                        height: "68px",
                        background: "#034781",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius:'10px'
                      }}
                    >
                      {item.title}
                    </div>
                    <div>
                      <h2
                        style={{
                          fontSize: "20px",
                          color: "white",
                          lineHeight: "20px",
                          padding: "10px 20px",
                          margin: "0",
                        }}
                      >
                        Reactivity
                      </h2>
                      <h3
                        style={{
                          // padding: "10px 20px",
                          fontSize: "12px",
                          color: "white",
                          width: "200px",
                          height: "28px",
                          background: "#1B295966",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin:'10px 20px'
                        }}
                      >
                        Пройдено материалов: 4/15
                      </h3>
                    </div>
                    <div>
                      <span>
                        {activeIndex === index ? (
                          <TfiArrowCircleUp />
                        ) : (
                          <TfiArrowCircleDown />
                        )}
                      </span>
                    </div>
                  </div>
                  {index === activeIndex && (
                    <div className="program--vid__accordion--title__content">
                      <div
                        onClick={() => programVideoClick(item.video, index)}
                        className="program--vid__accordion--title__content--videos"
                      >
                        <img src={item.image} alt="" />
                        <div>
                          <p>{item.text}</p>
                        </div>
                      </div>
                      <div
                        onClick={() => programVideoClick(item.video2, index)}
                        className="program--vid__accordion--title__content--videos"
                      >
                        <img src={item.image1} alt="" />
                        <div>
                          <p>{item.text2}</p>
                          <span>{item.study}</span>
                        </div>
                      </div>
                      <div
                        onClick={() => programVideoClick(item.video3, index)}
                        className="program--vid__accordion--title__content--videos"
                      >
                        <img src={item.image2} alt="" />
                        <div>
                          <p>{item.text3}</p>
                          <span>{item.study}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;
