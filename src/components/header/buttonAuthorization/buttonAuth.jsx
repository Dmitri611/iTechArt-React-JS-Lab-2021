import React from 'react'
import styles from './buttonAuth.module.scss'
import { ButtonGroup, Button } from '@mui/material'

export default function ButtonAuth() {
  return (
    <div className={styles.block_buttons_authorization}>
      <ButtonGroup disableElevation variant="contained">
        <Button className={styles.button_log_in}>
          <span className={styles.button_font}>Войти</span>
        </Button>
        <div className={styles.button__delimiter}></div>
        <Button className={styles.button_reg}>
          <span className={styles.button_font}>Регистрация</span>
        </Button>
      </ButtonGroup>
    </div>
  )
}
