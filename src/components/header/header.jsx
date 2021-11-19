import React from 'react';
import styles from './header.module.scss';
import Logo from './logo/logo.jsx';
import Search from './search/search.jsx';
import Button from './buttonAddPizza/button.jsx';
import ButtonAuth from './buttonAuthorization/buttonAuth.jsx';


export default function Header () {
    return (
        <div className={styles.header}>
        <div className={styles.container}>
          <Logo></Logo>
          <Search></Search>
          <Button></Button>
          <div className={styles.block_buttons}>
            <div className={styles.button_content}>
              <button className={styles.button}>
                <span className={styles.button_font}>Корзина</span>
              </button>
            </div>
            <ButtonAuth></ButtonAuth>
          </div>
        </div>
      </div>
    );
}