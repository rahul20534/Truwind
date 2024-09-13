import React from "react";
import Styles from './About.module.css';

const About = () => {
    return (
        <>
            <div className={Styles.about}>
                <h2>About Truward</h2>

                <div className={Styles.content}>
                    <div className={Styles.header}>
                        <h1>Where else to start but at </h1>
                        <h1>the beginning</h1>
                    </div>

                    <div className={Styles.para_one}>
                        <p>That will help you to unleash your superpowers Truward is a
                            community-driven conscious business education company dedicated
                            to catalysing profound change in the business landscape.
                        </p>

                        <p>
                            A community of more than 1000+ people all around the world. This
                            is a sample text for the about section for Truward
                        </p>

                    </div>

                </div>

            </div>
        </>
    )

}


export default About;

