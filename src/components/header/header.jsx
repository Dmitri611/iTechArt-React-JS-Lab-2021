import React from "react";
import styles from "./header.module.scss";
import Logo from "./logo/logo.jsx";
import Search from "./search/search.jsx";
import Button from "./button/button.jsx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_container}>
        <Link to="/">
          <Logo />
        </Link>
        <Search />
        <Link to="/adminPage">
          <Button name="Admin settings" />
        </Link>
        <Link to="/basket">
          <Button name="Корзина" />
        </Link>
        <div className={styles.header_buttons}>
          <Link to="/login">
            <Button name="Войти" />
          </Link>
          <Link to="/registration">
            <Button name="Регистрация" />
          </Link>
        </div>
      </div>
    </div>
  );
}
