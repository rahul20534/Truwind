import React from 'react'
import Styles from './Leader.module.css';
 
 
const Leader = () => {
    return (
        <>
            <div className={Styles.leader}>
                <div className={Styles.heading}>
                    <h2>Leadership</h2>
 
                </div>
 
                <div className={Styles.subheading}>
                    <h1>Join Asia’s largest community of impact makers</h1>
 
                </div>
 
                <div className={Styles.para}>
                    <p>A movement to shape business for greater humanity. To make this a little engaging we can include numbers</p>
 
                </div>
 
                <div className={Styles.design}>
                    <div className={Styles.changemaker}>
                        <div className={Styles.changemakercircle}>
                            <p>120+</p>
                        </div>
                        <div className={Styles.text}>
                            <p>Changemakers Engaged</p>
                        </div>
                    </div>
 
                    <div className={Styles.impact}>
                        <div className={Styles.event}>
                            <p>6</p>
                        </div>
                        <div className={Styles.text}>
                            <p>Curated Impact Events</p>
                        </div>
                    </div>
 
                    <div className={Styles.social}>
                        <div className={Styles.media}>
                            <p>100 K+</p>
                        </div>
                        <div className={Styles.text}>
                            <p>Social Media Impressions</p>
                        </div>
                    </div>
 
                    <div className={Styles.partnership}>
                        <div className={Styles.strategic}>
                            <p>10+</p>
                        </div>
                        <div className={Styles.text}>
                            <p>Strategic Partnerships</p>
                        </div>
 
                    </div>
 
                </div>
 
            </div>
        </>
 
    )
}
 
export default Leader