import React from 'react';
import styles from './Approach.module.css';

// Icons
import community from '../../../Icon/Competition.svg';
import experience from '../../../Icon/Core.svg';
import network from '../../../Icon/Growth.svg';

const Approach = () => {
  return (
    <div className={styles.approachSection}>
      <h2>Our Approach</h2>
      <h1>Why community based learning</h1>

      <div className={styles.cardsContainer}>
        <div className={styles.cardItem}>
          <img src={community} alt="Community icon" />
          <h3>Collaboration Over Competition</h3>
          <p>We believe the greatest solutions emerge when we work together, not apart.</p>
        </div>

        <div className={styles.cardItem}>
          <img src={experience} alt="Experience icon" />
          <h3>Humanity at the Core</h3>
          <p>Every action we take is rooted in conscious decision-making that uplifts and empowers.</p>
        </div>

        <div className={styles.cardItem}>
          <img src={network} alt="Network icon" />
          <h3>Purposeful Growth</h3>
          <p>We're not chasing success—we're creating meaningful impact that transforms lives and the world.</p>
        </div>
      </div>
    </div>
  );
};

export default Approach;
