import React from 'react'
import Styles from './Value.module.css';
import Humanlogo from '../../Icon/human.jpg';
import Circularlogo from '../../Icon/circular.jpg';
import Arrowlogo from '../../Icon/arrow.jpg';

const Value = () => {
    return (
        <>
            <div className={Styles.value}>
                <h2>Our Values</h2>

                <div className={Styles.mainvalue}>
                    <div className={Styles.heading}>
                        <h1>We promise the best </h1>
                        <h1>values in a community</h1>
                    </div>



                    <div className={Styles.mainvalue_section}>
                        <div className={Styles.value_row1}>
                            <div className={Styles.expertise}>
                                <img src={Humanlogo} alt="Logo" />
                                <div className={Styles.expertise_section}>
                                    <h1>Expertise</h1>
                                    <p>Truward is a community-driven conscious business education company
                                        dedicated to catalysing profound change in the business landscape.
                                    </p>

                                </div>

                            </div>

                            <div className={Styles.process}>
                                <img src={Circularlogo} alt="Logo" />
                                <div className={Styles.process_section}>
                                    <h1>Process</h1>
                                    <p>Truward is a community-driven conscious business education company
                                        dedicated to catalysing profound change in the business landscape.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className={Styles.value_row2}>
                            <div className={Styles.purpose}>
                                <img src={Arrowlogo} alt="Logo" />
                                <div className={Styles.purpose_section}>
                                    <h1>Purpose</h1>
                                    <p>Truward is a community-driven conscious business education company
                                        dedicated to catalysing profound change in the business landscape.
                                    </p>
                                </div>

                            </div>

                            <div className={Styles.motto}>
                                <img src={Circularlogo} alt="Logo" />
                                <div className={Styles.motto_section}>
                                    <h1>Motto</h1>
                                    <p>Truward is a community-driven conscious business education company
                                        dedicated to catalysing profound change in the business landscape.
                                    </p>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}

export default Value;
