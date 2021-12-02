import React from "react";
import styles from "./navList.module.scss";
import Item from "./item/item.jsx";

export default function NavList() {
  return (
    <ul className={styles.footer__content__list}>
      <Item name="О нас" />
      <Item name="Оставить отзыв" />
      <Item name="Работа у нас" />
      <Item name="Акции" />
      <Item name="Контакты" />
    </ul>
  );
}
