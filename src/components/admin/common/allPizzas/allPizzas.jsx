/* eslint-disable react/prop-types */
import React from "react";
import styles from "./allPizzas.module.scss";
import { useSelector } from "react-redux";
import { pizzaSelector } from "../../../../store/selectors/pizzaSelectors";

export default function AllPizzas(props) {
  let pizzas = useSelector(pizzaSelector);

  return (
    <div className={styles.pizzas}>
      <div className={styles.pizzas_heading}>
        <h2>{props.heading}</h2>
      </div>
      {pizzas.length > 0 ? (
        <select size="3" className={styles.pizzas_select}>
          {pizzas.map((pizza) => (
            <option onClick={props.onClick} key={pizza.name}>
              {pizza.name}
            </option>
          ))}
        </select>
      ) : (
        <h2>Пиццы отсутствуют!</h2>
      )}
    </div>
  );
}
