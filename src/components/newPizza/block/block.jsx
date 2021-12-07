import React from "react";
import styles from "./block.module.scss";
import { TextField, Tooltip } from "@mui/material";
import PropTypes from 'prop-types';

Block.propTypes ={
  name: PropTypes.string,
  label: PropTypes.string
}

export default function Block(props) {
  return (
    <div className={styles.block}>
      <h2 className={styles.block_font}>{props.name}</h2>
      <Tooltip placement="top-start" title="Обязательное поле">
        <TextField
          id="filles-basic"
          label={props.label}
          variant="filled"
          size="Normal"
          fullWidth="true"
          color="warning"
          required="true"
        />
      </Tooltip>
    </div>
  );
}
