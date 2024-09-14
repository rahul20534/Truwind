import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>About Truward</h2>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Where else to start but at the beginning</h1>
        </div>

        <div className={styles.desc}>
          <p>That will help you to unleash your superpowers Truward is a
            community-driven conscious business education company dedicated
            to catalysing profound change in the business landscape.
          </p>

          <p>
            A community of more than 1000+ people all around the world. This
            is a sample text for the about section for Truward
          </p>

        </div>

      </div>

    </div>

  )

}


export default About;

