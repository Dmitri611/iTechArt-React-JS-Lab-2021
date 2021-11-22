import React from "react";
import Header from "./components/header/header.jsx";
import Content from "./components/main/content.jsx";
import Footer from "./components/footer/footer.jsx";
import Form from "./components/form/form.jsx";

export default function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      {/* <Form></Form> */}
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}
