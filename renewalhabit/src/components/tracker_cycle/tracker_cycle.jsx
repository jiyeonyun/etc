import React from 'react';
import Header from '../header/header';
import TaskTracker from '../task_tracker/task_tracker';
import Timer from '../timer/timer';
import styles from './tracker_cylce.module.css';
const TrackerCycle = (props) => {
    
    return(
        <div className={styles.task_tracker}>
            <Header/>
            <div className={styles.task_trackers}>
                <Timer/>
                <TaskTracker/>
            </div>
        </div>
        
    );
};

export default TrackerCycle;