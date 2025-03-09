import React from 'react'
import Styled from './CommunityHeading.module.css';


import image from '../../../Image/12.png'


const CommunityHeading = () => {
    return (
        <div className={Styled.comm}>
            <div className={Styled.text}>
                <h1>Truward Community</h1>
            </div>
        </div>
    )
}

export default CommunityHeading