import React from 'react'
import styled from './Footer.module.css';
import { useNavigate } from "react-router-dom";


//icon

import Instagram from '../../Icon/instagram 2.svg';
import Linkdin from '../../Icon/LinkedIn.svg';
import Email from '../../Icon/email.svg';
import Truwind from '../../Icon/Truwind.svg';
import whitearrow from '../../Icon/whitearrow.svg';


const Footer = ({ showHeading = true, customText,CustomClick}) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styled.footer}>
                <div className={styled.mainfooter}>
                    

                    <div className={styled.form}>
                        
                        <div className={styled.btn}>
                                <button onClick={()=> navigate(CustomClick || "/Contact")}>{customText||"Leave Us A Message"}<img src={whitearrow} alt="" /></button>
                        </div>

                    </div>

                    <div className={styled.icon}>
                        <div className={styled.text}>
                            {showHeading && <h1>Stay updated on our events, initiatives, and community highlights!</h1>}
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
