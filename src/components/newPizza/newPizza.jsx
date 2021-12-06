import React from "react";
import styles from "./newPizza.module.scss";
import Block from "./block/block.jsx";
import Button from "../header/button/button.jsx";
import { Link } from "react-router-dom";

export default function newPizza() {
  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Добавить пиццу</h2>
      <div className={styles.content_wrapper}>
        <Block name="Фото" label="Введите URL ссылку на картинку" />
        <Block name="Категория" label="Введите категорию" />
        <Block name="Название" label="Введите название" />
        <Block name="Цена" label="Введите цену" />
        <Block name="Ингредиенты" label="Введите ингредиенты" />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button name="Добавить пиццу" />
      </div>
    </div>
  );
}
