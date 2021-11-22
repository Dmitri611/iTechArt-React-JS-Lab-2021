import React from 'react';
import styles from './item.module.scss';

export default function Item (props) {
    let array = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    
    let category = array.map(function(item){
        return (
            <li key={item} className={styles.categories_list_item}>
                <span className={styles.list_item_font}>{item}</span>
            </li>
        );
    });
    
    return category;
}