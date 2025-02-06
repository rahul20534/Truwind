import React from 'react';
import { useState } from 'react';
import Styled from './EventMain.module.css';
import right from '../../Icon/right.svg';

const EventMain = ({ image,dates }) => {
    
    return (
        <div className={Styled.container}>
            <div className={Styled.eventWrapper}>
                <div className={Styled.date}>
                    <p>{dates.Month}</p>
                    <h1>{dates.Date}</h1>

                </div>
                <img src={image} alt="Event" className={Styled.eventImage} />
                <div className={Styled.eventText}>
                    <h1>Gathering and Dinner Table</h1>
                    <h2>Thursday, December 19, 2024</h2>
                    <p>Let’s know each other better and get a chance for networking. 
                        This is a sample text that will describe what this event is all about.
                    </p>
                    <hr />
                    <div className={Styled.btnWrapper}>
                        <button className={Styled.bookNow}>Book Now <img src={right} alt="Arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventMain;
