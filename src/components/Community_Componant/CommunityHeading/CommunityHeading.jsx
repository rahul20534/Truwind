import React from 'react'
import Styled from './CommunityHeading.module.css';

const CommunityHeading = () => {
    return (
        <div className={Styled.communityheading}>

            <h1>This is the <span>community</span> page of Truward</h1>
            <p>Connect online and in-person, find opportunities, learn, work, travel and
                grow with a community of persons just like you.
            </p>
        
        </div>
    )
}

export default CommunityHeading
