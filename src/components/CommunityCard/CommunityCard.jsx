import React from 'react'
import Styles from './CommunityCard.module.css';


//icons
import image from '../../Image/1_2.png';
import arrow from '../../Icon/Uparrow.svg';
import Logo from '../../Icon/Truwind.svg';

const CommunityCard = () => {
    return (
        <div className={Styles.community}>
            
            <div className={Styles.text}>
                <div className={Styles.logo}>
                    <img src={Logo} />
                    <h2>Community</h2>
                </div>
                <h1>Join us in the business of making impact</h1>
                <p>CONNECT, COLLABORATE AND LEAD IMPACT DRIVEN INNOVATION</p>
                <div className={Styles.btn}>Explore More <img src={arrow} /></div>
            </div>

            <div className={Styles.img}>
                <img src={image} />
            </div>
        </div>


    )
}

export default CommunityCard