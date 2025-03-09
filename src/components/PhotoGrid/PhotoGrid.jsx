import React, { useEffect, useRef } from 'react';
import styles from './PhotoGrid.module.css';

// Images
import image1 from '../../Image/1img.png';
import image2 from '../../Image/2img.png';
import image3 from '../../Image/3img.png';
import image4 from '../../Image/4img.png';
import image5 from '../../Image/5img.png';

const images = [image1, image2, image3, image4, image5];

function PhotoGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const grid = gridRef.current;
    if (!grid) return;

    let scrollAmount = 0;
    const scrollSpeed = 2; // Adjust speed of scrolling
    const maxScroll = grid.scrollWidth / 2; // Halfway point (before the duplicate set)

    const scrollImages = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0; // Reset smoothly
        grid.scrollLeft = 0;
      } else {
        grid.scrollLeft = scrollAmount;
      }
    };

    const interval = setInterval(scrollImages, 50); // Adjust interval for smoothness

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.photoGrid} ref={gridRef}>
      {/* Original Images */}
      {images.map((img, index) => (
        <img key={index} className={styles.image} src={img} alt={`Image ${index + 1}`} />
      ))}
      {/* Duplicate Images for Seamless Loop */}
      {images.map((img, index) => (
        <img key={`dup-${index}`} className={styles.image} src={img} alt={`Duplicate ${index + 1}`} />
      ))}
    </div>
  );
}

export default PhotoGrid;