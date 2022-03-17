import React from 'react';
import styles from './timer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Timer = (props) => {
    return(
        <div className={styles.timerWrap}>
            <nav className={styles.nav}>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Focus</span>
                    <span className={styles.navDesc}>1 hr 0 min</span>
                </div>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Break</span>
                    <span className={styles.navDesc}>0 hr 10 min</span>
                </div>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Cylces</span>
                    <span className={styles.navDesc}>3</span>
                </div>
                <div className={styles.navdetail}>
                <FontAwesomeIcon className={styles.setting} icon="fa-solid fa-gear" />
                </div>
            </nav>
        </div>
    );
};

export default Timer;