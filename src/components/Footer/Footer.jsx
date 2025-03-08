import React from 'react';
import styles from './Footer.module.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// Icon Imports
import Instagram from '../../Icon/instagram 2.svg';
import LinkedIn from '../../Icon/LinkedIn.svg';
import Email from '../../Icon/email.svg';
import TruWind from '../../Icon/Truwind.svg';
import whiteArrow from '../../Icon/one.svg';

const Footer = ({ showHeading = true, customText, CustomClick }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>

                {/* Call-to-Action Section */}
                <div className={styles.footerCta}>
                    <div className={styles.ctaButton}>
                        <button onClick={() => navigate(CustomClick || "/Contact")}>
                            {customText || "Join Our Movement"}
                            <img src={whiteArrow} alt="arrow" />
                        </button>
                    </div>
                </div>

                {/* Info & Social Section */}
                <div className={styles.footerInfoSection}>
                    <div className={styles.footerInfo}>
                        {showHeading && (
                            <h1>
                                Stay updated on our events, initiatives, and community highlights!
                            </h1>
                        )}
                        <p>Follow us on</p>
                    </div>

                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <a
                                href="https://www.linkedin.com/company/truward/?originalSubdomain=in"
                                target="_blank"
                                rel="noopener noreferrer"

                            >
                                <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <a
                                href="https://www.instagram.com/truwardconnect?igsh=MTRlMDNpOGNoYWV6Mg=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Instagram} alt="Instagram" />
                            </a>
                        </div>
                        <div className={styles.socialIcon}>
                            <img src={Email} alt="Email" />
                        </div>
                    </div>

                    <div className={styles.footerNav}>
                        <Link to="/">About</Link>
                        <Link to="/Community">Community</Link>
                        <Link to="/" className={styles.event}>
                            Events <span className={styles.comingSoon}>(Coming Soon)</span>
                        </Link>
                    </div>
                </div>

                {/* Watermark Section */}
                <div className={styles.footerWatermark}>
                    <h1>2025 © Truward. All rights reserved.</h1>
                    <img src={TruWind} alt="TruWind" />
                </div>

            </div>
        </div>
    );
};

export default Footer;
