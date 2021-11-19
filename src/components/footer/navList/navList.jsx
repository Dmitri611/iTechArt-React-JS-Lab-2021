import React from 'react';
import styles from './navList.module.scss';


export default function NavList () {
    return (
        <ul className={styles.footer__content__list}>
            <li>
              <a className={styles.footer_cont_l_item} href="1">
                О Нас
              </a>
            </li>
            <li>
              <a className={styles.footer_cont_l_item} href="2">
                Оставить отзыв
              </a>
            </li>
            <li>
              <a className={styles.footer_cont_l_item} href="3">
                Работа у нас
              </a>
            </li>
            <li>
              <a className={styles.footer_cont_l_item} href="4">
                Акции
              </a>
            </li>
            <li>
              <a className={styles.footer_cont_l_item} href="5">
                Контакты
              </a>
            </li>
          </ul>
    );
}