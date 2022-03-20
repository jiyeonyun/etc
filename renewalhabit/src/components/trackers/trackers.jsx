import React from 'react';
import { useState,useRef } from 'react';
import Tracker from '../tracker/tracker';
import TrackerAddForm from '../tracker_add_form/tracker_add_form';
import styles from './trackers.module.css';

const Trackers = (props) => {
    const [tracker,setTracker] = useState([]);
    const [trackerName,setTrackerName] = useState(''); 
    
    const editInputRef = useRef(false);

    const onSubmit = (name,checked,edit)=>{
        setTrackerName(name);
        const newtracker = [...tracker];
        newtracker.push({id:Date.now(), name : name, checked : checked, edit:edit});
        setTracker(newtracker);
    };
    const onDelete = (trakcer) => {
        const newtracker = [...tracker];
        const deleteTracker = newtracker.filter(item =>item.id !== trakcer.id);
            setTracker(deleteTracker);
    };
    const onEdit = (trakcer)=>{
        setTracker(
            tracker.map((item) =>
            item.id === trakcer.id ? { ...item, edit: !item.edit } : item,
            ),
        );
    };
    const onCheck = (trakcer)=>{
        setTracker(
            tracker.map((item) =>
            item.id === trakcer.id ? { ...item, checked: !item.checked } : item,
            ),
        );
    };
    const onSubmitClicked = (trakcer,name)=>{
        setTracker(
            tracker.map((item) =>
            item.id === trakcer.id ? { ...item, name: name , edit: !item.edit} : item,
            ),
        );
    }

    return(
        <>
        <TrackerAddForm onSubmit={onSubmit}/>
        <ul>
            {tracker.map(trakcer=>(
                <Tracker
                        key={trakcer.id}
                        trakcer={trakcer}
                        trackerName={trakcer.name}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        onCheck={onCheck}
                        checked={trakcer.checked}
                        edit={trakcer.edit}
                        onSubmitClicked={onSubmitClicked}
                />
            ))}
            
        </ul>
        </>
    );
};
export default Trackers;