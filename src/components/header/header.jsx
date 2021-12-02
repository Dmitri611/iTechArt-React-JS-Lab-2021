import React from 'react';
import styles from './header.module.scss';
import Logo from './logo/logo.jsx';
import Search from './search/search.jsx';
import Button from './button/button.jsx';
import {Link} from "react-router-dom";
import Login from "../forms/login/login.jsx";




export default function Header () {
    return (
        <div className={styles.header}>
        <div className={styles.header_container}>
          <Link to="/">
          <Logo />
          </Link>
          <Search />
          <Button name='Добавить пиццу' />
          <div className={styles.header_buttons}>
            <Link to="/basket">
            <Button name='Корзина' />
            </Link>
            <Link to="/basketUser">
              <Button name="Корзина2" />
            </Link>
            <Login />
          </div>
        </div>
      </div>
    );
}