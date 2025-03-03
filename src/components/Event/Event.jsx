import React from 'react'
import Styles from './Event.module.css';
import Image from '../../Image/1_1.png';
import forward from '../../Icon/forward.svg';

const Event = () => {
  return (
    <div className={Styles.event}>
      <h2>Events</h2>
      <h1>Upcoming Events</h1>
      <p>Join our exclusive, high-impact events designed to bring changemakers together. Hear from thought leaders, collaborate with conscious entrepreneurs, and learn how to integrate conscious practices into your work.
      </p>
      <h1 style={{color:"#F2435E"}}>Coming Soon</h1>

      {/* <div className={Styles.event_image}>
        <img src={Image} alt="IMAGE" />

        <div className={Styles.event_text}>
          <h1>Gathering and Dinner Table</h1>
          <h2>Thursday, December 19, 2024</h2>
          <p>Let's know each other better and get a chance for networking.
            This is a sample text that will describe what this event is all about.
          </p>

          <div className={Styles.btn}>
            <button>Book Now <img src={forward} /></button>
            <h1>Explore events</h1>
          </div>

        </div>

      </div> */}

    </div>
  )
}
export default Event