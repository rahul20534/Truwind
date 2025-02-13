import React from 'react'
import { useState } from 'react';
import Style from './Testinomal.module.css';
import message from '../../Icon/message.svg';
import right from '../../Icon/rightarrow.svg';
import left from '../../Icon/leftarrow.svg';
import girl from '../../Image/img10.png';


const Testinomal = () => {
    const testimonials = [
        { id: 1, text: "It was a pleasure to be a part of such an inspiring gathering. Looking forward to seeing this community thrive and grow together.", Author: "Asit", Member: 'Founder mindful vidya' },
        { id: 2, text: "It was a very well thought through interaction, Enjoyed the sumptuous spread and the enriching discussions, More power to the Truward community. God Bless.", Author: 'Aman Bandvi', Member: 'Co-founder, India blockchain alliance' },
        { id: 3, text: "I felt a different energy there. What an amazing evening. Full of joy, love and passion. Will surely spread the word about Truward, it's vision and it's larger purpose. I am sure everyone will resonate with it. What an amazing gathering. God bless", Author: 'Tarun Gupta', Member: 'founder VaidyaRX' },
        { id: 4, text: "Thank you Aashi. It takes conviction to attempt what you have started. Enjoyed the gathering of like minded folks with unique perspectives. Tell me in what way I can support your cause.", Author: 'Anurag Bhartiya', Member: 'business advisor and coach' },
        { id: 5, text: "I’m grateful to be a part of something so inspirational. With gratitude and every blessing,", Author: "Pooja", Member: 'founder PLM Ecosystem' },
        { id: 6, text: "My experience with Truward has been truly inspiring. They’re doing an amazing job of connecting personal fulfillment with purpose-driven work, sparking conversations among professionals and businesses that genuinely impact people and the planet. The Conscious Supper Club was a highlight—bringing together like-minded individuals for meaningful discussions and practical insights on conscious leadership, all within a thoughtfully curated dining experience. Truward is redefining what it means to do business for good, and I'm glad to be part of their journey.", Author: "Rashmick Bose", Member: 'Co-Founder, Lafaani' },
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

                <p className={Style.para}>
                    {currentTestimonial.text}
                </p>

                <div className={Style.author}>
                    <div className={Style.image}>
                        
                        <div className={Style.name}>
                            <h1>{currentTestimonial.Author}</h1>
                            <p>{currentTestimonial.Member}</p>

                        </div>

                    </div>

                    <div className={Style.arrow}>
                        <div className={Style.left} onClick={handlePrevious}>
                            <img src={left} alt="" />

                        </div>
                        <div className={Style.right} onClick={handleNext}>
                            <img src={right} alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Testinomal