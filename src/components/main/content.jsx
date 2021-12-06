import React from "react";
import Categories from "./categories/categories.jsx";
import Sort from "./sort/sort.jsx";
import styles from "./content.module.scss";
import PizzaBlock from "./pizzaBlock/pizzaBlock.jsx";

/* eslint-disable react/prop-types */
export default function Content({pizzas}) {
  return (
    <div className={styles.content}>
      <div className={styles.content__top}>
        <Categories />
        <Sort />
      </div>
      <div className={styles.content__title}>
        <h2 className={styles.content__title_h2_font}>Все пиццы</h2>
        <PizzaBlock pizzas={pizzas} />
      </div>
    </div>
  );
}
