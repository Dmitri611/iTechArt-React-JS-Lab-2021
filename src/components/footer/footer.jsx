import React from "react";
import styles from "./footer.module.scss";
import Logo from "./logo/logo.jsx";
import NavList from "./navList/navList";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <Link to="/">
          <Logo />
        </Link>
        <NavList />
      </div>
    </div>
  );
}
