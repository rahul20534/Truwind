import React from 'react'
import styled from './Contact.module.css';
import Footer from '../../components/Footer/Footer';



//logo
import Logo from '../../Image/Newlogo.jpg';


const Contact = () => {
    return (
        <>
            <div className={styled.contect}>
                <div className={styled.member}>
                    <h1>Membership Form</h1>
                    <p>Truward is a conscious business education and impact-driven community. Our members are individuals committed to creating a positive change in their spheres of influence. By filling out this form, you’re joining a movement that fosters collaboration, innovation, and purpose.</p>
                </div>

                <div className={styled.form}>
                    <div className={styled.logo}>
                        <img src={Logo} alt="" />
                        <h1>Join the Truward community!</h1>

                    </div>

                    <div className={styled.formlayer}>
                        {/* So this form is for  row form in which 2 input are taking */}
                        <div className={styled.upperform}>
                            {/* Targeting row wise of input So this first row */}
                            <div className={styled.row1}>
                                <div className={styled.name}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">Name</label>
                                        <p>We’d love to address you personally.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your name' />
                                </div>

                                <div className={styled.email}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">Email ID</label>
                                        <p>Your email will help us share updates, resources and exclusive opportunities.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your email' />
                                </div>
                            </div>

                            {/* This is the row 2 in upper form */}

                            <div className={styled.row2}>
                                <div className={styled.phone}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">Phone Number</label>
                                        <p>For important updates and personalized communication.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your number' />
                                </div>

                                <div className={styled.city}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">City/State</label>
                                        <p>To connect you with local initiatives and events.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your City/State' />
                                </div>
                            </div>

                            {/* this is row 3 in upper form */}

                            <div className={styled.row3}>
                                <div className={styled.work}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">Current Work Profile/Role</label>
                                        <p>Tell us what you do and what drives you professionally.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your answer' />
                                </div>

                                <div className={styled.profile}>
                                    <div className={styled.inputfield}>
                                        <label htmlFor="">LinkedIn Profile URL</label>
                                        <p>We would love to learn more about your journey and connect with you.</p>

                                    </div>

                                    <input type="text" placeholder='Enter your link' />
                                </div>
                            </div>



                        </div>

                        {/* Now this is lowerlayer of form in which single input is here */}

                        <div className={styled.lowerlayer}>
                            <div className={styled.row4}>
                                <div className={styled.inputfield}>
                                    <label htmlFor="">Do you believe you are creating an impact in your community or work?</label>
                                    <p>Yes/No/Not sure.</p>

                                </div>
                                <textarea name="" id="" placeholder='Enter your answer'></textarea>

                            </div>

                            {/* this is row 5  */}

                            <div className={styled.row5}>
                                <div className={styled.inputfield}>
                                    <label htmlFor="">If yes, we’d love to know how!</label>
                                    <p>Feel free to share any projects, initiatives, or contributions that you’re proud of.</p>

                                </div>
                                <textarea name="" id="" placeholder='Enter your answer'></textarea>

                            </div>


                            {/* this is row6 */}

                            <div className={styled.row6}>
                                <div className={styled.inputfield}>
                                    <label htmlFor="">Why do you want to be a part of the TrueWord community?
                                    </label>
                                    <p>This helps us understand your motivation and aspirations.</p>

                                </div>
                                <textarea name="" id="" placeholder='Enter your answer'></textarea>

                            </div>

                            {/* this is row7 */}

                            <div className={styled.row7}>
                                <div className={styled.inputfield}>
                                    <label htmlFor="">What topics, causes, or areas of impact interest you the most?

                                    </label>
                                    <p>Examples: Environment, education, entrepreneurship, conscious living, etc.</p>

                                </div>
                                <textarea name="" id="" placeholder='Enter your answer'></textarea>

                            </div>

                            {/* this is row8 */}

                            <div className={styled.row8}>
                                <div className={styled.inputfield}>
                                    <label htmlFor="">How do you hope to contribute to the TrueWord community?

                                    </label>
                                    <p>We believe every member brings unique strengths. Share yours!</p>

                                </div>
                                <textarea name="" id="" placeholder='Enter your answer'></textarea>

                            </div>

                        </div>


                    </div>

                    
                <div className={styled.btns}>
                    <button className={styled.cancel}>Cancel</button>
                    <button className={styled.submit}>Submit</button>

                </div>


                </div>


            </div>
            <Footer showHeading={false} customText="Home" CustomClick={"/"}></Footer>
        </>
    )
}

export default Contact
