import React from "react";
import styles from "./button.module.scss";
import PropTypes from 'prop-types';

Button.propTypes = {
  name: PropTypes.string
}

export default function Button(props) {
  return (
    <button className={styles.button}>
      <span className={styles.button_font}>{props.name}</span>
    </button>
  );
}
