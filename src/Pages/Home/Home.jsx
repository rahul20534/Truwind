import React from 'react'

//styles
import styles from './Home.module.css'

//components
import Hero from '../../components/Hero/Hero'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid'
import About from '../../components/About/About'
import Value from '../../components/ValueSection/Value';
import Leader from '../../components/Leader/Leader';


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <PhotoGrid />
      <About />
      <Value></Value>
      <Leader></Leader>
     
    </div>
  )
}

export default Home