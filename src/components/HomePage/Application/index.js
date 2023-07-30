import React, { useState } from "react";
import axios from "axios";

const countryCodes = [
  { code: "+996", country: "Кыргызстан" },
  { code: "+7", country: "Россия" },
  // Другие коды стран...
];

function Application() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "+996",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    const { name, phoneNumber, email } = formData;
    const message = `ФИО: ${name}\nНомер телефона: ${phoneNumber}\nEmail: ${email}`;
    const TOKEN = "6673147008:AAEv7UyST7R9AmQJWWt4bOlMAehrK6Akck4";
    const CHAT_ID = "-1001779671235";

    axios
      .post(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: message,
      })
      .then((response) => {
        console.log("Сообщение успешно отправлено:", response.data);
        alert("Сообщение успешно отправлено:", "ok");
        setFormData({
          name: "",
          phoneNumber: "+996",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке сообщения:", error);
      });
  };

  return (
    <div id="application">
      <div className="container">
        <div className="application">
          <div className="application__left">
            <h1>Оставить заявку</h1>
            <p>
              Заполните краткую форму с ключевыми вопросами, и мы подготовимся к
              разговору с вами
            </p>
          </div>
          <div className="application__right">
            <div className="application__right-inputs">
              <h2>ФИО*</h2>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="application__right-inputs">
              <h2>Номер телефона*</h2>
              <select
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              >
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.country} ({country.code})
                  </option>
                ))}
              </select>
              <input
                className="foun"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="application__right-inputs">
              <h2>Email*</h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button onClick={handleSendMessage}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
