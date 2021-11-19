import React from 'react';
import Categories from './categories/categories.jsx';
import Sort from './sort/sort.jsx';
import styles from './main.module.scss';

export default function Main () {
    return (
        <div>
        <div className={styles.content}>
          <div className={styles.content__container}>
            <div className={styles.container__top}>
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <div className={styles.content__title}>
              <h2 className={styles.content__title_h2_font}>Все пиццы</h2>
              <div className={styles.content__items}>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}