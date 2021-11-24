import React from "react";
import styles from "./login.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames";
import Button from '../../header/button/button.jsx'

export default function Login() {
  return (
    <div className={styles.form}>
      <div className={styles.form__top}>
        <div className={styles.form__heading}>
          <h2 className="header__logo_font">Вход на сайт</h2>
        </div>
        <div className={styles.btn_form_close}>
          <CloseIcon className={styles.icon} fontSize="large"></CloseIcon>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.desc}>
          Подарим подарок на день рождения, сохраним адрес доставки и расскажем
          об акциях
        </p>
      </div>
      <div className={styles.phone}>
        <p className={styles.phone_p}>Введите номер телефона</p>
        <div className={styles.phone_input}>
          <input
            className={classNames(
              styles.add_photo_input_text,
              styles.header__logo_description_font
            )}
            type="text"
            size="30"
          />
        </div>
      </div>
      <div className={styles.button}>
        <Button name="Выслать код"></Button>
      </div>
    </div>
  );
}
