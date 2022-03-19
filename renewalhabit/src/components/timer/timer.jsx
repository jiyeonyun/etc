import React from 'react';
import styles from './timer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from 'react';

const Timer = ({popup,setPopup,cylceTime,BreakMin,BreakHr,focusMin,focusHr}) => {
        const [play,setPlay] = useState(true);
        const [start,setStart] = useState(false);
        const [focus,setFocus] =useState(true);
        const padNumber = (num, length) => {
            return String(num).padStart(length, '0');
        };
        
        const tempHour = focus ? focusHr : BreakHr;
        const tempMin = focus? focusMin : BreakMin;
        const tempSec = 0;
        const initialTime = useRef(tempHour * 60 * 60 + tempMin * 60 + tempSec);
        const interval = useRef(null);
        const [hour, setHour] = useState(padNumber(tempHour, 2));
        const [min, setMin] = useState(padNumber(tempMin, 2));
        const [sec,setSec] = useState(0);
        useEffect(()=>{
                interval.current = setInterval(() => {
                    setSec(initialTime.current % 60);
                    setMin(padNumber(parseInt(initialTime.current / 60), 2));
                    setHour(padNumber(parseInt(initialTime.current / 60 / 60), 2));
                    initialTime.current -= 1;
                }, 1000);
                
                return () => clearInterval(interval.current);
        },[start]);
            
        
            useEffect(() => {
            if (initialTime.current <= 0) {
                clearInterval(interval.current);
            }
            }, [sec]);

        const onClickPlay = ()=>{
            setPlay(!play);
            setStart(!start);
        }
        const onClickPause = ()=>{
            setPlay(!play);
        }
        const onClickPopup = ()=>{
            setPopup(!popup);
        }


        return(
        <div className={styles.timerWrap}>
            <nav className={styles.nav}>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Focus</span>
                    <span className={styles.navDesc}>{`${focusHr?focusHr:0} hr ${focusMin?focusMin:0} min`}</span>
                </div>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Break</span>
                    <span className={styles.navDesc}>{`${BreakHr?BreakHr:0} hr ${BreakMin?BreakMin:0} min`}</span>
                </div>
                <div className={styles.navdetail}>
                    <span className={styles.navBtn}>Cylces</span>
                    <span className={styles.navDesc}>{`${cylceTime?cylceTime:0}`}</span>
                </div>
                <div className={styles.navdetail}>
                <FontAwesomeIcon className={styles.setting} onClick={onClickPopup} icon="fa-solid fa-gear" />
                </div>
            </nav>
            <div className={styles.timer}>
                <nav className={styles.timerNav}>
                    <span className={styles.timerBtn}>Focus</span>
                    <span className={styles.timerTimes}><FontAwesomeIcon className={styles.logo}icon="fa-solid fa-bicycle" />{`0 / ${cylceTime?cylceTime:0}`}</span>
                    <span className={styles.timerBtn}>Break</span>
                    <FontAwesomeIcon className={styles.reset} icon="fa-solid fa-arrow-rotate-right" />
                </nav>
                <div className={styles.timerClock}>
                    <h1 className={styles.timerClockNum}>{`${tempHour.toString().padStart(2, '0')}:${tempMin.toString().padStart(2, '0')}:${tempSec.toString().padStart(2, '0')}`} </h1>
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

export default Timer;