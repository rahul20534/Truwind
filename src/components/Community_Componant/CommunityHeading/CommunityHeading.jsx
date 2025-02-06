import React from 'react'
import Styled from './CommunityHeading.module.css';

import img1 from '../../../Image/img12.png'
import img2 from '../../../Image/img14.png'

const CommunityHeading = () => {
    return (
        <div className={Styled.communityheading}>
            <div className={Styled.main}>



                <div className={Styled.text1}>
                    <h1>This is the community </h1>
                    <img src={img1} alt="" />

                </div>

                <div className={Styled.text2}>
                    <img src={img2} alt="" />
                    <h1>page of Truward</h1>

                </div>
            </div>
        </div>
    )
}

export default CommunityHeading
