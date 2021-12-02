import React from "react";
import styles from "./button.module.scss";

/* eslint-disable react/prop-types */
export default function Button(props) {
  return (
    <button className={styles.button}>
      <span className={styles.button_font}>{props.name}</span>
    </button>
  );
}
