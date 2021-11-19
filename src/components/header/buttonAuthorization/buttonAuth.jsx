import React from 'react';
import styles from './buttonAuth.module.scss';

export default function ButtonAuth () {
    return (
        <div className={styles.block_buttons_authorization}>
              <div className={styles.button}>
                <div className={styles.button_content}>
                  <span className={styles.button_font}>Войти</span>
                  <div className={styles.button__delimiter}></div>
                  <span className={styles.button_font}>Регистрация</span>
                </div>
              </div>
            </div>
    );
}