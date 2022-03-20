import React from 'react';
import styles from './tracker.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useRef,useEffect } from 'react';
const Tracker = ({trackerName,onDelete,trakcer,edit,onEdit,onCheck,checked,onSubmitClicked}) => {
    const inputRef = useRef();
    const onDeleteClick = ()=>{
        onDelete(trakcer);
    }
    const onEditClick = (e)=>{
        onEdit(trakcer);
    }
    const onCheckClick = ()=>{
        onCheck(trakcer); 
    }
    const onSubmitClick = (e)=>{
        e.preventDefault();
        const name = inputRef.current.value;
        console.log(name);
        onSubmitClicked(trakcer,name);
    }
    useEffect(()=>{
        if(edit){
            inputRef.current.focus();
        }
    },[edit])
    return(
        <li className={styles.trackers}>
        {
            edit? <form onSubmit={onSubmitClick}><input ref={inputRef} type="text" defaultValue={trackerName} className={styles.edited}/></form>:<span className={`${checked?styles.clear:styles.habitName}`}>{trackerName}</span>
        }
        <div className={styles.buttons}>
            {edit?<span className={styles.editDesc}>edit and Enter</span>:<></>}
            <button className={styles.button} onClick={onEditClick} >
                {
                    edit ?<FontAwesomeIcon icon="fa-solid fa-circle-check"/> 
                    :<FontAwesomeIcon icon="fa-solid fa-pencil" />
                }
            </button>
            <button className={styles.button} onClick={onCheckClick}>
            <FontAwesomeIcon icon="fa-solid fa-check" className={`${checked ? styles.greenCheck:styles.defaultCheck}`} />
            </button>
            <button className={styles.button} onClick={onDeleteClick}>
            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
            </button>
        </div>
        </li>
    );
};

export default Tracker;