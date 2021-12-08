import React from "react";
import Content from "./components/main/content.jsx";
import Layout from "./components/Layout/layout.jsx";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket.jsx";
import NewPizza from "./components/newPizza/newPizza.jsx";
import Login from "./components/authorization/login/login.jsx";
import Registration from "./components/authorization/registration/registration.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/newPizza" element={<NewPizza />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Layout>
  );
}
