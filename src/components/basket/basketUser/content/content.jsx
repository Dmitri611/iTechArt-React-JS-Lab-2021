import React from "react";
import styles from "./content.module.scss";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

export default function Content() {
  return (
    <tr className={styles.block}>
      <div className={styles.block_pizza}>
        <td className={styles.block_pizza_div}>
          <img
            className={styles.block_pizza_image}
            src="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
          ></img>
        </td>
        <td className={styles.block_description}>
          <h2>Новая пицца</h2>
          <p className={styles.block_description_font}>тонкое тесто, 26 см.</p>
        </td>
      </div>
      <td className={styles.block_counter}>
        <RemoveIcon
          className={styles.block_counter_icon}
          fontSize="medium"
        ></RemoveIcon>
        <h2>2</h2>
        <AddIcon
          className={styles.block_counter_icon}
          fontSize="medium"
        ></AddIcon>
      </td>
      <td className={styles.block_counter_price}>
        <h2>10.99 р.</h2>
      </td>
      <td>
        <CloseIcon
          className={styles.block_counter_icon}
          fontSize="large"
        ></CloseIcon>
      </td>
    </tr>
  );
}
