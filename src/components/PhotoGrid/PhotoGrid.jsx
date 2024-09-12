import React, { useEffect, useRef } from 'react'

//styles
import styles from './PhotoGrid.module.css'

//images
import image1 from '../../Image/img.jpg';
import image2 from '../../Image/img1.jpg';
import image3 from '../../Image/img3.jpg';
import image4 from '../../Image/img4.jpg';
import image5 from '../../Image/img5.jpg';
import image6 from '../../Image/img6.jpg';

function PhotoGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      const scrollAmount = (grid.scrollWidth - grid.clientWidth) / 2;
      grid.scrollLeft = scrollAmount;
    }
  }, []);

  return (
    <div className={styles.photoGrid} ref={gridRef}>
      <img className={styles.image} src={image1} alt="Image 1" />
      <img className={styles.image} src={image2} alt="Image 2" />
      <img className={styles.image} src={image3} alt="Image 3" />
      <img className={styles.image} src={image4} alt="Image 4" />
      <img className={styles.image} src={image5} alt="Image 5" />
      <img className={styles.image} src={image6} alt="Image 6" />
    </div>
  )
}

export default PhotoGrid;
