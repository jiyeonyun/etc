import React from 'react';
import styles from './tracker_add_form.module.css';

const TrackerAddForm = (props) => {
    const inputRef = React.createRef();
    const sendName = (event) =>{
        event.preventDefault(); 
        const name = inputRef.current.value;
        name && props.onSubmit(name);
        inputRef.current.value = '';
    }

    return (
        <form className={styles.addForm} onSubmit={sendName}>
            <input 
                ref={inputRef} 
                className={styles.addInput}
                type="text" 
                placeholder='Write your tracker...' 
                />
            <button className={styles.addBtn}>Add</button>
        </form>
);
};

export default TrackerAddForm;