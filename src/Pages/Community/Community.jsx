
import Approach from '../../components/Community_Componant/Approach/Approach'
import CommunityHeading from '../../components/Community_Componant/CommunityHeading/CommunityHeading';
import OurCommunity from '../../components/Community_Componant/OurCommunity/Ourcommunity';
import Photogrid from '../../components/Community_Componant/PhotoGrid/PhotoGrid';
import Footer from '../../components/Footer/Footer'
import Members from '../../components/Community_Componant/Members/Members';
import Events from '../../components/Community_Componant/Events/Events';


const Community = () => {
  return (
    <>
      <CommunityHeading />
      <OurCommunity />
      <Members />
      <Photogrid />
      <Approach />
      <Events />
      <Footer />
    </>
  )
}

export default Community
