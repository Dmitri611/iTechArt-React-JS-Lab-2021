import React from 'react';
import Categories from './categories/categories.jsx';
import Sort from './sort/sort.jsx';
import styles from './content.module.scss';
import PizzaBlock from './pizzaBlock/pizzaBlock.jsx';
import Basket from '../basket/basket.jsx';

export default function Content () {
    return (
        <div className={styles.content}>
            <div className={styles.container__top}>
              {/* <Basket></Basket> */}
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <div className={styles.content__title}>
              <h2 className={styles.content__title_h2_font}>Все пиццы</h2>
              <PizzaBlock></PizzaBlock>
            </div>
          </div>
    );
}