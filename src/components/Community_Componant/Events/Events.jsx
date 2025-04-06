import style from './Events.module.css';
import { useState, useRef, useEffect } from 'react';

//image
import EventImage from "../../../Image/event.jpeg"
import DropdownIcon from "../../../Icon/dropdown.svg"

const Events = () => {
  const [openSection, setOpenSection] = useState('dinners');
  const [contentHeights, setContentHeights] = useState({
    dinners: null,
    mixers: null,
    workshops: null,
    webinars: null
  });

  const contentRefs = {
    dinners: useRef(null),
    mixers: useRef(null),
    workshops: useRef(null),
    webinars: useRef(null)
  };

  useEffect(() => {
    // Calculate and store heights for all content sections
    const heights = {
      
    };
    Object.keys(contentRefs).forEach(key => {
      if (contentRefs[key].current) {
        heights[key] = contentRefs[key].current.scrollHeight;
      }
    });
    setContentHeights(heights);
  }, []);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  const getContentStyle = (section) => {
    if (openSection === section) {
      return {
        maxHeight: `${contentHeights[section]}px`,
        opacity: 1,
        marginTop: '20px'
      };
    } else {
      return {
        maxHeight: 0,
        opacity: 0,
        padding: 0,
        marginTop: 0
      };
    }
  };

  return (
    <div className={style.events}>
      <h2 className={style.heading}>Events</h2>

      <div className={style.content}>
        <div className={style.header}>
          <h1>Curated Events for<br/>Everyone</h1>
        </div>

        <div className={style.cardContainer}>
          <div className={style.leftCard}>
            <img src={EventImage} alt="Truwind Event" className={style.eventImage} />
          </div>

          <div className={style.rightCard}>
            {/* Exclusive & Curated Dinners Section */}
            <div className={style.accordionSection}>
              <div 
                className={`${style.accordionHeader} ${openSection === 'dinners' ? style.active : ''}`}
                onClick={() => toggleSection('dinners')}
              >
                <h3>Exclusive & Curated Dinners</h3>
                <img 
                  src={DropdownIcon} 
                  alt="Toggle" 
                  className={`${style.dropdownIcon} ${openSection === 'dinners' ? style.rotate : ''}`}
                />
              </div>
              <div 
                className={style.accordionContent} 
                style={getContentStyle('dinners')}
                ref={contentRefs.dinners}
              >
                <p>Small, intimate gatherings with handpicked changemakers to inspire deep conversations and lasting connections.</p>
              </div>
            </div>

            {/* Impact Mixers Section */}
            <div className={style.accordionSection}>
              <div 
                className={`${style.accordionHeader} ${openSection === 'mixers' ? style.active : ''}`}
                onClick={() => toggleSection('mixers')}
              >
                <h3>Impact Mixers</h3>
                <img 
                  src={DropdownIcon} 
                  alt="Toggle" 
                  className={`${style.dropdownIcon} ${openSection === 'mixers' ? style.rotate : ''}`}
                />
              </div>
              <div 
                className={style.accordionContent} 
                style={getContentStyle('mixers')}
                ref={contentRefs.mixers}
              >
                <p>High-energy, large-format networking evenings for purpose-driven professionals, creators, founders, and innovators.</p>
              </div>
            </div>

            {/* Conscious Business Workshops Section */}
            <div className={style.accordionSection}>
              <div 
                className={`${style.accordionHeader} ${openSection === 'workshops' ? style.active : ''}`}
                onClick={() => toggleSection('workshops')}
              >
                <h3>Conscious Business Workshops</h3>
                <img 
                  src={DropdownIcon} 
                  alt="Toggle" 
                  className={`${style.dropdownIcon} ${openSection === 'workshops' ? style.rotate : ''}`}
                />
              </div>
              <div 
                className={style.accordionContent} 
                style={getContentStyle('workshops')}
                ref={contentRefs.workshops}
              >
                <p>Hands-on sessions and deep dives into topics like conscious capitalism, stakeholder mapping, and impact strategy.</p>
              </div>
            </div>

            {/* Webinars & Live Learning Section */}
            <div className={style.accordionSection}>
              <div 
                className={`${style.accordionHeader} ${openSection === 'webinars' ? style.active : ''}`}
                onClick={() => toggleSection('webinars')}
              >
                <h3>Webinars & Live Learning</h3>
                <img 
                  src={DropdownIcon} 
                  alt="Toggle" 
                  className={`${style.dropdownIcon} ${openSection === 'webinars' ? style.rotate : ''}`}
                />
              </div>
              <div 
                className={style.accordionContent} 
                style={getContentStyle('webinars')}
                ref={contentRefs.webinars}
              >
                <p>Interactive digital sessions, Q&As with experts, and self-paced modules to bring conscious business learning to your screen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events