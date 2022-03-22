import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = ({popup}) => {

    return(
        <header className={`${popup?styles.headerPopup:styles.header}`}>
            <div className={styles.headerWrap}>
            <FontAwesomeIcon className={styles.logo} icon="fa-solid fa-bicycle" />
            <h1 className={styles.title}>Tracker Cycle</h1>
            </div>
        </header>
    );
};

export default Header;