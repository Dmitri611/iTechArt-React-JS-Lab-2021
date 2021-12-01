import React from 'react';
import styles from './navList.module.scss';
import Item from './item/item.jsx';


export default function NavList () {
    return (
        <ul className={styles.footer__content__list}>
            <Item href="aboutUs" name='О нас'></Item>
            <Item href="feedback" name='Оставить отзыв'></Item>
            <Item href="job" name='Работа у нас'></Item>
            <Item href="stock" name='Акции'></Item>
            <Item href="contacts" name='Контакты'></Item>
          </ul>
    );
}