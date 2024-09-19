import React from 'react'
import Styled from './Event.module.css';
import EventMain from '../../components/Event_componant/EventMain'
import banner from '../../Image/banner.png';
import img1 from '../../Image/img5.jpg';
import img2 from '../../Image/img6.jpg';


const Event = () => {
  const images = [img2, img1, img2];
  return (
    <>
      <div className={Styled.event}>
        <div className={Styled.banner}>
          <img src={banner} />
          <h2>Our Community, Your Network!</h2>
        </div>

        <div className={Styled.seduleEvent}>
          <h1>Upcoming Events</h1>
          {images.map((img, index) => (
            <EventMain key={index} image={img} />
          ))}

        </div>
      </div>
    </>
  )
}

export default Event
