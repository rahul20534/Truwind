import React, { useEffect, useRef } from 'react'

//styles
import styles from './PhotoGrid.module.css'

//images
import image1 from '../../Image/1img.png';
import image2 from '../../Image/2img.png';
import image3 from '../../Image/3img.png';
import image4 from '../../Image/4img.png';
import image5 from '../../Image/5img.png';


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
      
    </div>
  )
}

export default PhotoGrid;
