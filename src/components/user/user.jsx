import React from "react";
import styles from "./user.module.scss";
import Block from "../admin/newPizzaPage/block/block"
import Button from "../header/button/button"
import { Link } from "react-router-dom";

export default function User() {

    const questionDel = () => {
        window.confirm("Вы точно хотите удалить профиль?");
    }

    const questionEdit = () => {
        window.confirm("Вы точно хотите изменить свои данные?");
    }

  return <div className={styles.content}>
    <h2>Личные данные</h2>
    
    <div className={styles.content_blocks}>
    <Block 
      name="First name"
      label="Имя"
    />
    <Block 
      name="Last name"
      label="Фамилия"
    />
    <Block 
      name="delivery address"
      label="Адрес доставки"
    />
    <Block 
      name="Email"
      label="Введите почту"
    />
    </div>
    <Button name="История заказов" />
    <div className={styles.content_btns}>
    
    <Link to="/">
    <Button name="Назад" />
    </Link>
    <Button onClick={questionDel} name="Удалить аккаунт" />
    <Button onClick={questionEdit} name="Изменить" />
    </div>
  </div>
}
