import React from 'react'
import { Link } from 'react-router-dom';


//styles
import styles from './Navbar.module.css'

//assets
import Logo from '../../Image/Newlogo.jpg';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarOption}>
        <div>
          <Link to='/About'
            style={{ textDecoration: 'none', color: '#525252' }}>About</Link>
        </div>
        <div>
          <Link to='/Community'
            style={{ textDecoration: 'none', color: '#525252' }}>Community</Link>
        </div>
        <div>
          <Link to='/Event'
            style={{ textDecoration: 'none', color: '#525252' }}>Events</Link>
        </div>
        <div>
          <Link to='/Contact'
            style={{ textDecoration: 'none', color: '#525252' }}>Contact</Link>
        </div>
      </div>

      <div className={styles.logo}>
        <Link to='/'>
        <img src={Logo} alt="This is logo" />
        </Link>
      </div>

      <div className={styles.btnContainer}>
        <div className={styles.subBtn}>Subscribe</div>
      </div>
    </div>
  )
}

export default Navbar