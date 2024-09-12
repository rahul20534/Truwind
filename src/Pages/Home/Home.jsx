import React from 'react'

//styles
import styles from './Home.module.css'

//components
import Hero from '../../components/Hero/Hero'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <PhotoGrid />
    </div>
  )
}

export default Home