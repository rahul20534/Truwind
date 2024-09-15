import React from 'react'
import Style from './Testinomal.module.css';
import message from '../../Icon/message.svg';
import right from '../../Icon/rightarrow.svg';
import left from '../../Icon/leftarrow.svg';
import girl from '../../Image/img10.png';


const Testinomal = () => {
    return (
        <>
            <div className={Style.testinomal}>
                <h2>Testinomal</h2>

                <div className={Style.message}>
                    <h1>What they say</h1>
                    <img src={message} />
                </div>

                <p>"This product has completely transformed our workflow.
                    It's intuitive, powerful, and a joy to use every day.
                    This product has completely transformed our workflow.
                    It's intuitive, powerful, and a joy to use every day."
                    It's intuitive, powerful, and a joy to use every day."
                </p>

                <div className={Style.image}>
                    <img src={girl} />
                    <div className={Style.name}>
                        <h2>Michael Chen</h2>
                        <p1>Student</p1>
                    </div>

                    <div className={Style.arrow}>
                        <img src={left} />
                        <img src={right} />

                    </div>

                </div>

            </div>

        </>
    )
}

export default Testinomal