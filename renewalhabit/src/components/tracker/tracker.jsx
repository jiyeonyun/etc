import React from 'react';
import styles from './tracker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Tracker = (props) => {
    return(
        <li className={styles.trackers}>
        <span className={styles.habitName}>hi</span>
        <div className={styles.buttons}>
            <button className={styles.button}>
            <FontAwesomeIcon icon="fa-solid fa-pen" />
            </button>
            <button className={styles.button}>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
        </div>
        </li>
    );
};

export default Tracker;