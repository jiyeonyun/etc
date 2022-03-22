import { useState } from 'react';
import styles from './app.module.css';
import TrackerCycle from './components/tracker_cycle/tracker_cycle';

function App() {
  const [popup,setPopup] = useState(true);
  const [finish,setFinish] = useState(false);
  return (
    <div className={`${popup?styles.wrapPopup:styles.wrap}`}>
    <TrackerCycle popup={popup} setPopup={setPopup} finish={finish} setFinish={setFinish}/>
    </div>
    
  );
}

export default App;
