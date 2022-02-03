import React from "react";
import styles from "./header.module.scss";
import Logo from "./logo/logo.jsx";
import Search from "./search/search.jsx";
import Button from "./button/button.jsx";
import { Link } from "react-router-dom";
import Profile from "./profile/profile";
import { useSelector } from "react-redux";
import { authUserSelector } from "../../store/selectors/authSelectors";

export default function Header() {
  const selector = useSelector(authUserSelector);

  if (selector?.currentUser?.login === "admin") {
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
            <Link to="/profile">
              <Profile />
            </Link>
          </div>
        </div>
      </div>
    );
  }
  if (selector?.authorized) {
    return (
      <div className={styles.header}>
        <div className={styles.header_container}>
          <Link to="/">
            <Logo />
          </Link>
          <Search />
          <Link to="/basket">
            <Button name="Корзина" />
          </Link>
          <div className={styles.header_buttons}>
            <Link to="/profile">
              <Profile />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (selector?.authorized === undefined) {
    return (
      <div className={styles.header}>
        <div className={styles.header_container}>
          <Link to="/">
            <Logo />
          </Link>
          <Search />
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
}
