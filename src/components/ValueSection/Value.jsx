import React from 'react'
import styles from './Value.module.css';

//icons
import EXPERT from '../../Icon/Expertise.png';
import Process from '../../Icon/Process.png';
import Motto from '../../Icon/Motto.png';
import Purpose from '../../Icon/Purpose.png';


const Value = () => {
  return (

    <div className={styles.valueContainer}>
      <h2>Our Values</h2>

      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <h1>We promise the best</h1>
          <h1>values in a community</h1>
        </div>

        <div className={styles.ValueSection}>

          <div className={styles.part}>
            <div className={styles.value}>
              <div className={styles.logoContainer}>
                <img src={EXPERT} alt="Logo" />
              </div>
              <div className={styles.valueDesc}>
                <h1>Expertise</h1>
                <p>
                  Truward is a community-driven conscious business education company
                  dedicated to catalysing profound change in the business landscape.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <div className={styles.logoContainer}>
                <img src={Process} alt="Logo" />
              </div>
              <div className={styles.valueDesc}>
                <h1>Process</h1>
                <p>
                  Truward is a community-driven conscious business education company
                  dedicated to catalysing profound change in the business landscape.
                </p>
              </div>
            </div>

          </div>

          <div className={styles.part}>

            <div className={styles.value}>
              <div className={styles.logoContainer}>
                <img src={Purpose} alt="Logo" />
              </div>
              <div className={styles.valueDesc}>
                <h1>Purpose</h1>
                <p>
                  Truward is a community-driven conscious business education company
                  dedicated to catalysing profound change in the business landscape.
                </p>
              </div>
            </div>

            <div className={styles.value}>
              <div className={styles.logoContainer}>
                <img src={Motto} alt="Logo" />
              </div>
              <div className={styles.valueDesc}>
                <h1>Motto</h1>
                <p>
                  Truward is a community-driven conscious business education company
                  dedicated to catalysing profound change in the business landscape.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Value;
