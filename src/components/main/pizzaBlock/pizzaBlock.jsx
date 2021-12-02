import React from "react";
import styles from "./pizzaBlock.module.scss";
import Pizza from "../pizza/pizza.jsx";

export default function PizzaBlock() {
  return (
    <div className={styles.content__items}>
      <Pizza
        image="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
        name="Новая пицца"
        ingredients="Тесто, Мясо, Соус, Сыр"
        price="10.99"
        amount="2"
      ></Pizza>
      <Pizza
        image="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
        name="Новая пицца"
        ingredients="Тесто, Мясо, Соус, Сыр"
        price="10.99"
        amount="2"
      ></Pizza>
      <Pizza
        image="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
        name="Новая пицца"
        ingredients="Тесто, Мясо, Соус, Сыр"
        price="10.99"
        amount="2"
      ></Pizza>
      <Pizza
        image="https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg"
        name="Новая пицца"
        ingredients="Тесто, Мясо, Соус, Сыр"
        price="10.99"
        amount="2"
      ></Pizza>
    </div>
  );
}
