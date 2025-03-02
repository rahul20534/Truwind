import React from 'react'
import styled from './Approach.module.css';
import community from '../../../Icon/community.svg';
import experience from '../../../Icon/experience.svg';
import network from '../../../Icon/netwrok.svg'

const Approach = () => {
  return (
    <div className={styled.Approach}>
        <h2>Our Approach</h2>

        <h1>Why community based learning</h1>

        <div className={styled.content}>
            <div className={styled.card}>
                <img src={community} alt="Community icon" />
                <h3>Collaboration Over Competition</h3>
                
                <p>We believe the greatest solutions emerge when we work together, not apart.
                </p>
            </div>

            <div className={styled.card}>
                <img src={experience} alt="Experience icon" />
                <h3>Humanity at the Core</h3>
                
                <p>Every action we take is rooted in conscious decision-making that uplifts and empowers.
                </p>
            </div>

            <div className={styled.card}>
                <img src={network} alt="Network icon" />
                <h3>Purposeful Growth</h3>
                
                <p>We're not chasing success—we're creating meaningful impact that transforms lives and the world.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Approach