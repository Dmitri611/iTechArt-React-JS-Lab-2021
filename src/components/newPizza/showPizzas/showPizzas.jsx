import React from "react";
import styles from "./showPizzas.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";
import { delPizzaAction } from "../../../store/actions/pizzaActions";

export default function ShowPizzas() {
  let pizzas = useSelector(pizzaSelector());
  const dispatch = useDispatch();

  const delPizza = (e) => {
    dispatch(delPizzaAction(e.target.text))
  }

  return (
    <div className={styles.pizzas}>
      {pizzas.length > 0 ? (
        <select size="3" className={styles.pizzas_select}>
          {pizzas.map((pizza) => (
            <option onClick={delPizza} key={pizza.name}>{pizza.name}</option>
          ))}
        </select>
      ) : (
        <h2>Пиццы отсутствуют!</h2>
      )}
    </div>
  );
}
