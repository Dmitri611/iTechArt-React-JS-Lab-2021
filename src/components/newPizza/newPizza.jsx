import React, { useState } from "react";
import styles from "./newPizza.module.scss";
import Block from "./block/block.jsx";
import Button from "../header/button/button.jsx";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pizza from "../main/pizza/pizza";

export default function useNewPizza() {
  const dispatch = useDispatch();

  const [image, setImage] = useState('');

  const handleImage = (e) => {
    setImage(e.target.value)
    }
  
  const [name, setName] = useState('');

  const handleName = (e) => {
    setName(e.target.value)
  }

  const [price, setPrice] = useState('');

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const [ing, setIng] = useState('');

  const handleIng = (e) => {
    setIng(e.target.value)
  }

  const newPizza = {
    image: image,
    name: name,
    ingredients: ing,
    price: price,
    amount: 2,
  };

  const addPizza = () => {
    dispatch({ type: "ADD_PIZZA", newItem: newPizza });
    return <Pizza {...newPizza} />;
  };

  return (
    <div className={styles.content}>
      <h2 className={styles.content_font}>Добавить пиццу</h2>
      <div className={styles.content_wrapper}>
        <Block value={image} onChange={handleImage} name="Фото" label="Введите URL ссылку на картинку" />
        <Block name="Категория" label="Введите категорию" />
        <Block value={name} onChange={handleName} name="Название" label="Введите название" />
        <Block value={price} onChange={handlePrice} name="Цена" label="Введите цену" />
        <Block value={ing} onChange={handleIng} name="Ингредиенты" label="Введите ингредиенты" />
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
