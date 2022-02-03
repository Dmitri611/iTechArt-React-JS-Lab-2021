import React, { useState } from "react";
import styles from "./user.module.scss";
import Block from "../admin/newPizzaPage/block/block";
import Button from "../header/button/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { authUserSelector } from "../../store/selectors/authSelectors";
import { useDispatch } from "react-redux";
import { authUser } from "../../store/actions/authUserActions";

export default function User() {
  const authUsers = useSelector(authUserSelector);
  const info = authUsers?.currentUser;
  const dispatch = useDispatch();

  const [newInfo, setNewInfo] = useState({
    login: "",
    authorized: "true",
    currentUser: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
    },
  });

  const handleChange = (e) => {
    setNewInfo({
      login: authUsers?.currentUser?.login,
      authorized: "true",
      currentUser: {
        ...newInfo.currentUser,
        [e.target.name]: e.target.value,
      },
    });
  };

  const editInfo = () => {
    dispatch(authUser(newInfo));
    alert("Изменение прошло успешно!");
  };

  const exit = () => {
    dispatch(authUser(""));
  };

  return (
    <div className={styles.content}>
      <h2>Личные данные </h2>
      <div className={styles.content_blocks}>
        <Block
          value={newInfo.firstName}
          defaultValue={info?.firstName}
          onChange={handleChange}
          name="firstName"
          label="Имя"
        />
        <Block
          value={newInfo.lastName}
          defaultValue={info?.lastName}
          onChange={handleChange}
          name="lastName"
          label="Фамилия"
        />
        <Block
          value={newInfo.address}
          defaultValue={info?.address}
          onChange={handleChange}
          name="address"
          label="Адрес доставки"
        />
        <Block
          value={newInfo.email}
          defaultValue={info?.email}
          onChange={handleChange}
          name="email"
          label="Введите почту"
        />
      </div>
      <Button name="История заказов" />
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Назад" />
        </Link>
        <Button name="Удалить аккаунт" />
        <Button onClick={editInfo} name="Изменить" />
        <Button onClick={exit} name="Выйти" />
      </div>
    </div>
  );
}
