import React from 'react';
import styles from './tracker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tracker = ({trackerName,onDelete,trakcer}) => {
    const onDeleteClick = ()=>{
        onDelete(trakcer);
    }
    
    return(
        <li className={styles.trackers}>
        <span className={styles.habitName}>{trackerName}</span>
        <div className={styles.buttons}>
            <button className={styles.button} onClick={onDeleteClick}>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
        </div>
        </li>
    );
};

export default Tracker;