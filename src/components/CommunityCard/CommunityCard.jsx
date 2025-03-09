import React from 'react'
import { useNavigate } from 'react-router-dom';
import Styles from './CommunityCard.module.css';

//icons
import image from '../../Image/1_2.png';
import arrow from '../../Icon/Uparrow.svg';
import Logo from '../../Icon/Truwind.svg';

const CommunityCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Community')
    }

    return (
        <div className={Styles.community}>
            <div className={Styles.text}>
                <div className={Styles.logo}>
                    <img src={Logo} alt="TRUWARD" />
                    <h2>Community</h2>
                </div>
                <h1>Join us in the business of making impact</h1>
                <p>CONNECT, COLLABORATE AND LEAD IMPACT DRIVEN INNOVATION</p>
                <div className={Styles.btn} onClick={handleClick} >Explore More <img src={arrow} alt="arrow" /></div>
            </div>

            <div className={Styles.img}>
                <img src={image} alt="Community members" />
            </div>
        </div>
    )
}

export default CommunityCard