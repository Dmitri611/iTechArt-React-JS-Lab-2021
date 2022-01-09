import React, { useState } from "react";
import styles from "./login.module.scss";

import Button from "../../header/button/button.jsx";
import { Link } from "react-router-dom";
import Block from "../../admin/newPizzaPage/block/block";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/selectors/usersSelectors";

export default function Login() {
  const users = useSelector(userSelector);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const findUser = () => {
    const thisUser = users.find((item) => item.login === user.login);
    if (!thisUser) {
      alert("Пользователя не существует!");
    } else {
      if (user.login === thisUser.login) {
        if (user.password === thisUser.password) {
          alert(`Пользователь ${user.login} успешно авторизован!`);
        } else {
          alert("Неверный пароль!");
        }
      } else {
        alert("Пользователь не найден!");
      }
    }
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Вход на сайт</h2>
      <div className={styles.content_wrapper}>
        <Block
          name="login"
          value={user.login}
          label="login"
          help="Введите ваш логин!"
          onChange={handleChange}
        />
        <Block
          name="password"
          value={user.password}
          label="password"
          type="password"
          onChange={handleChange}
          help="Введите ваш пароль!"
        />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button onClick={findUser} name="Войти" />
      </div>
    </div>
  );
}
