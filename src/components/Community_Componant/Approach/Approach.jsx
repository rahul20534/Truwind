import React from 'react'
import styled from './Approach.module.css';
import community from '../../../Icon/community.svg';
import experience from '../../../Icon/experience.svg';
import network from '../../../Icon/netwrok.svg'

const Approach =()=> {
  return (
    <>
    <div className={styled.Approach}>
        <h2>Our Approach</h2>

        <h1>Why community based learning</h1>

        <div className={styled.content}>
            <div className={styled.community}>
                <img src={community}/>
                <h3>Value of community</h3>
                <p>At Truward, we recognise the pivotal role community plays
                     in any educational and life transforming journey. A thriving
                      community is built upon a foundation of trust, shared values, 
                      and meaningful connections.
                </p>

            </div>

            <div className={styled.experience}>
                <img src={experience}/>
                <h3>Range of experiences</h3>
                <p>Through these experiences, we aim to foster deep connections,
                     inspire collaborative ventures, and create a strong sense of 
                     belonging. Members will find support, inspiration, and opportunities 
                     for collaboration that can propel their individual journeys forward.
                </p>

            </div>

            <div className={styled.network}>
                <img src={network}/>
                <h3>Network building</h3>
                <p>At Truward you will be able to access a network of like minded 
                    individuals who are driven to create positive change. Together, 
                    we will harness the collective wisdom and energy of our community 
                    to drive meaningful change, both within ourselves and in the broader world.
                </p>

            </div>


        </div>

    </div>
    
    </>

  )
}

export default Approach
