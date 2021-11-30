import React from "react";
import Content from "./components/main/content.jsx";
import Form from "./components/forms/addNewPizza/form.jsx";
import Login from "./components/forms/login/login.jsx";
import Layout from "./components/Layout/layout.jsx";
import { Routes, Route } from "react-router-dom";
import Basket from "./components/basket/basket.jsx";

export default function App() {
  return (
    <div className="wrapper">
      {/* <Layout>
        <Content></Content>
      </Layout> */}
      <Routes>
        <Route exact path="/" element={<Layout children={<Content />} />} />
        <Route
          exact
          path="/basket"
          element={<Layout children={<Basket />} />}
        />
      </Routes>
    </div>
  );
}
