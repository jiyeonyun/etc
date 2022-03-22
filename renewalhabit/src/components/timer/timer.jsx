import React from 'react';
import styles from './timer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from 'react';

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const Timer = (props) => {
    const onClickPlay = ()=>{
        props.setPlay(false);
        props.setPlayBtn(!props.playBtn);
    }
    const onClickPause = ()=>{
        props.setPlay(!props.play);
        props.setPlayBtn(!props.playBtn);
    }
    const onClickPopup = ()=>{
        props.setPopup(!props.popup);
    }
    const resetClick= ()=>{
        window.location.reload();
    }

    return(
    <div className={styles.timerWrap}>
        <nav className={styles.nav}>
            <div className={styles.navdetail}>
                <span className={styles.navBtn}>Focus</span>
                <span className={styles.navDesc}>{`${props.focusHr?props.focusHr:0} hr ${props.focusMin?props.focusMin:0} min`}</span>
            </div>
            <div className={styles.navdetail}>
                <span className={styles.navBtn}>Break</span>
                <span className={styles.navDesc}>{`${props.BreakHr?props.BreakHr:0} hr ${props.BreakMin?props.BreakMin:0} min`}</span>
            </div>
            <div className={styles.navdetail}>
                <span className={styles.navBtn}>Cycles</span>
                <span className={styles.navDesc}>{`${props.cylceTime?props.cylceTime:0}`}</span>
            </div>
            <div className={styles.navdetail}>
            <FontAwesomeIcon className={styles.setting} onClick={onClickPopup} icon="fa-solid fa-gear" />
            </div>
        </nav>
        <div className={styles.timer}>
            <nav className={styles.timerNav}>
                <span className={`${props.focus?styles.timerBtnF:styles.timerBtn}`}>Focus</span>
                <span className={styles.timerTimes}><FontAwesomeIcon className={styles.logo}icon="fa-solid fa-bicycle" />{`${props.cylce} / ${props.cylceTime?props.cylceTime:0}`}</span>
                <span className={`${!props.focus?styles.timerBtnF:styles.timerBtn}`}>Break</span>
                <FontAwesomeIcon className={styles.reset} onClick={resetClick} icon="fa-solid fa-arrow-rotate-right" />
            </nav>
            <div className={styles.timerClock}>
                <h1 className={styles.timerClockNum}>{padNumber(props.hour,2)}:{padNumber(props.min,2)}:{padNumber(props.sec,2)}</h1>
                <div className={styles.PlayBtn}>
                    <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-backward" /></div>
                    <div className={styles.Play}>{props.playBtn ? <FontAwesomeIcon onClick={onClickPlay} icon="fa-solid fa-play" /> : <FontAwesomeIcon onClick={onClickPause} icon="fa-solid fa-pause" />}</div>
                    <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-forward" /></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Timer;