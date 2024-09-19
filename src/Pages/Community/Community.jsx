import React from 'react'
import Style from './Community.module.css';
import CommunityHeading from '../../components/Community_Componant/CommunityHeading/CommunityHeading'
import Ourcommunity from '../../components/Community_Componant/OurCommunity/Ourcommunity';
import PhotoGrid from '../../components/Community_Componant/PhotoGrid/PhotoGrid';
import Approach from '../../components/Community_Componant/Approach/Approach'


const Community = ()=> {
  return (
    <>
     <CommunityHeading></CommunityHeading>
     <Ourcommunity></Ourcommunity>
     <PhotoGrid></PhotoGrid>
     <Approach></Approach>
    
    
    </>
  )
}

export default Community
