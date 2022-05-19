import React, { useEffect, useState } from 'react';
import styles from './info.module.css';
const Info = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };
  useEffect(() => {
    console.log('ScrollY is ', scrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [scrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    };
  });

  return (
    <main>
      <section>
        <div className={styles.scrollContainer}>
          <div className={styles.stickyCopy}>
            <div className={styles.copyFirst} style={}>
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
