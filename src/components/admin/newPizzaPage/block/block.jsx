import React from "react";
import styles from "./block.module.scss";
import { TextField, Tooltip } from "@mui/material";
import PropTypes from "prop-types";

Block.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
  help: PropTypes.string,
  type: PropTypes.string
};

export default function Block(props) {
  return (
    <div className={styles.block}>
      <h2 className={styles.block_font}>{props.name}</h2>
      <Tooltip placement="top-start" title="Обязательное поле">
        <TextField
          name={props.name}
          label={props.label}
          variant="filled"
          size="Normal"
          color="warning"
          value={props.value}
          onChange={props.onChange}
          type={props.type}
        />
      </Tooltip>
      <p className={styles.block_font_p}>{props.help}</p>
    </div>
  );
}
