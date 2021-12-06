import React from "react";
import styles from "./login.module.scss";
import Block from "../../newPizza/block/block.jsx";
import Button from "../../header/button/button.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Вход на сайт</h2>
      <div className={styles.content_wrapper}>
        <Block name="Введите логин" label="login" />
        <Block name="Введите пароль" label="password" />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button name="Войти" />
      </div>
    </div>
  );
}
