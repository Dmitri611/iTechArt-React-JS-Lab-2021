import React from "react";
import Content from "./components/main/content.jsx";
import Form from "./components/form/form.jsx";
import Layout from "./components/Layout/layout.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Content></Content>
      </Layout>
      {/* <Form></Form> */}
    </div>
  );
}
