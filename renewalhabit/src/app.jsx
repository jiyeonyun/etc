import styles from './app.module.css';
import Header from './components/header/header';
import TaskTracker from './components/task_tracker/task_tracker';

function App() {
  return (
    <div className={styles.wrap}>
    <TaskTracker/>
    </div>
    
  );
}

export default App;
