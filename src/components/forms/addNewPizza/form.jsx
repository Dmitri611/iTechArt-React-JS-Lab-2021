import { style } from "@mui/system";
import classNames from "classnames";
import React from "react";
import styles from "../addNewPizza/form.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../header/button/button.jsx";

export default function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.form__top}>
        <div className={styles.form__heading}>
          <h2 className="header__logo_font">Добавить пиццу</h2>
        </div>
        <div className={styles.btn_form_close}>
          <CloseIcon className={styles.icon} fontSize="large"></CloseIcon>
        </div>
      </div>
      <div className={styles.form__wrapper}>
        <div className={styles.form__content}>
          <div className={styles.add_photo}>
            <h2 className={styles.header__logo_description_font}>
              Добавить фото
            </h2>
            <div className={styles.add_photo__bottom}>
              <div className={styles.add_photo__bottom_label}>
                <label name="url" className={styles.list_item_font} for="">
                  Вставьте URL ссылку картинки
                </label>
              </div>
              <div className={styles.add_photo__bottom_input}>
                <input
                  className={classNames(
                    styles.add_photo_input_text,
                    styles.header__logo_description_font
                  )}
                  type="text"
                  size="40"
                />
              </div>
            </div>
          </div>
          <div className={styles.add_categories}>
            <h2 className={styles.header__logo_description_font}>
              Добавить категорию
            </h2>
            <div className={styles.add_categories__bottom}>
              <div className={styles.add_categories__bottom_label}>
                <label className={styles.list_item_font} for="">
                  Введите название категории
                </label>
              </div>
              <div className={styles.add_categories__bottom_input}>
                <input
                  className={classNames(
                    styles.add_categories_input_text,
                    styles.header__logo_description_font
                  )}
                  type="text"
                  size="40"
                />
              </div>
            </div>
          </div>
          <div className={styles.add_name_pizza}>
            <h2 className={styles.header__logo_description_font}>
              Добавить название пиццы
            </h2>
            <div className={styles.add_name_pizza__bottom}>
              <div className={styles.add_name_pizza__bottom_label}>
                <label className={styles.list_item_font} for="">
                  Введите название пиццы
                </label>
              </div>
              <div className={styles.add_name_pizza__bottom_input}>
                <input
                  className={classNames(
                    styles.add_name_pizza_input_text,
                    styles.header__logo_description_font
                  )}
                  type="text"
                  size="40"
                />
              </div>
            </div>
          </div>
          <div className={styles.add_price}>
            <h2 className={styles.header__logo_description_font}>
              Добавить цену пиццы
            </h2>
            <div className={styles.add_price__bottom}>
              <div className={styles.add_price__bottom_label}>
                <label className={styles.list_item_font} for="">
                  Введите цену пиццы
                </label>
              </div>
              <div className={styles.add_price__bottom_input}>
                <input
                  className={classNames(
                    styles.add_price_input_text,
                    styles.header__logo_description_font
                  )}
                  type="text"
                  size="5"
                />
                <div className={styles.add_price__bottom_input_span}>
                  <span className={styles.list_item_font}>р.</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ingredients}>
            <h2 className={styles.header__logo_description_font}>
              Добавить ингредиенты
            </h2>
            <div className={styles.ingredients__bottom}>
              <div className={styles.ingredients__bottom_label}>
                <label className={styles.list_item_font} for="">
                  Введите ингредиенты через запятую
                </label>
              </div>
              <div className={styles.ingredients__bottom_textarea}>
                <textarea
                  className={classNames(
                    styles.ingredients__bottom_textarea_item,
                    styles.header__logo_description_font
                  )}
                  name=""
                  id=""
                  cols="50"
                  rows="8"
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.btn_submit}>
            <Button name="Добавить пиццу"></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
