import React from "react";
import styles from "./sort.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function Sort() {
  return (
    <div className={styles.sort}>
      <div className={styles.sort_content}>
        <ArrowDropUpIcon />
        <div className={styles.sort_content_padd}>
          <span className={styles.sort_item_b_font}> Сортировка по: </span>
        </div>
        <div className={styles.sort_content_padd}>
          <span className={styles.sort_item_b_font_active}>популярности</span>
        </div>
      </div>
    </div>
  );
}
