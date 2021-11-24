import React from 'react';
import styles from './header.module.scss';
import Logo from './logo/logo.jsx';
import Search from './search/search.jsx';
import Button from './button/button.jsx';
import ButtonAuth from './buttonAuthorization/buttonAuth.jsx';


export default function Header () {
    return (
        <div className={styles.header}>
        <div className={styles.container}>
          <Logo></Logo>
          <Search></Search>
          <Button name='Добавить пиццу'></Button>
          <div className={styles.block_buttons}>
            <Button name='Корзина'></Button>
            {/* <ButtonAuth></ButtonAuth> */}
            <Button name="Войти"></Button>
          </div>
        </div>
      </div>
    );
}