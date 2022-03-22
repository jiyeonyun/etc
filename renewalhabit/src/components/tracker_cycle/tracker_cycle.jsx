import React from 'react';
import Header from '../header/header';
import TaskTracker from '../task_tracker/task_tracker';
import Timer from '../timer/timer';
import styles from './tracker_cylce.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useRef,useEffect } from 'react';

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const TrackerCycle = ({popup,setPopup,finish,setFinish}) => {
        
    const [play,setPlay] = useState(true);
    const [playBtn,setPlayBtn] = useState(false);
    const [focus,setFocus] =useState(false);
    const [focusHr,setFocusHr] = useState(0);
    const [focusMin,setFocusMin] = useState(0);
    const [BreakHr,setBreakHr] = useState(0);
    const [BreakMin,setBreakMin] = useState(0);
    const [cylceTime,setCycleTime] = useState(0);
    const [cylce,setCycle] = useState(0);

    const studyHourRef = useRef();
    const studyMinRef = useRef();
    const breakHourRef = useRef();
    const breakMinRef = useRef();
    const cycleRef = useRef();

    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0);

    const tempHour = hour ? parseInt(hour) : 0;
    const tempMin = min ? parseInt(min) : 0;
    const tempSec = sec ? parseInt(sec) : 0;

    let initialTime = tempHour * 60 * 60 + tempMin * 60 + tempSec;
    const interval = useRef(null);

    const onClick = ()=>{
        setPopup(!popup);
    }
    const onClickFinish = ()=>{
        setFinish(!finish);
    }
    const onOk = ()=>{
        setPopup(!popup);      
        setFocusHr(studyHourRef.current.value);
        setFocusMin(studyMinRef.current.value);
        setBreakHr(breakHourRef.current.value);
        setBreakMin(breakMinRef.current.value);
        setCycleTime(cycleRef.current.value);
    }

    useEffect(()=>{
        if(cylce!=0 && cylce == cylceTime){
            setFinish(!finish);
        }
    },[cylce]);

    useEffect(() => {
        if(play===false){
            interval.current = setInterval(() => {
                initialTime -= 1;
                setSec(padNumber(initialTime % 60, 2));
                setMin(padNumber(parseInt(initialTime / 60), 2));
                setHour(padNumber(parseInt(initialTime / 60 / 60), 2));
                }, 1000);
                return () => clearInterval(interval.current);
        }
        else{
            clearInterval(interval.current);
        }
        }, [play]);
    
    useEffect(() => {
            if (initialTime <= 0) {
                clearInterval(interval.current);
                setPlayBtn(!playBtn);
                setFocus(!focus);
                if(focus){
                    setCycle(cylce+1);
                }
            }
        }, [sec]);

    useEffect(()=>{
        setHour(focus ? focusHr : BreakHr);
        setMin(focus? focusMin : BreakMin);
        setPlayBtn(true);
        setPlay(true);
        setSec(0);
    },[popup,focus]);

return(
    <div className={`${popup?styles.task_tracker_popup:styles.task_tracker}`}>
        <Header popup={popup} setPopup={setPopup}/>
        <div className={styles.task_trackers}>
            <div className={`${popup?styles.popup:styles.none}`}>
                <FontAwesomeIcon className={styles.exist} onClick={onClick} icon="fa-solid fa-x" />
                <h1 className={styles.popupTitle}>Setting</h1>
                <ul className={styles.list}>
                    <li className={styles.option}>
                        <h2 className={styles.optionTitle}>Focus Time</h2>
                        <div className={styles.optionInput}>
                            <input ref={studyHourRef} type="number" min="0" max="24" placeholder='0'/> <span className={styles.span}>Hours</span> 
                            <input ref={studyMinRef}type="number" min="0" max="60" placeholder='0' /> <span className={styles.span}>Minutes</span>
                        </div>
                    </li>
                    <li className={styles.option}>
                        <h2 className={styles.optionTitle}>Break Time</h2>
                        <div className={styles.optionInput}>
                            <input ref={breakHourRef} className={styles.input} type="number" min="0" max="24" placeholder='0'/><span className={styles.span}>Hours</span> 
                            <input ref={breakMinRef}className={styles.input} type="number" min="0" max="60" placeholder='0'/><span className={styles.span}>Minutes</span> 
                        </div>
                    </li>
                    <li className={styles.option}>
                        <h2 className={styles.optionTitle}>Goal Cycles</h2>
                        <div className={styles.optionInput}>
                            <input ref={cycleRef} className={styles.input} type="number" min="0" max="10" placeholder='0'/><span className={styles.span}>Cycles</span>
                        </div>
                    </li>
                </ul>
                <button className={styles.popupButton} onClick={onOk}>OK</button>
            </div>
            <div className={`${finish?styles.finish:styles.none}`}>
            <FontAwesomeIcon className={styles.exist} onClick={onClickFinish} icon="fa-solid fa-x" />
                <h1>🥳FINISH!!🥳</h1>
            </div>
            <Timer popup={popup} setPopup={setPopup} focusHr={focusHr} focusMin={focusMin} focus={focus} setFocus={setFocus} cylce={cylce}
            BreakHr={BreakHr} BreakMin={BreakMin} cylceTime={cylceTime} hour={hour} min={min} sec={sec} play={play} setPlay={setPlay}
            playBtn={playBtn} setPlayBtn={setPlayBtn}/>
            <TaskTracker/>
        </div>
    </div>
        
    );
};

export default TrackerCycle;