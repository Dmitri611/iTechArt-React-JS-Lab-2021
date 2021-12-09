import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import styles from "./index.module.scss";
import PropTypes from "prop-types";

Layout.propTypes = {
  children: PropTypes.element,
};

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
