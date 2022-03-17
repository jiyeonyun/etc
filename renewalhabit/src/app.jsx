import styles from './app.module.css';
import TrackerCycle from './components/tracker_cycle/tracker_cycle';

function App() {
  return (
    <div className={styles.wrap}>
    <TrackerCycle/>
    </div>
    
  );
}

export default App;
