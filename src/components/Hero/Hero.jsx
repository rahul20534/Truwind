import React from 'react'

//styles
import styles from './Hero.module.css'

//assets
import ARROW from '../../Icon/arrow.svg';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <h1>Redefining leadership for a <span className={styles.gradientText}>better world.</span></h1>
      </div>

      <div className={styles.description}>
        <p>
          Change the way you do business and transform your impact on society to create a world we all need and want
        </p>
      </div>

      <button className={styles.btn}>
        Join Our Movement
        <img src={ARROW} alt="arrow" />
      </button>
    </div>
  )
}

export default Hero