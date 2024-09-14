import React from 'react'
import Styles from './Event.module.css';
import Image from '../../Image/img6.jpg';

const Event =()=> {
  return (   

                    <>
                    <div className={Styles.event}>
                      <h2>Events</h2>
                      <h1>Featured Event</h1>
                      <p>That will help you to unleash your superpowers Truward is a 
                        community-driven conscious business education company dedicated to 
                        catalysing profound change in the business landscape.
                      </p>

                      <div className={Styles.event_image}>
                        <img src={Image} alt="IMAGE" />

                        <div className={Styles.event_text}>
                          <h1>Gathering and Dinner Table</h1>
                          <h2>Thursday, December 19, 2024</h2>
                          <p>Let’s know each other better and get a chance for networking. 
                            This is a sample text that will describe what this event is all about.
                          </p>

                          <div className={Styles.btn}>
                            <button>Book Now</button>
                            <h1>Explore events</h1>
                          </div>

                        </div>

                      </div>

                    </div>

                    </>
  )
}
export default Event