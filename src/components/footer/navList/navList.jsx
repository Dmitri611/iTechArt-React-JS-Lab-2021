import React from 'react';
import styles from './navList.module.scss';
import Item from './item/item.jsx';


export default function NavList () {
    return (
        <ul className={styles.footer__content__list}>
            <Item name='О нас'></Item>
            <Item name='Оставить отзыв'></Item>
            <Item name='Работа у нас'></Item>
            <Item name='Акции'></Item>
            <Item name='Контакты'></Item>
          </ul>
    );
}