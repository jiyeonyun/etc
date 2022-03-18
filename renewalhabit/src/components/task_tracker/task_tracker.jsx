import React from 'react';
import styles from './task_tracker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import Trackers from '../trackers/trackers';

const TaskTracker = (props) => {
    const [full,setFull]  = useState(true);
    const onClick = ()=>{
        full ? setFull(false) : setFull(true)
    }
    return(
        <div className={styles.taskTracker}>
            <div className={styles.title}>
            <p className={styles.titleName}>Task Tracker</p>
            {
                full? <FontAwesomeIcon onClick={onClick} className={styles.titleIcon} icon="fa-solid fa-circle-arrow-down" /> 
                    :<FontAwesomeIcon onClick={onClick} className={styles.titleIcon} icon="fa-solid fa-circle-arrow-up" />
            }
            </div>
                <div className={`${!full? styles.tracker : styles.none}`}>
                    <Trackers/>
                </div> 
        </div>
    );
};

export default TaskTracker;