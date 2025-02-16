import React from 'react'
import Styles from './Leader.module.css';
import image from '../../Image/img9.jpg';
import Play from '../../Icon/play.svg';

const Leader = () => {
    return (
        <>
            <div className={Styles.leader}>
                <div className={Styles.title}>
                    <h1>Leadership</h1>

                </div>
                <div className={Styles.headline}>
                    <h1>Join The Movement to Shape Business For Greater Humanity</h1>
                </div>

                <div className={Styles.image}>
                    <img className={Styles.img1} src={image} alt="image" />
                </div>

                <div className={Styles.founder}>
                    <h1>Aashi Goel <span>Founder</span></h1>
                </div>


            </div>
        </>

    )
}

export default Leader