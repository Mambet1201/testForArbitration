import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("+");

  const navigate = useNavigate();

  let isFilled = true;
  if (userName.trim() !== "" && phone.trim().length > 10) {
    isFilled = false;
  }
  console.log(isFilled);

  const clearAllInputs = () => {
    setUserName("");
    setPhone("");
  };

  const user = {
    stream_code: "vv4uf",
    client: {
      phone: phone + "",
      name: userName,
    },
  };

  const createItem = async () => {
    try {
      await axios.post("https://order.drcash.sh/v1/order", user, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer RLPUUOQAMIKSAB2PSGUECA",
        },
      });
      navigate("/:id");
    } catch {
      alert("Мы уже решаем проблему, повторите попытку позже ");
    } finally {
      clearAllInputs();
    }
  };
  return (
    <div className="cont">
      <h2>Форма ввода данных</h2>
      <div>
        <div className="cont_inputs">
          <label>
            Name
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              value={userName}
              type="text"
              placeholder="Your full name"
            />
          </label>
          <label>
            Phone
            <input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
              type="number"
              placeholder="Your phone number (only numbers)"
            />
          </label>
        </div>
        <div className="cont_buttons">
          <button onClick={() => clearAllInputs()}>Отчистить поля</button>
          <button disabled={isFilled} onClick={() => createItem()}>
            Отправить
          </button>
        </div>
      </div>
      <p className="pInfo">*номер телефона не менее 11 символов</p>
    </div>
  );
};

export default HomePage;
