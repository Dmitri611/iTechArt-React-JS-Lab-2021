import React, { useState } from "react";
import Content from "./components/main/content.jsx";
import Layout from "./components/Layout/layout.jsx";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket.jsx";
import NewPizza from "./components/newPizza/newPizza.jsx";
import Login from "./components/authorization/login/login.jsx";
import Registration from "./components/authorization/registration/registration.jsx";

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [pizzas, setPizzas] = useState([
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца1",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: "10.99",
      amount: "2",
    },
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца2",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: "10.99",
      amount: "2",
    },
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/c54928acb21147578a4d8a704cadea11_292x292.jpeg",
      name: "Новая пицца3",
      ingredients: "Тесто, Мясо, Соус, Сыр",
      price: "10.99",
      amount: "2",
    },
  ]);

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Content pizzas={pizzas} />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/newPizza" element={<NewPizza />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Layout>
  );
}
