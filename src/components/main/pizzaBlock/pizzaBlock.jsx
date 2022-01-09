import React from "react";
import styles from "./pizzaBlock.module.scss";
import Pizza from "../pizza/pizza.jsx";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";

export default function PizzaBlock() {
  let pizzas = useSelector(pizzaSelector);

  return (
    <div className={styles.content__items}>
      {pizzas.map((item) => (
        <Pizza key={item.name} {...item} />
      ))}
    </div>
  );
}
