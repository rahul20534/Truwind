import React from 'react'
import Styles from './CommunityCard.module.css';
import image from '../../Image/img7.jpg';
import arrow from '../../Icon/Vector.svg';
import Logo from '../../Icon/Truwind.svg';

const CommunityCard = () => {
    return (
        <>
            <div className={Styles.community}>

                <div className={Styles.text}>
                    <div className={Styles.logo}>
                        <img src={Logo} />
                        <h2>Community</h2>

                    </div>

                    <h1>Join Our Community
                        And Unleash Your Potential
                    </h1>
                    <p>That will help you to unleash your superpowers Truward is a
                        community-driven conscious business education company dedicated
                        to catalysing profound change in the business landscape.
                    </p>

                    <button>Explore More <img src={arrow} /></button>

                </div>

                <div className={Styles.img}>
                    <img src={image} />
                </div>

            </div>


        </>
    )
}

export default CommunityCard