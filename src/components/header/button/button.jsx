import React from 'react';
import styles from './button.module.scss';
import { Link } from "react-router-dom";

export default function Button (props) {
    return (
        <Link to={props?.to}>
          <div className={styles.block_buttons_add_pizza}>
              <button className={styles.button}>
                <span className={styles.button_font}>{props.name}</span>
              </button>
            </div>
        </Link>
    );
}