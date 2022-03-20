import React from 'react';
import Header from '../header/header';
import TaskTracker from '../task_tracker/task_tracker';
import styles from './tracker_cylce.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useRef } from 'react';
import TimerCopy from '../timer/timer_copy';
import { useEffect } from 'react';
const CycleCopy = ({popup,setPopup}) => {
        const [focus,setFocus] =useState(true);
        const [focusHr,setFocusHr] = useState(0);
        const [focusMin,setFocusMin] = useState(0);
        const [BreakHr,setBreakHr] = useState(0);
        const [BreakMin,setBreakMin] = useState(0);
        const [cylceTime,setCycleTime] = useState(0);
        
        const hour = focus ? focusHr : BreakHr;
        const min = focus? 1 : BreakMin;
        const sec = 0;

        const onClick = ()=>{
            setPopup(!popup);
        }

        const onOk = ()=>{
            setPopup(!popup);      
            setFocusHr(studyHourRef.current.value);
            setFocusMin(studyMinRef.current.value);
            setBreakHr(breakHourRef.current.value);
            setBreakMin(breakMinRef.current.value);
            setCycleTime(cycleRef.current.value);
        }
        
        const studyHourRef = useRef();
        const studyMinRef = useRef();
        const breakHourRef = useRef();
        const breakMinRef = useRef();
        const cycleRef = useRef();
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
                <TimerCopy popup={popup} setPopup={setPopup} focusHr={focusHr} focusMin={focusMin} focus={focus} setFocus={setFocus}
                BreakHr={BreakHr} BreakMin={BreakMin} cylceTime={cylceTime} hour={hour} min={min} sec={sec}
                />
                <TaskTracker/>
            </div>
        </div>
        
    );
};

export default CycleCopy;