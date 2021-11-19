import React from 'react';
import styles from './categories.module.scss';

export default function Categories () {
    return (
        <div className={styles.categories}>
                <ul className={styles.categories_list}>
                  <li className={styles.list_item_active}>
                    <span className={styles.list_item_font}>Все</span>
                  </li>
                  <li className={styles.categories_list_item}>
                    <span className={styles.list_item_font}>Мясные</span>
                  </li>
                  <li className={styles.categories_list_item}>
                    <span className={styles.list_item_font}>Вегетарианская</span>
                  </li>
                  <li className={styles.categories_list_item}>
                    <span className={styles.list_item_font}>Гриль</span>
                  </li>
                  <li className={styles.categories_list_item}>
                    <span className={styles.list_item_font}>Острые</span>
                  </li>
                  <li className={styles.categories_list_item}>
                    <span className={styles.list_item_font}>Закрытые</span>
                  </li>
                </ul>
              </div>
    );
}