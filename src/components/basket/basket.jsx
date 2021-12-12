import React from "react";
import styles from "./basket.module.scss";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Button from "../header/button/button.jsx";
import { Link } from "react-router-dom";

export default function Basket() {
  return (
    <div className={styles.basket__content}>
      <div className={styles.heading__content}>
        <h2 className={styles.heading_font}>Корзина пустая</h2>
        <div className={styles.icon}>
          <SentimentDissatisfiedIcon
            fontSize="large"
            color="success"
          />
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.description_font}>
          Вероятней всего, вы не авторизовались.
        </p>
        <p className={styles.description_font}>
          Для того, чтобы заказать пиццу, перейди на главную страницу и
          авторизуйтесь.
        </p>
      </div>
      <div className={styles.image__content}>
        <div className={styles.image}></div>
      </div>
      <div className={styles.button__content}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
      </div>
    </div>
  );
}
