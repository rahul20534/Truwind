import React from 'react'
import { useState } from 'react';
import Style from './Testinomal.module.css';
import message from '../../Icon/message.svg';
import right from '../../Icon/rightarrow.svg';
import left from '../../Icon/leftarrow.svg';
import girl from '../../Image/img10.png';


const Testinomal = () => {
    const testimonials = [
        { id: 1, text: "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day." },
        { id: 2, text: "The features and functionality exceeded my expectations. The interface is clean and user-friendly. I couldn't be happier with the results I've achieved." },
        { id: 3, text: "Outstanding support and regular updates keep making this product better. It has become an essential part of my daily workflow." },
        { id: 4, text: "I'm impressed by the attention to detail and the thoughtful design. It's clear that the team really understands what users need." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <>
            <div className={Style.testinomal}>
                <h2>Testinomal</h2>

                <div className={Style.message}>
                    <h1>What they say</h1>
                    <img src={message} />
                </div>

                <p>
                {currentTestimonial.text}
                </p>

                <div className={Style.image}>
                    <img src={girl} />
                    <div className={Style.name}>
                        <h2>Michael Chen</h2>
                        <p1>Student</p1>
                    </div>

                    <div className={Style.arrow}>
                        <img src={left} onClick={handlePrevious} />
                        <img src={right} onClick={handleNext}/>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Testinomal