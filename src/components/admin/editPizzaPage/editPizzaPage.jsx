import React from "react";
import styles from "./editPizzaPage.module.scss";
import Button from "../../header/button/button";
import { Link } from "react-router-dom";
import AllPizzas from "../newPizzaPage/allPizzas/allPizzas";
import Block from "../newPizzaPage/block/block";

export default function EditPizzaPage() {
  return (
    <div className={styles.content}>
      <AllPizzas />
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_font}>Изменить пиццу</h2>
        <Block name="image" />
        <Block name="category" />
        <Block name="name" />
        <Block name="price" />
        <Block name="ingredients" />
        <div className={styles.content_btns}>
          <Link to="/adminPage">
            <Button name="Вернуться назад" />
          </Link>
          <Button name="Изменить пиццу" />
        </div>
      </div>
    </div>
  );
}
