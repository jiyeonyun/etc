import React from 'react';
import styles from './info.module.css';
const Info = (props) => {
  return (
    <main>
      <section>
        <div className={styles.scrollContainer}>
          <div className={styles.stickyCopy}>
            <div className={styles.copyFirst}>
              <h1 className={styles.title}>1번스크롤</h1>
            </div>
            <div className={styles.copySecond}>
              <p className={styles.title}>2스크롤인데 문자가 많은~~~</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Info;
