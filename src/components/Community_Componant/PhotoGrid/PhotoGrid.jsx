import React from 'react'
import Styled from './PhotoGrid.module.css';



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
