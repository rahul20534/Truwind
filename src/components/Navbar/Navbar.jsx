import {useState} from 'react'
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

//styles
import styles from './Navbar.module.css'

//assets
import Logo from '../../Image/Newlogo.jpg';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div className={styles.navbar}>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      <div className={`${styles.navbarOption} ${menuOpen ? styles.open : ''}`}>
        <div>
          <Link to=''
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