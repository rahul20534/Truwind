import React from 'react'
import Styled from './PhotoGrid.module.css';
import img1 from '../../../Image/img11.png';
import img2 from '../../../Image/img12.png';
import img3 from '../../../Image/img13.png';
import img4 from '../../../Image/img14.png';
import img5 from '../../../Image/img15.png';
import img6 from '../../../Image/img16.png';
import img7 from '../../../Image/img17.png';



const PhotoGrid = () => {
    return (
        <>
            <div className={Styled.photogrid}>
                <div className={Styled.photo}>
                    <div className={Styled.row1}>
                        <div className={Styled.row1_img1}>
                            <img src={img1} />
                        </div>

                        <div className={Styled.row1_img2}>
                            <img src={img2} />
                        </div>

                        <div className={Styled.row1_img3}>
                            <img src={img3} />
                        </div>

                    </div>

                    <div className={Styled.row2}>
                        <div className={Styled.row2_img4}>
                            <img src={img4} />
                        </div>

                        <div className={Styled.row2_img5}>
                            <img src={img5} />
                        </div>
                    </div>

                    <div className={Styled.row3}>
                        <div className={Styled.row3_img6}>
                            <img src={img6} />
                        </div>

                        <div className={Styled.row3_img7}>
                            <img src={img7} />
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default PhotoGrid
