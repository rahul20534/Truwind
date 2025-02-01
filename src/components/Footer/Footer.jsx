import React from 'react'
import styled from './Footer.module.css';

//icon
import Arrow from '../../Icon/rightarrow.svg';
import Instagram from '../../Icon/instagram 2.svg';
import Linkdin from '../../Icon/LinkedIn.svg';
import Email from '../../Icon/email.svg';
import Truwind from '../../Icon/Truwind.svg';



const Footer = () => {
    return (
        <>
            <div className={styled.footer}>
                <div className={styled.mainfooter}>
                    <div className={styled.heading}>
                        <h1>Get in touch with us!</h1>
                        <p>We’re excited to connect with you! Whether you have a question, want to partner with us,
                            or are interested in coaching opportunities, your journey begins here.</p>

                    </div>

                    <div className={styled.form}>
                        <form action="">
                            <div className={styled.row1}>
                                <div className={styled.name}>
                                    <input type="text" placeholder='Your Name'/>
                                    <hr />
                                </div>

                                <div className={styled.email}>
                                    <input type="email" placeholder='Email Address' />
                                    <hr />
                                </div>
                            </div>

                            <div className={styled.row2}>
                                <div className={styled.mobilenumber}>
                                    <input type="number" placeholder='Phone Number (optional)' />
                                    <hr />
                                </div>

                                <div className={styled.city}>
                                    <input type="text" placeholder='City' />
                                    <hr />
                                </div>
                            </div>

                            <div className={styled.row3}>
                                <div className={styled.message}>
                                    <input type="text" placeholder='Message' />
                                    <hr />
                                </div>


                            </div>
                            

                        </form>
                        <div className={styled.btn}>
                                <button>Leave Us A Message<img src={Arrow} alt="" /></button>
                        </div>

                    </div>

                    <div className={styled.icon}>
                        <div className={styled.text}>
                            <h1>Stay updated on our events, initiatives, and community highlights!</h1>
                            <p>Follow us on</p>

                        </div>
                        <div className={styled.socialmedia}>
                            <div className={styled.Linkdin}>
                                <img src={Linkdin} alt="" />

                            </div>
                            <div className={styled.Instagram}>
                                <img src={Instagram} alt="" />

                            </div>
                            <div className={styled.email}>
                                <img src={Email} alt="" />

                            </div>

                        </div>

                        <div className={styled.footernav}>
                            <p>About</p>
                            <p>Community</p>
                            <p>Events</p>

                        </div>

                    </div>

                    <div className={styled.watermark}>
                        <h1>2025 © Truward. All rights reserved.</h1>
                        <img src={Truwind} alt="" />

                    </div>


                </div>

            </div>
        </>
    )
}

export default Footer
