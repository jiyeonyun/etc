import React from 'react';
import styles from './timer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from 'react';

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const TimerCopy = (props) => {
        const [play,setPlay] = useState(true);
        const [cylce,setCycle] = useState(0);
        const tempHour = props.hour ? parseInt(props.hour) : 0;
        const tempMin = props.min ? parseInt(props.min) : 0;
        const tempSec = props.sec ? parseInt(props.sec) : 0;
        // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
        const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
        const interval = useRef(null);
        const [hour, setHour] = useState(padNumber(tempHour, 2));
        const [min, setMin] = useState(padNumber(tempMin, 2));
        const [sec, setSec] = useState(padNumber(tempSec, 2));
        const timer = () => {
            interval.current = setInterval(() => {
                initialTime.current -= 1;
                setSec(padNumber(initialTime.current % 60, 2));
                setMin(padNumber(parseInt((initialTime.current % 3600) / 60), 2));
                setHour(padNumber(parseInt(initialTime.current / 3600), 2));
            }, 1000);
                return () => clearInterval(interval.current);
        }

        // 초가 변할 때만 실행되는 useEffect
        // initialTime을 검사해서 0이 되면 interval을 멈춘다.
        useEffect(() => {
            if (initialTime.current <= 0) {
                clearInterval(interval.current);
                setCycle(cylce+1);
                setPlay(!play);
                props.setFocus(!props.focus);
            }
            }, [sec]);

        const onClickPlay = ()=>{
            setPlay(!play);
            timer();
        }
        const onClickPause = ()=>{
            setPlay(!play);
            clearInterval(interval.current);
        }
        const onClickPopup = ()=>{
            props.setPopup(!props.popup);
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
                    <span className={styles.navBtn}>Cylces</span>
                    <span className={styles.navDesc}>{`${props.cylceTime?props.cylceTime:0}`}</span>
                </div>
                <div className={styles.navdetail}>
                <FontAwesomeIcon className={styles.setting} onClick={onClickPopup} icon="fa-solid fa-gear" />
                </div>
            </nav>
            <div className={styles.timer}>
                <nav className={styles.timerNav}>
                    <span className={`${props.focus?styles.timerBtnF:styles.timerBtn}`}>Focus</span>
                    <span className={styles.timerTimes}><FontAwesomeIcon className={styles.logo}icon="fa-solid fa-bicycle" />{`${cylce} / ${props.cylceTime?props.cylceTime:0}`}</span>
                    <span className={`${!props.focus?styles.timerBtnF:styles.timerBtn}`}>Break</span>
                    <FontAwesomeIcon className={styles.reset} icon="fa-solid fa-arrow-rotate-right" />
                </nav>
                <div className={styles.timerClock}>
                    <h1 className={styles.timerClockNum}>{hour} : {min} : {sec}</h1>
                    <div className={styles.PlayBtn}>
                        <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-backward" /></div>
                        <div className={styles.Play}>{play ? <FontAwesomeIcon onClick={onClickPlay} icon="fa-solid fa-play" /> : <FontAwesomeIcon onClick={onClickPause} icon="fa-solid fa-pause" />}</div>
                        <div className={styles.forword_back}><FontAwesomeIcon icon="fa-solid fa-forward" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimerCopy;