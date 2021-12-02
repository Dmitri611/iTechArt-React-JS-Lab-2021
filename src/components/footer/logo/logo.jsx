import React from 'react'
import styles from './logo.module.scss'
import logo from '../../../assets/img/svg/544pizza2_100268.svg'

export default function Logo() {
  return (
    <div className={styles.footer__logo}>
      <img
        className={styles.footer__logo_img}
        width="38"
        src={logo}
        alt="Pizza logo"
      />
      <h2 className={styles.footer__logo_font}>Pizza LAB</h2>
    </div>
  )
}
