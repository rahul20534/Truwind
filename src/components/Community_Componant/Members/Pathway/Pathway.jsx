import style from './Pathway.module.css'

//image
import PathwayImage from "../../../../Image/pathway.jpeg"
import Logo from "../../../../Image/LOGO.png"
import TICK from "../../../../Icon/TICKBLACK.svg"

const Pathway = () => {
  return (
    <div className={style.card}>
      <div className={style.contentSide}>
        <div className={style.logoSection}>
          <img src={Logo} alt="Truwind Logo" className={style.logo} />
          <span className={style.cardType}>Pathway</span>
        </div>
        
        <h2 className={style.title}>For Emerging Change makers and future leaders.</h2>
        
        <p className={style.description}>
          A dynamic learning and action community for purpose-driven
          individuals on the path to impact.
        </p>
        
        <div className={style.benefitsList}>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            Educational workshops, open mixers, and events
          </div>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            Impact-based learning resources and toolkits
          </div>
          <div className={style.benefitItem}>
            <img className={style.checkIcon} src={TICK} alt="TICK"/>
            Nominations from Inner Circle members to join the exclusive network
          </div>
        </div>
      </div>
      
      <div className={style.imageSide}>
        <img src={PathwayImage} alt="Pathway Community" className={style.cardImage} />
      </div>
      <div className={style.ribbon}>Coming soon</div>
    </div>
  )
}

export default Pathway