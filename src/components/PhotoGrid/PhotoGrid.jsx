import React, { useEffect, useRef } from 'react';
import styles from './PhotoGrid.module.css';

// Images
import image1 from '../../Image/Gal/1.jpeg';
import image2 from '../../Image/Gal/2.jpeg';
import image3 from '../../Image/Gal/3.jpg';
import image4 from '../../Image/Gal/4.jpeg';
import image5 from '../../Image/Gal/5.jpg';
import image6 from '../../Image/Gal/6.jpeg';
import image7 from '../../Image/Gal/7.jpg';
import image8 from '../../Image/Gal/8.jpeg';
import image9 from '../../Image/Gal/9.jpeg';
import image10 from '../../Image/Gal/10.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10];

function PhotoGrid() {
  const containerRef = useRef(null);
  const innerContainerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const innerContainer = innerContainerRef.current;
    
    if (!container || !innerContainer) return;
    
    // Calculate the total width of all images
    const calculateTotalWidth = () => {
      let totalWidth = 0;
      const imageElements = Array.from(innerContainer.children);
      
      imageElements.forEach(img => {
        const styles = window.getComputedStyle(img);
        totalWidth += img.offsetWidth + 
                      parseFloat(styles.marginLeft) + 
                      parseFloat(styles.marginRight);
      });
      
      return totalWidth / 2; // Divide by 2 because we have duplicates
    };
    
    // Set animation duration based on content width
    const setAnimationDuration = () => {
      const totalWidth = calculateTotalWidth();
      // Slower for wider content (adjust multiplier for speed)
      const duration = totalWidth * 0.02; 
      
      // Apply the animation duration
      innerContainer.style.animationDuration = `${duration}s`;
    };
    
    // Initial setup
    setAnimationDuration();
    
    // Update on resize
    const handleResize = () => {
      setAnimationDuration();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className={styles.photoGridContainer} ref={containerRef}>
      <div className={styles.photoGridInner} ref={innerContainerRef}>
        {/* Original Images */}
        {images.map((img, index) => (
          <img key={index} className={styles.image} src={img} alt={`Image ${index + 1}`} />
        ))}
        {/* Duplicate Images for Seamless Loop */}
        {images.map((img, index) => (
          <img key={`dup-${index}`} className={styles.image} src={img} alt={`Duplicate ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;
