import React, { useState } from "react";
import styles from "./newPizza.module.scss";
import Block from "./block/block.jsx";
import Button from "../header/button/button.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPizzaAction } from "../../store/actions/pizzaActions";
import ShowPizzas from "./showPizzas/showPizzas";

export default function useNewPizza() {
  const dispatch = useDispatch();

  const [newPizza, setNewPizza] = useState({
    image: "",
    name: "",
    price: 0,
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
      <ShowPizzas />
      <div className={styles.content_wrapper}>
        <h2 className={styles.content_font}>Добавить пиццу</h2>
        <Block
          value={newPizza.image}
          onChange={handleChange}
          name="image"
          label="Введите URL ссылку на картинку"
        />
        <Block name="category" label="Введите категорию" />
        <Block
          value={newPizza.name}
          onChange={handleChange}
          name="name"
          label="Введите название"
        />
        <Block
          value={newPizza.price}
          onChange={handleChange}
          name="price"
          label="Введите цену"
        />
        <Block
          value={newPizza.ingredients}
          onChange={handleChange}
          name="ingredients"
          label="Введите ингредиенты"
        />
        <div className={styles.content_btns}>
          <Link to="/">
            <Button name="Вернуться назад" />
          </Link>
          <Button onClick={addPizza} name="Добавить пиццу" />
        </div>
      </div>
    </div>
  );
}
