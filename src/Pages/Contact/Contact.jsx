import React from 'react';
import styled from './Contact.module.css';
import Footer from '../../components/Footer/Footer';

//logo
import Logo from '../../Image/Newlogo.jpg';

const Contact = () => {
    return (
        <>
            <div className={styled.contact}>
                <div className={styled.member}>
                    <h1>Membership Form</h1>
                    <p>Truward is a conscious business education and impact-driven community. Our members are individuals committed to creating a positive change in their spheres of influence. By filling out this form, you’re joining a movement that fosters collaboration, innovation, and purpose.</p>
                </div>

                <div className={styled.form}>
                    <div className={styled.logo}>
                        <img src={Logo} alt="Logo" />
                        <h1>Join the Truward community!</h1>
                    </div>

                    <div className={styled.formlayer}>
                        <div className={styled.upperform}>
                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Name</label>
                                    <p>We’d love to address you personally.</p>
                                    <input type="text" placeholder="Enter your name" />
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>Email ID</label>
                                    <p>Your email will help us share updates, resources and exclusive opportunities.</p>
                                    <input type="email" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Phone Number</label>
                                    <p>For important updates and personalized communication.</p>
                                    <input type="text" placeholder="Enter your number" />
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>City/State</label>
                                    <p>To connect you with local initiatives and events.</p>
                                    <input type="text" placeholder="Enter your City/State" />
                                </div>
                            </div>

                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Current Work Profile/Role</label>
                                    <p>Tell us what you do and what drives you professionally.</p>
                                    <input type="text" placeholder="Enter your answer" />
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>LinkedIn Profile URL</label>
                                    <p>We would love to learn more about your journey and connect with you.</p>
                                    <input type="text" placeholder="Enter your link" />
                                </div>
                            </div>
                        </div>

                        <div className={styled.lowerlayer}>
                            {[
                                {
                                    label: "Do you believe you are creating an impact in your community or work?",
                                    placeholder: "Yes/No/Not sure."
                                },
                                {
                                    label: "If yes, we’d love to know how!",
                                    placeholder: "Feel free to share any projects or contributions."
                                },
                                {
                                    label: "Why do you want to be a part of the TrueWord community?",
                                    placeholder: "This helps us understand your motivation."
                                },
                                {
                                    label: "What topics, causes, or areas of impact interest you the most?",
                                    placeholder: "Examples: Environment, education, entrepreneurship, etc."
                                },
                                {
                                    label: "How do you hope to contribute to the TrueWord community?",
                                    placeholder: "We believe every member brings unique strengths. Share yours!"
                                }
                            ].map((field, index) => (
                                <div key={index} className={styled.textAreaContainer}>
                                    <label>{field.label}</label>
                                    <textarea placeholder={field.placeholder}></textarea>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styled.btns}>
                        <button className={styled.cancel}>Cancel</button>
                        <button className={styled.submit}>Submit</button>
                    </div>
                </div>
            </div>
            <Footer showHeading={false} customText="Home" CustomClick="/" />
        </>
    );
};

export default Contact;
