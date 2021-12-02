import React from 'react';
import styles from './item.module.scss';


export default function Item () {
    let array = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    
    let category = array.map(function(item){
        return (
            <li key={item} className={styles.item}>
                <span className={styles.item_font}>{item}</span>
            </li>
        );
    });
    
    return category;
}