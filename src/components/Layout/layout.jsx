import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import styles from './index.module.scss'


export default function Layout ({ children }) {
    return (
        <div className={styles.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}