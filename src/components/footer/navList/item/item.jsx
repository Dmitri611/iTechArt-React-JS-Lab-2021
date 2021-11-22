import React from 'react';
import styles from './item.module.scss';

export default function Item (props) {
    return (
        <li>
              <a className={styles.footer_cont_l_item} href="1">
                {props.name}
              </a>
            </li>
    );
}