import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Truward</h2>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Guiding Business Truward</h1>
        </div>

        <div className={styles.desc}>
          <p>At Truward, we’re reshaping business as a tool for global good. 
            Through education, events, and a growing impact network, we equip 
            entrepreneurs and leaders with the mindset and resources they need
             to drive meaningful, conscious change—transforming individuals and 
             organisations into forces for societal growth.
          </p>
        </div>

      </div>

    </div>

  )

}


export default About;

