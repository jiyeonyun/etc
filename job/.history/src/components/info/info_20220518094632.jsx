import React from 'react';
import styles from './info.module.css';
const Info = (props) => {
  return (
    <div className={styles.infoWrap}>
      <h3 className={styles.infoTitle}>인적사항</h3>
      <div className={styles.infoInnerWrap}>
        <div className={styles.imageWrap}>
          <img src="" alt="" className={styles.infoImage} />
        </div>
        <div className={styles.desWrap}></div>
      </div>
    </div>
  );
};

export default Info;
