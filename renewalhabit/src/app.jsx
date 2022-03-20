import { useState } from 'react';
import styles from './app.module.css';
import CycleCopy from './components/tracker_cycle/cycle_copy';
import TrackerCycle from './components/tracker_cycle/tracker_cycle';

function App() {
  const [popup,setPopup] = useState(false);
  return (
    <div className={`${popup?styles.wrapPopup:styles.wrap}`}>
    <CycleCopy popup={popup} setPopup={setPopup}/>
    </div>
    
  );
}

export default App;
