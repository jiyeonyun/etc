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
        <div className={styles.scroll2}>
          <p>
            We’re taking on the mounting challenges we face in cities today through radically
            different solutions to distributing, storing, and applying energy. By eliminating
            barriers to electric fuel, and elevating every riding experience, we’re accelerating the
            shift to smart mobility and sustainable urban lifestyles.
          </p>
          <p>
            We’re taking on the mounting challenges we face in cities today through radically
            different solutions to distributing, storing, and applying energy. By eliminating
            barriers to electric fuel, and elevating every riding experience, we’re accelerating the
            shift to smart mobility and sustainable urban lifestyles.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Info;
