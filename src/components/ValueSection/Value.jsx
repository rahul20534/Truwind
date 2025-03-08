import React from 'react';
import styles from './Value.module.css';

//icons
import EXPERT from '../../Icon/Expertise.png';
import Process from '../../Icon/Process.png';
import Purpose from '../../Icon/Purpose.png';

const Value = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <p className={styles.subtitle}>Our Approach</p>
            <h1 className={styles.title}>We promise the best values in a community</h1>
          </div>

          <div className={styles.values}>
            <div className={styles.valueItem}>
              <div className={styles.iconWrapper}>
                <img src={EXPERT} alt="Expertise" />
              </div>
              <div className={styles.textWrapper}>
                <h1 className={styles.valueTitle}>Personal and Organizational Consciousness</h1>
                <p className={styles.description}>We believe true change starts with individual self-awareness and extends to the entire organization. Our programs focus on cultivating emotional intelligence, leadership development, and the ethical alignment of business practices.</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.iconWrapper}>
                <img src={Process} alt="Process" />
              </div>
              <div className={styles.textWrapper}>
                <h1 className={styles.valueTitle}>Impact-Oriented Collaboration</h1>
                <p className={styles.description}>We emphasize collaboration over competition, bringing together change makers from various fields to learn, share, and work together in ways that amplify their individual and collective impact.</p>
              </div>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.iconWrapper}>
                <img src={Purpose} alt="Purpose" />
              </div>
              <div className={styles.textWrapper}>
                <h1 className={styles.valueTitle}>Sustainable and Scalable Solutions</h1>
                <p className={styles.description}>We teach businesses how to leverage cutting-edge tools and methods to measure and manage their environmental and social impact, ensuring that growth remains sustainable and conscious.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Value;
