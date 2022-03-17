import React from 'react';
import styles from './timer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

const Timer = (props) => {
        const [play,setPlay] = useState(true);

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
            <div className={styles.timer}>
                <nav className={styles.timerNav}>
                    <span className={styles.timerBtn}>Focus</span>
                    <span className={styles.timerTimes}><FontAwesomeIcon className={styles.logo}icon="fa-solid fa-bicycle" />1 / 3</span>
                    <span className={styles.timerBtn}>Break</span>
                </nav>
                <div className={styles.timerClock}>
                    <h1 className={styles.timerClockNum}>00 : 00 : 00 </h1>
                    <div className={styles.PlayBtn}>
                        <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-backward" /></div>
                        <div className={styles.Play}>{play ? <FontAwesomeIcon icon="fa-solid fa-play" /> : <FontAwesomeIcon icon="fa-solid fa-pause" />}</div>
                        <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-forward" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timer;