import React from 'react';
import styles from './button.module.scss';

export default function Button () {
    return (
        <div className={styles.block_buttons_add_pizza}>
            <button className={styles.button}>
              <span className={styles.button_font}>Добавить пиццу</span>
            </button>
          </div>
    );
}