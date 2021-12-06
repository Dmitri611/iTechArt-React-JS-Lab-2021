import React from "react";
import styles from "./pizzaBlock.module.scss";
import Pizza from "../pizza/pizza.jsx";

/* eslint-disable react/prop-types */
export default function PizzaBlock({pizzas}) {
  return (
    <div className={styles.content__items}>
      {pizzas.map(item => <Pizza key={item.name} {...item} />)}
    </div>
  );
}
