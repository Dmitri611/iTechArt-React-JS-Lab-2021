import React from "react";
import styles from "./removePizzaPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { pizzaSelector } from "../../../store/selectors/pizzaSelectors";
import Button from "../../header/button/button";
import { delPizzaAction } from "../../../store/actions/pizzaActions";
import { Link } from "react-router-dom";

export default function ShowPizzas() {
  let pizzas = useSelector(pizzaSelector);
  const dispatch = useDispatch();

  let PizzaValue = {
    value: "",
  };

  const handleChange = (e) => {
    PizzaValue.value = e.currentTarget.value;
  };

  const delPizza = () => {
    dispatch(delPizzaAction(PizzaValue.value));
    if (PizzaValue.value) {
      alert(`Пицца ${PizzaValue.value} успешно удалена!`);
    } else {
      alert("Пицца не выбрана!");
    }
  };

  return (
    <div className={styles.pizzas}>
      <div className={styles.pizzas_heading}>
        <h2>Выберите пиццу, которую хотите удалить</h2>
      </div>
      {pizzas.length > 0 ? (
        <select
          onChange={handleChange}
          size="3"
          className={styles.pizzas_select}
        >
          {pizzas.map((pizza) => (
            <option key={pizza.name}>{pizza.name}</option>
          ))}
        </select>
      ) : (
        <h2>Пиццы отсутствуют!</h2>
      )}
      <div className={styles.pizzas_btns}>
        <Link to="/adminPage">
          <Button name="Вернуться назад" />
        </Link>
        <Button onClick={delPizza} name="Удалить" />
      </div>
    </div>
  );
}
