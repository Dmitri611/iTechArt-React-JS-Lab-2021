import React from 'react';
import styles from './sort.module.scss';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

export default function Sort () {
    return (
        <div className={styles.sort}>
                <div className={styles.sort_items}>
                  <ArrowDropUpIcon></ArrowDropUpIcon>
                  <div className={styles.sort_items_padd}>
                    <span className={styles.sort_item_b_font}> Сортировка по: </span>
                  </div>
                  <div className={styles.sort_items_padd}>
                    <span className={styles.sort_item_b_active_font}>
                      популярности
                    </span>
                  </div>
                </div>
                {/* <div className="sort__popup">
                  <ul className="sort__popup_list">
                    <li className="sort__popup_list_item sort__popup_list_item_active">
                      популярности
                    </li>
                    <li className="sort__popup_list_item">цене</li>
                    <li className="sort__popup_list_item">алфавиту</li>
                  </ul>
                </div> */}
              </div>
    );
}