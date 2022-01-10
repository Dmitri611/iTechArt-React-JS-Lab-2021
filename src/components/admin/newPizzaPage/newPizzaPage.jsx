import React, { useState } from "react";
import styles from "./newPizzaPage.module.scss";
import Button from "../../header/button/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPizzaAction } from "../../../store/actions/pizzaActions";
import Block from "./block/block";
import AllPizzas from "../common/allPizzas/allPizzas.jsx";

export default function NewPizza() {
  const dispatch = useDispatch();

  const [newPizza, setNewPizza] = useState({
    name: "",
    image: "",
    price: "",
    ingredients: "",
    amount: 0,
  });

  const handleChange = (e) => {
    setNewPizza({
      ...newPizza,
      [e.target.name]: e.target.value,
    });
  };

  const addPizza = () => {
    dispatch(addPizzaAction(newPizza));
  };

  return (
    <div className={styles.content}>
      <AllPizzas heading="Все пиццы" />
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_font}>Добавить пиццу</h2>
        <Block
          value={newPizza.image}
          onChange={handleChange}
          name="image"
          label="URL ссылка"
          help="Введите URL ссылку на картинку!"
        />
        <Block name="category" label="категория" help="Введите категорию!" />
        <Block
          value={newPizza.name}
          onChange={handleChange}
          name="name"
          label="Название пиццы"
          help="Введите название пиццы!"
        />
        <Block
          value={newPizza.price}
          onChange={handleChange}
          name="price"
          label="Цена"
          help="Введите цену пиццы!"
        />
        <Block
          value={newPizza.ingredients}
          onChange={handleChange}
          name="ingredients"
          label="Ингредиенты"
          help="Введите ингредиенты для пиццы!"
        />
        <div className={styles.content_btns}>
          <Link to="/adminPage">
            <Button name="Вернуться назад" />
          </Link>
          <Button onClick={addPizza} name="Добавить пиццу" />
        </div>
      </div>
    </div>
  );
}
