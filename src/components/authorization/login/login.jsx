import React, { useState } from "react";
import styles from "./login.module.scss";

import Button from "../../header/button/button.jsx";
import { Link } from "react-router-dom";
import Block from "../../admin/newPizzaPage/block/block";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../store/selectors/usersSelectors";
// import { authUserSelector } from "../../../store/selectors/authSelectors";
import { authUser } from "../../../store/actions/authUserActions";

export default function Login() {
  // const authUsers = useSelector(authUserSelector);
  const users = useSelector(userSelector);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    authorized: "false",
    currentUser: {
      login: "",
      password: "",
      email: "",
      firstName: "Dmitri",
      lastName: "Novikov",
      address: "Vitebsk",
    },
  });

  const handleChange = (e) => {
    const thisUser = users.find(
      (item) => item.login === user.currentUser.login
    );
    setUser({
      authorized: "true",
      currentUser: {
        ...user.currentUser,
        [e.target.name]: e.target.value,
        email: thisUser?.email,
        firstName: thisUser?.firstName,
        lastName: thisUser?.lastName,
        address: thisUser?.address,
      },
    });
  };

  const findUser = () => {
    const thisUser = users.find(
      (item) => item.login === user.currentUser.login
    );

    if (!thisUser) {
      alert("Пользователя не существует!");
    } else {
      if (user.currentUser.login === thisUser.login) {
        if (user.currentUser.password === thisUser.password) {
          dispatch(authUser(user));
          alert(`Пользователь ${user.currentUser.login} успешно авторизован!`);
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
          value={user.currentUser.login}
          label="login"
          help="Введите ваш логин!"
          onChange={handleChange}
        />
        <Block
          name="password"
          value={user.currentUser.password}
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
