import React from 'react'
import Styles from './Event.module.css';
import Image from '../../Image/1_1.png';
import forward from '../../Icon/forward.svg';

const Event = () => {
  return (
    <div className={Styles.event}>
      <h2>Events</h2>
      <h1>Upcoming Events</h1>
      <p>Join our exclusive, high-impact events designed to bring changemakers together. Hear from thought leaders, collaborate with conscious entrepreneurs, and learn how to integrate conscious practices into your work.</p>
      <div className={Styles.coming}>Coming Soon</div>

    </div>
  )
}
export default Event