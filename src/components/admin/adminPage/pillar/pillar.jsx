/* eslint-disable react/prop-types */
import React from "react";
import styles from "./pillar.module.scss";

export default function Pillar(props) {
  return (
    <div className={styles.block}>
      <h2>{props.name}</h2>
      <div className={styles.block_btns}>{props.children}</div>
    </div>
  );
}
