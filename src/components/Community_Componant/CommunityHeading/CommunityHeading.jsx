import React from 'react'
import Styled from './CommunityHeading.module.css';

import img1 from '../../../Image/1_3.png'
import img2 from '../../../Image/1_4.png'
import image from '../../../Image/12.png'


const CommunityHeading = () => {
    return (
        <div className={Styled.comm}>
            <img src={image} alt="" />
            <div className={Styled.text}>
                <h1>Truward Community</h1>
            </div>
        </div>
    )
}

export default CommunityHeading