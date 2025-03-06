import React from 'react'
import Styled from './CommunityHeading.module.css';

import img1 from '../../../Image/1_3.png'
import img2 from '../../../Image/1_4.png'
import image from '../../../Image/communitybanner.png'


const CommunityHeading = () => {
    return (
        <div className={Styled.communityheading}>
            <div className={Styled.main}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default CommunityHeading