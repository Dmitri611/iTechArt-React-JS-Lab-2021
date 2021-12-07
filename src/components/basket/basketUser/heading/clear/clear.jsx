import React from "react";
import styles from "./clear.module.scss";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Clear() {
  return (
    <div className={styles.content}>
      <div className={styles.content_svg}>
        <DeleteForeverIcon
          className={styles.basket_icon}
          color="disabled"
          fontSize="large"
        ></DeleteForeverIcon>
      </div>
      <div className={styles.content_text}>
        <h2 className={styles.content_font}>Очистить корзину</h2>
      </div>
    </div>
  );
}
