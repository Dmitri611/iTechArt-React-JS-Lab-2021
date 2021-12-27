import React, { useState } from "react";
import styles from "../login/login.module.scss";
import { Link } from "react-router-dom";
import Button from "../../header/button/button.jsx";
import Block from "../../admin/newPizzaPage/block/block";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../../store/actions/userActions";
import { useSelector } from "react-redux";
import { userSelector } from "../../../store/selectors/usersSelectors";

export default function Registration() {
  const dispatch = useDispatch();
  const users = useSelector(userSelector());

  const [newUser, setNewUser] = useState({
    login: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const addUser = () => {
    dispatch(addUserAction(newUser));
    alert("Регистрация прошла успешна!");
  };
  console.log(users);

  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Регистрация</h2>
      <div className={styles.content_wrapper}>
        <Block
          value={newUser.login}
          onChange={handleChange}
          name="login"
          label="login"
          help="Логин должен содержать минимум 5 символов и может содержать латинские буквы, цифры и тире!"
        />
        <Block
          value={newUser.password}
          onChange={handleChange}
          name="password"
          label="password"
          type="password"
          help="Длина пароля минимум 8 символов, в нем должны ис - пользоваться только латинские буквы и как минимум 1 цифра!"
        />
        <Block
          name="password"
          label="repeat password"
          type="password"
          help="Повторите пароль еще раз!"
        />
        <Block
          value={newUser.email}
          onChange={handleChange}
          name="email"
          label="email"
          help="Укажите свою настоящую почту!"
        />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Link to="/">
          <Button onClick={addUser} name="Регистрация" />
        </Link>
      </div>
    </div>
  );
}
