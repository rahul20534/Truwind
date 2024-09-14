import React from 'react'
import Styles from './CommunityCard.module.css';
import image from '../../Image/img7.jpg';
import arrow from '../../Icon/arrow.svg';
import Logo from '../../Image/Newlogo.jpg';

const CommunityCard =()=> {
  return (
    <>
    <div className={Styles.CommunityCard}>
                    <div className={Styles.text}>
                                        <div className={Styles.logo}>
                                                            <img src={Logo} alt="logo" />
                                                            <h1>Community</h1>

                                        </div>

                                        <h2>Join Our Community
                                        And Unleash Your Potential
                                        </h2>

                                        <p>That will help you to unleash your superpowers 
                                        Truward is a community-driven conscious business
                                         education company dedicated to catalysing profound
                                          change in the business landscape.
                                        </p>

                                        <button>Explore More <img src={arrow}/></button>

                    </div>

                    <div className={Styles.image}>
                    <img src={image} alt="image" />
                    </div>

    </div>
    
    </>
  )
}

export default CommunityCard