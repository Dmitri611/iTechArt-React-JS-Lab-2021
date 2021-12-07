import React from "react";
import styles from "./basketUser.module.scss";
import Button from "../../header/button/button.jsx";
import { Link } from "react-router-dom";
import Heading from "./heading/heading.jsx";
import Content from "./content/content.jsx";

export default function BasketUser() {
  return (
    <div className={styles.basket__content}>
      <Heading />
      <div className={styles.content}>
        <Content />
        <Content />
        <div className={styles.info_for_order}>
          <h2 className={styles.text}>
            Всего пицц: <span className={styles.number}>3шт.</span>
          </h2>
          <h2 className={styles.text}>
            Сумма заказа: <span className={styles.number_price}>30р.</span>
          </h2>
        </div>
        <div className={styles.button_group}>
          <Link to="/">
            <Button name="Вернуться назад" />
          </Link>
          <Button name="Оплатить сейчас" />
        </div>
      </div>
    </div>
  );
}
