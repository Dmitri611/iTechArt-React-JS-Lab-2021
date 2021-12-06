import React from "react";
import styles from "../login/login.module.scss";
import Block from "../../newPizza/block/block.jsx";
import { Link } from "react-router-dom";
import Button from "../../header/button/button.jsx";

export default function Registration() {
  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Регистрация</h2>
      <div className={styles.content_wrapper}>
        <Block name="Придумайте логин" label="login" />
        <Block name="Придумайте пароль" label="password" />
        <Block name="Повторите пароль" label="repeat password" />
        <Block name="Введите email" label="email" />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button name="Регистрация" />
      </div>
    </div>
  );
}
