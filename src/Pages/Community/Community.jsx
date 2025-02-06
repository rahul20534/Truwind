import React from 'react'

import Approach from '../../components/Community_Componant/Approach/Approach'
import CommunityHeading from '../../components/Community_Componant/CommunityHeading/CommunityHeading';
import OurCommunity from '../../components/Community_Componant/OurCommunity/Ourcommunity';
import Photogrid from '../../components/Community_Componant/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer'



const Community = ()=> {
  return (
    <>
    <CommunityHeading></CommunityHeading>
    <OurCommunity></OurCommunity>
    <Photogrid></Photogrid>
    <Approach></Approach>
   <Footer></Footer>
    
    </>
  )
}

export default Community
