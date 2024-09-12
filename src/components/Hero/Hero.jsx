import React from 'react'

//styles
import styles from './Hero.module.css'

//components

//assets
import ARROW from '../../Icon/arrow.svg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h1>Learn The Way Of</h1>
        <h1>Conscience <span className={styles.gradientText}>Education.</span></h1>
      </div>

      <div className={styles.description}>
        <p>
          This is a sample text that describes about this website. Lorem Ipsum is the 
          way of giving sample texts. Lorem Ipsum is the text.
        </p>
      </div>

      <div className={styles.btn}>
        KNOW MORE 
        <img src={ARROW} alt="arrow" />
      </div>
    </div>
  )
}


export default Hero