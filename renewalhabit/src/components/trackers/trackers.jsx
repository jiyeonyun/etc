import React from 'react';
import { useState } from 'react/cjs/react.development';
import Tracker from '../tracker/tracker';
import TrackerAddForm from '../tracker_add_form/tracker_add_form';
import styles from './trackers.module.css';
const Trackers = (props) => {
    const [tracker,setTracker] = useState([]);
    const [trackerName,setTrackerName] = useState(''); 

    const onSubmit = (name)=>{
        setTrackerName(name);
        const newtracker = [...tracker];
        newtracker.push({id:Date.now(), name : name});
        setTracker(newtracker);
    } 
    const onDelete = (trakcer) => {
        const newtracker = [...tracker];
        const deleteTracker = newtracker.filter(item =>item.id !== trakcer.id);
            setTracker(deleteTracker);
        };
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
                />
            ))}
            
        </ul>
        </>
    );
};
export default Trackers;