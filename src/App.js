import React from "react";
import Content from "./components/main/content.jsx";
import Layout from "./components/Layout/layout.jsx";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket.jsx";
import Login from "./components/authorization/login/login.jsx";
import Registration from "./components/authorization/registration/registration.jsx";
import AdminPage from "./components/admin/adminPage/adminPage.jsx";
import NewPizzaPage from "./components/admin/newPizzaPage/newPizzaPage";
import RemovePizzaPage from "./components/admin/removePizza/removePizzaPage";
import EditPizzaPage from "./components/admin/editPizzaPage/editPizzaPage.jsx";
import User from "./components/user/user.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Content />} />
        <Route exact path="/basket" element={<Basket />} />
        <Route exact path="/adminPage" element={<AdminPage />} />
        <Route exact path="/adminPage/addPizza" element={<NewPizzaPage />} />
        <Route
          exact
          path="/adminPage/removePizza"
          element={<RemovePizzaPage />}
        />
        <Route exact path="/adminPage/editPizza" element={<EditPizzaPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/profile" element={<User />} />
      </Routes>
    </Layout>
  );
}
