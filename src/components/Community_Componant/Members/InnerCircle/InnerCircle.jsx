import style from './InnerCircle.module.css'
import { useNavigate } from 'react-router-dom'

//image
import InnerCircleImage from "../../../../Image/InnerCircle.jpeg"
import Logo from "../../../../Image/LOGO.png"
import TICK from "../../../../Icon/TICKWHITE.svg"
import arrow from '../../../../Icon/whitearrow.svg';


const InnerCircle = () => {
  const navigate = useNavigate();

  return (
    <div className={style.card}>
      <div className={style.contentSide}>
        <div className={style.logoSection}>
          <img src={Logo} alt="Truwind Logo" className={style.logo} />
          <span className={style.cardType}>Inner Circle</span>
        </div>

        <h2 className={style.title}>For Impact leaders and change makers</h2>

        <p className={style.description}>
          A handpicked network of impact leaders, entrepreneurs,
          thinkers and visionaries driving conscious change.
          Access Includes:
        </p>

        <div className={style.benefitsList}>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            Invite-only conscious dinners and private networking events
          </div>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            Early access to programs
          </div>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            VIP access at summits and curated collaborations
          </div>
        </div>

        <button className={style.applyButton} onClick={() => navigate('/Contact')}>
          Apply Now <img src={arrow} alt="arrow" className={style.arrow}/>
        </button>
      </div>

      <div className={style.imageSide}>
        <img src={InnerCircleImage} alt="Inner Circle Event" className={style.cardImage} />
      </div>
      <div className={style.ribbon}>Exclusive</div> 
    </div>
  )
}

export default InnerCircle