import React from 'react';
import Styled from './PhotoGrid.module.css';

import img1 from '../../../Image/1_5.png';
import img2 from '../../../Image/1_6.png';
import img3 from '../../../Image/1_8.png';
import img4 from '../../../Image/1_9.png';
import img5 from '../../../Image/1_0.png';
import img6 from '../../../Image/1_11.png';
import img7 from '../../../Image/1_12.png';

const PhotoGrid = () => {
    return (
        <div className={Styled.photogrid}>
            <div className={Styled.photo}>
                <div className={Styled.column}>
                    <div className={Styled.imgContainer}>
                        <img src={img1} alt="Gallery image 1" />
                    </div>
                    <div className={Styled.imgContainer}>
                        <img src={img2} alt="Gallery image 2" />
                    </div>
                    <div className={Styled.imgContainer}>
                        <img src={img3} alt="Gallery image 3" />
                    </div>
                </div>

                <div className={Styled.column}>
                    <div className={Styled.imgContainer}>
                        <img src={img4} alt="Gallery image 4" />
                    </div>
                    <div className={Styled.imgContainer}>
                        <img src={img5} alt="Gallery image 5" />
                    </div>
                </div>

                <div className={Styled.column}>
                    <div className={Styled.imgContainer}>
                        <img src={img6} alt="Gallery image 6" />
                    </div>
                    <div className={Styled.imgContainer}>
                        <img src={img7} alt="Gallery image 7" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGrid;