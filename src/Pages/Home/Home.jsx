import React from 'react'

//styles
import styles from './Home.module.css'


//components
import Hero from '../../components/Hero/Hero'
import PhotoGrid from '../../components/PhotoGrid/PhotoGrid'
import About from '../../components/About/About'
import Value from '../../components/ValueSection/Value';
import Leader from '../../components/Leader/Leader'
import Event from '../../components/Event/Event';
import CommunityCard from '../../components/CommunityCard/CommunityCard';
import Testinomal from '../../components/Testinomal/Testinomal'


const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Hero />
      <PhotoGrid />
      <About />
      <Value/>
      <Leader/>
      <Event/>
      <CommunityCard/>
      <Testinomal/>
      
     
    </div>
  )
}

export default Home