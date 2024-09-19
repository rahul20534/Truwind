import React from 'react'
import Styled from './EventMain.module.css';
import right from '../../Icon/right.svg';


const EventMain = ({ image }) => {

    return (
        <>
            <div className={Styled.sedule}>
                <div className={Styled.event_image}>

                    <img src={image} alt="IMAGE" />

                    <div className={Styled.event_text}>
                        <h1>Gathering and Dinner Table</h1>
                        <h2>Thursday, December 19, 2024</h2>
                        <p>Let’s know each other better and get a chance for networking.
                            This is a sample text that will describe what this event is all about.
                        </p>

                        <div className={Styled.btn}>
                            <button>Book Now <img src={right} /></button>

                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default EventMain
