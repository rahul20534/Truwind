import React from 'react'
import Styled from './Event.module.css';
import EventMain from '../../components/Event_componant/EventMain'
import banner from '../../Image/banner.png';
import img1 from '../../Image/1_1.png';
import img2 from '../../Image/img6.jpg';
import Footer from '../../components/Footer/Footer';


const Event = () => {
  const images = [img2, img1, img2];
  const dates = [
    {
      id: '1',
      Month: 'OCT',
      Date: '19'
    },
    {
      id: '2',
      Month: 'OCT',
      Date: '29'
    },
    {
      id: '3',
      Month: 'NOV',
      Date: '12'
    }

  ]
  return (
    <>
      <div className={Styled.event}>
        <div className={Styled.banner}>
          <img src={banner} />
          <h2>Our Community, Your Network!</h2>
        </div>

        <div className={Styled.seduleEvent} >
          <h1 className={Styled.mainheading}>Upcoming Events</h1>
          <hr />

          <div className={Styled.text}>
            <h1>Coming Soon</h1>
          </div>


        </div>
        <Footer className={Styled.footer}></Footer>

      </div>


    </>
  )
}

export default Event
