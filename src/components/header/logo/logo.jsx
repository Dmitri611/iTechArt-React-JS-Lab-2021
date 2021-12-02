import React from "react";
import styles from "./logo.module.scss";
import logo from "../../../assets/img/svg/544pizza2_100268.svg";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logo_top}>
        <div className={styles.logo_img}>
          <img width="38" src={logo} alt="Pizza logo" />
        </div>
        <div className={styles.logo_text}>
          <h1 className={styles.logo_font}>pizza lab</h1>
        </div>
      </div>
      <div className={styles.logo_description}>
        <p className={styles.logo_description_font}>Лучшая пицца в мире!</p>
      </div>
    </div>
  );
}
