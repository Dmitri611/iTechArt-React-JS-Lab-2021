import React from "react";
import styles from "./item.module.scss";

/* eslint-disable react/prop-types */
export default function Item(props) {
  return (
    <li>
      <a className={styles.footer_cont_l_item} href="/">
        {props.name}
      </a>
    </li>
  );
}
