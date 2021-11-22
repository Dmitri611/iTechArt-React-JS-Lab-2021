import React from 'react';
import styles from './pizza.module.scss';
import classNames from 'classnames';

export default function Pizza(props) {
    return (
        <div className={styles.pizza__block}>
      <div className={styles.pizza__block_image}>
        <img src={props.image} alt="Pizza"/>
      </div>
      <div className={styles.pizza__block_heading}>
        <h4 className={styles.pizza__block_heading_font}>{props.name}</h4>
      </div>
      <div className={styles.pizza__block__ingredients}>
      <p className={styles.pizza__block_list_item_font}>{props.ingredients}</p>
      </div>
      <div className={styles.pizza__block__content}>
        <ul className={styles.pizza__block_list}>
          <li className={classNames(styles.pizza__block_list_item, styles.pizza__block_list_item_active)}>
            <span className={styles.pizza__block_list_item_font}>тонкое</span>
          </li>
          <li className={styles.pizza__block_list_item}>
            <span className={styles.pizza__block_list_item_font}>традиционное</span>
          </li>
        </ul>
        <ul className={styles.pizza__block_list2}>
          <li className={classNames(styles.pizza__block_list_item,  styles.pizza__block_list_item_active)}>
            <span className={styles.pizza__block_list_item_font}>26</span>
          </li>
          <li
            className={styles.pizza__block_list_item}>
            <span className={styles.pizza__block_list_item_font}>30</span>
          </li>
          <li className={styles.pizza__block_list_item}>
            <span className={styles.pizza__block_list_item_font}>36</span>
          </li>
        </ul>
      </div>
      <div className={styles.pizza__block__bottom}>
        <div className={styles.pizza__block_price}>
          <span className={styles.block__price_font}> от {props.price}р </span>
        </div>
        <div className={styles.pizza__block__bottom_btn}>
          <div className={styles.button__add}>
            <div className={styles.button__add_plus}></div>
            <div className={styles.button__add_span}>
              <span className={styles.button__add_span_font}>Добавить</span>
            </div>
            <div className={styles.button__add_i}>
              <i className={styles.button__add_i_font}>{props.amount}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}
