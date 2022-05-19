import React from 'react';
import styles from './info.module.css';
const Info = (props) => {
  return (
    <main>
      <section>
        <div className={styles.scrollContainer}>
          <div className={styles.stickyCopy}>
            <div className={styles.copyFirst}></div>
            <div className={styles.copySecond}></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Info;
