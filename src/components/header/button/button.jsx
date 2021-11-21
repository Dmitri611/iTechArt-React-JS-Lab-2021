import React from 'react';
import styles from './button.module.scss';

export default function Button (props) {
    return (
        <div className={styles.block_buttons_add_pizza}>
            <button className={styles.button}>
              <span className={styles.button_font}>{props.name}</span>
            </button>
          </div>
    );
}