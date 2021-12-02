import React from 'react';
import styles from './navList.module.scss';
import Item from './item/item.jsx';


export default function NavList () {
    return (
        <ul className={styles.footer__content__list}>
            <Item href="aboutUs" name='О нас' />
            <Item href="feedback" name='Оставить отзыв' />
            <Item href="job" name='Работа у нас' />
            <Item href="stock" name='Акции' />
            <Item href="contacts" name='Контакты' />
          </ul>
    );
}