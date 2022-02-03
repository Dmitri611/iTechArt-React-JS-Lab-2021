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
import PageNotFound from "./components/pageNotFound/pageNotFound.jsx";
import { useSelector } from "react-redux";
import { authUserSelector } from "./store/selectors/authSelectors.js";

export default function App() {
  const selector = useSelector(authUserSelector);
  console.log(selector.authorized);
  if (selector?.authorized) {
    return (
      <>
        <Layout>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/adminPage" element={<AdminPage />} />
            <Route path="/adminPage/addPizza" element={<NewPizzaPage />} />
            <Route
              path="/adminPage/removePizza"
              element={<RemovePizzaPage />}
            />
            <Route path="/adminPage/editPizza" element={<EditPizzaPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<User />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </>
    );
  } else if (selector?.authorized === undefined) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/adminPage/addPizza" element={<NewPizzaPage />} />
          <Route path="/adminPage/removePizza" element={<RemovePizzaPage />} />
          <Route path="/adminPage/editPizza" element={<EditPizzaPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    );
  }
}
