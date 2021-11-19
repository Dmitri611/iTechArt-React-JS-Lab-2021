import React from 'react';
import styles from './footer.module.scss';
import logo from '../../assets/img/svg/544pizza2_100268.svg';

export default function Footer () {
    return (
        <div className={styles.footer}>
        <div className={styles.footer__content}>
          <div className={styles.footer__logo}>
            <img
              className={styles.footer__logo_img}
              width="38"
              src={logo}
              alt="Pizza logo"
            />
            <h2 className={styles.footer__logo_font}>Pizza LAB</h2>
          </div>
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
        </div>
      </div>
    );
}