import React from "react";
import { Link } from "react-router-dom";
import Button from "../header/button/button";

export default function pageNotFound() {
  const styles = {
    div: {
      height: "100%",
      minHeight: "699px",
      display: "flex",
      margin: "0 auto",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    buttonDiv: {
      paddingTop: "70px",
    },
    h: {
      fontSize: "40px",
    },
  };

  return (
    <div style={styles.div}>
      <h2 style={styles.h}>Page not found</h2>
      <div style={styles.buttonDiv}>
        <Link to="/">
          <Button name="На главную" />
        </Link>
      </div>
    </div>
  );
}
