import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

//styles
import styles from './Navbar.module.css'

//assets
import Logo from '../../Image/Newlogo.jpg';

const Navbar = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClick = () => {
    navigate('/Contact');
  };
  
  return (
    <div className={styles.navbar}>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      <div className={`${styles.navbarOption} ${menuOpen ? styles.open : ''}`}>
        <div onClick={closeMenu}>
          <Link to=''
            style={{ textDecoration: 'none', color: '#525252' }}>About</Link>
        </div>
        <div onClick={closeMenu}>
          <Link to='/Community'
            style={{ textDecoration: 'none', color: '#525252' }}>Community</Link>
        </div>
        <div className={styles.event} onClick={closeMenu}>
          <Link
            style={{ textDecoration: 'none', color: '#525252' }}>Events</Link>
            <span>(Coming soon)</span>
        </div>
      </div>

      <div className={styles.logo}>
        <Link to='/' onClick={closeMenu}>
        <img src={Logo} alt="This is logo" />
        </Link>
      </div>

      <div className={styles.btnContainer}>
        <div className={styles.subBtn} onClick={handleClick}>Join the community</div>
      </div>
    </div>
  )
}

export default Navbar