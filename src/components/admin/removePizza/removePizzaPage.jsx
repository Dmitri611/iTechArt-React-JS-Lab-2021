import React, {useState} from "react";
import styles from "./removePizzaPage.module.scss";
import { useDispatch } from "react-redux";
import Button from "../../header/button/button";
import { delPizzaAction } from "../../../store/actions/pizzaActions";
import { Link } from "react-router-dom";
import AllPizzas from "../common/allPizzas/allPizzas";

export default function ShowPizzas() {
  const dispatch = useDispatch();
  const [pizzaValue, setPizzaValue] = useState({
    value: "",
  })


  const thisPizza = (e) => {
    setPizzaValue({
      value: e.currentTarget.value
    })
    console.log(e.currentTarget.value);
  };

  const delPizza = () => {
    if (pizzaValue.value) {
      alert(`Пицца ${pizzaValue.value} успешно удалена!`);
      dispatch(delPizzaAction(pizzaValue.value));
    } else {
      alert("Пицца не выбрана!");
    }
  };

  return (
    <div className={styles.pizzas}>
    <AllPizzas onClick={thisPizza} heading="Выберите пицц, которую хотите удалить" />
      <div className={styles.pizzas_btns}>
        <Link to="/adminPage">
          <Button name="Вернуться назад" />
        </Link>
        <Button onClick={delPizza} name="Удалить" />
      </div>
    </div>
  );
}
