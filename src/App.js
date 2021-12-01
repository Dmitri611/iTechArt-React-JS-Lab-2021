import React from "react";
import Content from "./components/main/content.jsx";
import Form from "./components/forms/addNewPizza/form.jsx";
import Login from "./components/forms/login/login.jsx";
import Layout from "./components/Layout/layout.jsx";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket.jsx";
import BasketUser from "./components/basket/basketUser/basketUser.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/basketUser" element={<BasketUser />} />
      </Routes>
    </Layout>
  );
}
