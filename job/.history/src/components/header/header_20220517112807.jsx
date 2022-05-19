import React from 'react';
import styles from './header.module.css';
const Header = (props) => {

    return(
        <header>
            <h1 className={styles.headerTitle}>이력서</h1>
        </header>  
    );
    };

export default Header;