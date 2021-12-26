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
  }
  console.log(users);

  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Регистрация</h2>
      <div className={styles.content_wrapper}>
        <Block 
        value={newUser.login}
        onChange={handleChange}
        name="login" label="login" />
        <Block 
        value={newUser.password}
        onChange={handleChange}
        name="password" label="password" />
        <Block name="password" label="repeat password" />
        <Block 
        value={newUser.email}
        onChange={handleChange}
        name="email" label="email" />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button onClick={addUser} name="Регистрация" />
      </div>
    </div>
  );
}
