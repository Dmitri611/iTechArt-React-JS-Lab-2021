import React from "react";
import styles from "./item.module.scss";

/* eslint-disable react/prop-types */
export default function Item(props) {
  return (
    <li className={styles.footer_cont_l_item}>
        {props.name}
    </li>
  );
}
