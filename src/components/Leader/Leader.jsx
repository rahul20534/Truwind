import React from 'react'
import Styles from './Leader.module.css';
import image from '../../Image/img9.jpg';
import Play from '../../Icon/play.svg';

const Leader =()=> {
  return (
   <>
   <div className={Styles.leader}>
    <h2>Leadership</h2>
    <h1>We promise the best</h1>
    <h1>values in a community</h1>

    <div className={Styles.video}>
        <div className={Styles.image}>
            <img className={Styles.img1} src={image} alt="image" />
            <img className={Styles.img2} src={Play} alt="Logo" />


        </div>

        <div className={Styles.founder}>
            <h1>Aashi Goel <span>Founder</span></h1>
            <p>Aashi Goel, a student of co-existential philosophy, strongly believes
                 in the transformative power of education when approached with intentionality.
            </p>

            <p>Education, driven by the pursuit of knowledge, serves as a means to do the right things, staying
                 true to values of empathy, collective humanity, and inclusivity.
            </p>

        </div>
    </div>

   </div>
   
   </>
  )
}

export default Leader