import React from "react";
import styles from "./pizzaBlock.module.scss";
import Pizza from "../pizza/pizza.jsx";
import PropTypes from 'prop-types';

PizzaBlock.propTypes ={
  pizzas: PropTypes.array,
}

export default function PizzaBlock({ pizzas }) {
  return (
    <div className={styles.content__items}>
      {pizzas.map((item) => (
        <Pizza key={item.name} {...item} />
      ))}
    </div>
  );
}
