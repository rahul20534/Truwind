import React from 'react'


//styles
import styles from './Navbar.module.css'

//assets
import Logo from '../../Image/Newlogo.jpg';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarOption}>
        <div>About</div>
        <div>Community</div>
        <div>Events</div>
        <div>Contact</div>
      </div>

      <div className={styles.logo}>
        <img src={Logo} alt="This is logo" />
      </div>

      <div className={styles.btnContainer}>
        <div className={styles.subBtn}>Subscribe</div>
      </div>
    </div>
  )
}

export default Navbar