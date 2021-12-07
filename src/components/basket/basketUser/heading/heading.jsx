import React from "react";
import styles from "./heading.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Clear from "./clear/clear.jsx";

export default function Heading() {
  return (
    <div className={styles.content}>
      <div className={styles.content_heading}>
        <div className={styles.content_heading_svg}>
          <ShoppingCartIcon color="action" fontSize="large"></ShoppingCartIcon>
        </div>
        <div className={styles.content_heading_text}>
          <h2 className={styles.content_heading_font}>Корзина</h2>
        </div>
      </div>
      <Clear />
    </div>
  );
}
