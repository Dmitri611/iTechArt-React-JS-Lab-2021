import { style } from "@mui/system";
import React from "react";
import styles from "./basket.module.scss";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Button from '../header/button/button.jsx'

export default function Bascet() {
  return (
      <div className={styles.basket__content}>
        <div className={styles.heading__content}>
          <h2 className={styles.heading_font}>Корзина пустая</h2>
          <div className={styles.icon}>
            <SentimentDissatisfiedIcon
              fontSize="large"
              color="success"
            ></SentimentDissatisfiedIcon>
          </div>
        </div>
        <div className={styles.description}>
            <p className={styles.description_font}>Вероятней всего, вы не заказывали ещё пиццу.</p>
            <p className={styles.description_font}>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
        </div>
        <div className={styles.image__content}>
            <div className={styles.image}></div>
        </div>
        <div className={styles.button__content}>
        <Button name="Вернуться назад"></Button>
        </div>
      </div>
  );
}
