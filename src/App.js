import React from "react";
import Content from "./components/main/content.jsx";
import Form from "./components/forms/addNewPizza/form.jsx";
import Login from "./components/forms/login/login.jsx";
import Layout from "./components/Layout/layout.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Content></Content>
      </Layout>
      {/* <Form></Form>
      <Login></Login> */}
    </div>
  );
}
