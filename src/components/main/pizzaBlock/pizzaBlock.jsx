import React from "react";
import styles from "./pizzaBlock.module.scss";
import Pizza from "../pizza/pizza.jsx";
import { useSelector } from "react-redux";


export default function PizzaBlock() {
  const pizzas = useSelector(state => state.pizzas)

  return (
    <div className={styles.content__items}>
      {pizzas.map((item) => (
        <Pizza key={item.name} {...item} />
      ))}
    </div>
  );
}
