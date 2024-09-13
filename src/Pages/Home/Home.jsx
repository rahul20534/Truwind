import React from 'react'

//styles
import styles from './Home.module.css'

//components
import Hero from '../../components/Hero/Hero'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid'
import About from '../../components/About/About'
import Value from '../../components/ValueSection/Value';


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <PhotoGrid />
      <About />
      <Value></Value>
     
    </div>
  )
}

export default Home