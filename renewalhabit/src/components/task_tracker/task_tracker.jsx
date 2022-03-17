import React from 'react';
import Header from '../header/header';
import Timer from '../timer/timer';
import styles from './task_tracker.module.css';
const TaskTracker = (props) => {
    
    return(
        <div className={styles.task_tracker}>
        <Header/>
        <div className={styles.task_trackers}>
        <Timer/>
        </div>
        </div>
        
    );
};

export default TaskTracker;