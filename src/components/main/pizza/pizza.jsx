import React from "react";
import styles from "./pizza.module.scss";
import classNames from "classnames";

/* eslint-disable react/prop-types */
export default function Pizza(props) {
  return (
    <div className={styles.pizza}>
      <div className={styles.pizza_image}>
        <img src={props.image} alt="Pizza" />
      </div>
      <div className={styles.pizza_name}>
        <h4 className={styles.pizza_name_font}>{props.name}</h4>
      </div>
      <div className={styles.pizza_ingredients}>
        <p className={styles.pizza_list_item_font}>{props.ingredients}</p>
      </div>
      <div className={styles.pizza_content}>
        <ul className={styles.pizza_list}>
          <li
            className={classNames(
              styles.pizza_list_item,
              styles.pizza_list_item_active
            )}
          >
            <span className={styles.pizza_list_item_font}>тонкое</span>
          </li>
          <li className={styles.pizza_list_item}>
            <span className={styles.pizza_list_item_font}>традиционное</span>
          </li>
        </ul>
        <ul className={styles.pizza_list2}>
          <li
            className={classNames(
              styles.pizza_list_item,
              styles.pizza_list_item_active
            )}
          >
            <span className={styles.pizza_list_item_font}>26</span>
          </li>
          <li className={styles.pizza_list_item}>
            <span className={styles.pizza_list_item_font}>30</span>
          </li>
          <li className={styles.pizza_list_item}>
            <span className={styles.pizza_list_item_font}>36</span>
          </li>
        </ul>
      </div>
      <div className={styles.pizza_bottom}>
        <div className={styles.pizza_price}>
          <span className={styles.pizza_price_font}> от {props.price}р </span>
        </div>
        <div className={styles.pizza_bottom_btn}>
          <div className={styles.button_add}>
            <div className={styles.button_add_plus} />
            <div className={styles.button_add_span}>
              <span className={styles.button_add_span_font}>Добавить</span>
            </div>
            <div className={styles.button_add_i}>
              <i className={styles.button_add_i_font}>{props.amount}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
