import React from 'react'
import styles from './Value.module.css';

//icons
import EXPERT from '../../Icon/Expertise.png';
import Process from '../../Icon/Process.png';
import Motto from '../../Icon/Motto.png';
import Purpose from '../../Icon/Purpose.png';


const Value = () => {
  return (
    <>
      <div className={styles.approach}>
        <div className={styles.maincontainer}>
          <div className={styles.left}>
            <p>Our Approach</p>
            <h1>We promise the best values in a community</h1>

          </div>

          <div className={styles.right}>
            <div className={styles.personal}>
              <div className={styles.icon1}>
                <img src={EXPERT} alt="" />

              </div>
              <div className={styles.text1}>
                <h1>Personal and Organizational Consciousness</h1>
                <p>We believe true change starts with individual self-awareness and extends to the entire organization. Our programs focus on cultivating emotional intelligence, leadership development, and the ethical alignment of business practices.</p>

              </div>

            </div>

            <div className={styles.impact}>
              <div className={styles.icon2}>
                <img src={Purpose} alt="" />

              </div>

              <div className={styles.text2}>
                <h1>
                  Impact-Oriented Collaboration
                </h1>
                <p>We emphasize collaboration over competition, bringing together change makers from various fields to learn, share, and work together in ways that amplify their individual and collective impact.</p>

              </div>


            </div>

            <div className={styles.Sustainable}>
              <div className={styles.icon3}>
                <img src={Purpose} alt="" />

              </div>
              <div className={styles.text3}>
                <h1>Sustainable and Scalable Solutions</h1>
                <p>We teach businesses how to leverage cutting-edge tools and methods to measure and manage their environmental and social impact, ensuring that growth remains sustainable and conscious.</p>

              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Value;
