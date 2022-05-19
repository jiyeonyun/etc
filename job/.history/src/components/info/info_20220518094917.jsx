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
        <div className={styles.desWrap}>
          <ul className={styles.list}>
            <li className={styles.des}>
              <label htmlFor="name">성명</label>
              <input type="text" id="name" />
              <label htmlFor="eName">영문</label>
              <input type="text" id="eName" />
            </li>
            <li className={styles.des}>
              <label htmlFor="name">성명</label>
              <input type="text" id="name" />
            </li>
            <li className={styles.des}>
              <label htmlFor="name">성명</label>
              <input type="text" id="name" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
