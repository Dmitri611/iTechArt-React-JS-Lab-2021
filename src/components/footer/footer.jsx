import React from 'react';
import styles from './footer.module.scss';
import Logo from './logo/logo.jsx';
import NavList from './navList/navList';


export default function Footer () {
    return (
        <div className={styles.footer}>
        <div className={styles.footer__content}>
          <Logo></Logo>
          <NavList></NavList>
        </div>
      </div>
    );
}