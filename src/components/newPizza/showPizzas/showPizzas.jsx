import React from "react";
import styles from "./showPizzas.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";
import { delPizzaAction } from "../../../store/actions/pizzaActions";
import Button from "../../header/button/button";

export default function ShowPizzas() {
  let pizzas = useSelector(pizzaSelector());
  const dispatch = useDispatch();

  let allPizzas = {
    value: ''
  }

  const handleChange = (e) => {
     allPizzas.value = e.currentTarget.value
  }

  const delPizza = () => {
    dispatch(delPizzaAction(allPizzas.value));
    alert(`Пицца ${allPizzas.value} успешно удалена!`)
  };

  return (
    <div className={styles.pizzas}>
      {pizzas.length > 0 ? (
        <select onChange={handleChange} size="3" className={styles.pizzas_select}>
          {pizzas.map((pizza) => (
            <option key={pizza.name}>
              {pizza.name}
            </option>
          ))}
        </select>
      ) : (
        <h2>Пиццы отсутствуют!</h2>
      )}
      <div className={styles.pizzas_btns}>
        <Button onClick={delPizza} name="Удалить" />
        <Button name="Изменить" />
      </div>
    </div>
  );
}
