import React from "react";
import styles from "./newPizza.module.scss";
import Block from "./block/block.jsx";
import Button from "../header/button/button.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pizza from "../main/pizza/pizza";

export default function useNewPizza() {
  const dispatch = useDispatch();
  
  const newPizza = {
    image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Reducer пицца",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: 20.29,
      amount: 2,
  }

  const addPizza = () => {
    dispatch({type: "ADD_PIZZA", newItem: newPizza});
    return <Pizza {...newPizza}/>;
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Добавить пиццу</h2>
      <div className={styles.content_wrapper}>
        <Block name="Фото" label="Введите URL ссылку на картинку" />
        <Block name="Категория" label="Введите категорию" />
        <Block name="Название" label="Введите название" />
        <Block name="Цена" label="Введите цену" />
        <Block name="Ингредиенты" label="Введите ингредиенты" />
      </div>
      <div className={styles.content_btns}>
        <Link to="/">
          <Button name="Вернуться назад" />
        </Link>
        <Button onClick={() => addPizza()} name="Добавить пиццу" />
      </div>
    </div>
  );
}
