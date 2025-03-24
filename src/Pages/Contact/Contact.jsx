import React, { useState } from 'react';
import styled from './Contact.module.css';
import Footer from '../../components/Footer/Footer';

//logo
import Logo from '../../Image/Newlogo.jpg';

// API base URL - Use production URL or local development
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8080' 
    : 'https://truward-server.onrender.com';

const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: 'Rahul Kumar',
        email: 'beingrahuuldev@gmail.com',
        phone: '8287369332',
        cityState: 'New Delhi',
        workProfile: 'Software Engineer',
        linkedinUrl: 'https://www.linkedin.com/in/beingrahuul/',
        impactAnswer: 'Yes  ',
        impactDescription: 'I am a software engineer and I am creating an impact in my community by developing software solutions that help people in need.',
        joinReason: 'I want to be a part of the Truward community because I want to learn and grow as a software engineer and I want to help others in need.',
        interests: 'Software Development, Machine Learning, Artificial Intelligence',
        contribution: 'I want to contribute to the Truward community by sharing my knowledge and skills with others.'
    });

    // Error state
    const [errors, setErrors] = useState({});
    // Loading state
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Success message state
    const [successMessage, setSuccessMessage] = useState('');
    // Control success popup visibility
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
        // Clear success message when user starts typing
        if (successMessage) {
            setSuccessMessage('');
            setShowSuccessPopup(false);
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Required field validation
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Invalid phone number (10 digits required)';
        }
        if (!formData.cityState.trim()) newErrors.cityState = 'City/State is required';
        if (!formData.workProfile.trim()) newErrors.workProfile = 'Work Profile is required';
        if (!formData.impactAnswer.trim()) newErrors.impactAnswer = 'This field is required';
        if (!formData.impactDescription.trim()) newErrors.impactDescription = 'This field is required';
        if (!formData.joinReason.trim()) newErrors.joinReason = 'This field is required';
        if (!formData.interests.trim()) newErrors.interests = 'This field is required';
        if (!formData.contribution.trim()) newErrors.contribution = 'This field is required';

        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            try {
                const response = await fetch(`${API_BASE_URL}/api/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const data = await response.json();

                if (!response.ok || !data.success) {
                    throw new Error(data.message || 'Failed to submit form');
                }

                console.log('Form submitted successfully:', data.data);
                
                // Show success message from backend
                setSuccessMessage('Form submitted successfully! Thank you for joining the Truward community.');
                // Show success popup
                setShowSuccessPopup(true);
                
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    cityState: '',
                    workProfile: '',
                    linkedinUrl: '',
                    impactAnswer: '',
                    impactDescription: '',
                    joinReason: '',
                    interests: '',
                    contribution: ''
                });
            } catch (error) {
                console.error('Error submitting form:', error);
                setErrors({
                    submit: error.message || 'Failed to submit form. Please try again later.'
                });
            } finally {
                setIsSubmitting(false);
            }
        } else {
            // Form has errors
            setErrors(validationErrors);
            console.log('Form has errors:', validationErrors);
        }
    };

    // Handle cancel
    const handleCancel = () => {
        // Reset form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            cityState: '',
            workProfile: '',
            linkedinUrl: '',
            impactAnswer: '',
            impactDescription: '',
            joinReason: '',
            interests: '',
            contribution: ''
        });
        // Clear errors and success message
        setErrors({});
        setSuccessMessage('');
        setShowSuccessPopup(false);
    };

    // Close success popup
    const closeSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    return (
        <>
            <div className={styled.contact}>
                {/* Success Popup */}
                {showSuccessPopup && (
                    <div className={styled.successPopupOverlay}>
                        <div className={styled.successPopup}>
                            <div className={styled.successIcon}>
                                <div className={styled.checkmark}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 12 10 16 18 8"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <h3>{successMessage}</h3>
                            <button onClick={closeSuccessPopup} className={styled.closePopupBtn}>Close</button>
                        </div>
                    </div>
                )}

                <div className={styled.member}>
                    <h1>Membership Form</h1>
                    <p>Truward is a conscious business education and impact-driven community. Our members are individuals committed to creating a positive change in their spheres of influence. By filling out this form, you're joining a movement that fosters collaboration, innovation, and purpose.</p>
                </div>

                <form className={styled.form} onSubmit={handleSubmit}>
                    {errors.submit && (
                        <div className={styled.errorMessage}>
                            {errors.submit}
                        </div>
                    )}

                    <div className={styled.logo}>
                        <img src={Logo} alt="Logo" />
                        <h1>Join the Truward community!</h1>
                    </div>

                    <div className={styled.formlayer}>
                        <h1>Section 1</h1>
                        <hr />
                        <div className={styled.upperform}>
                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        className={errors.name ? styled.errorInput : ''}
                                    />
                                    {errors.name && <span className={styled.errorText}>{errors.name}</span>}
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>Email ID</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        className={errors.email ? styled.errorInput : ''}
                                    />
                                    {errors.email && <span className={styled.errorText}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Enter your number"
                                        className={errors.phone ? styled.errorInput : ''}
                                    />
                                    {errors.phone && <span className={styled.errorText}>{errors.phone}</span>}
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>City/State</label>
                                    <input
                                        type="text"
                                        name="cityState"
                                        value={formData.cityState}
                                        onChange={handleInputChange}
                                        placeholder="Enter your City/State"
                                        className={errors.cityState ? styled.errorInput : ''}
                                    />
                                    {errors.cityState && <span className={styled.errorText}>{errors.cityState}</span>}
                                </div>
                            </div>

                            <div className={styled.row}>
                                <div className={styled.inputContainer}>
                                    <label>Current Work Profile/Role</label>
                                    <input
                                        type="text"
                                        name="workProfile"
                                        value={formData.workProfile}
                                        onChange={handleInputChange}
                                        placeholder="Enter your answer"
                                        className={errors.workProfile ? styled.errorInput : ''}
                                    />
                                    {errors.workProfile && <span className={styled.errorText}>{errors.workProfile}</span>}
                                </div>
                                <div className={styled.inputContainer}>
                                    <label>LinkedIn Profile URL</label>
                                    <input
                                        type="url"
                                        name="linkedinUrl"
                                        value={formData.linkedinUrl}
                                        onChange={handleInputChange}
                                        placeholder="Enter your link"
                                    />
                                </div>
                            </div>
                            <h1>Section 2</h1>
                            <hr />
                        </div>

                        <div className={styled.lowerlayer}>
                            {[
                                {
                                    name: 'impactAnswer',
                                    label: "Do you believe you are creating an impact in your community or work?",
                                },
                                {
                                    name: 'impactDescription',
                                    label: "If yes, we'd love to know how!",
                                },
                                {
                                    name: 'joinReason',
                                    label: "Why do you want to be a part of the Truward community?",
                                },
                                {
                                    name: 'interests',
                                    label: "What topics, causes, or areas of impact interest you the most?",
                                },
                                {
                                    name: 'contribution',
                                    label: "How do you hope to contribute to the Truward community?",
                                }
                            ].map((field, index) => (
                                <div key={index} className={styled.textAreaContainer}>
                                    <label>{field.label}</label>
                                    <textarea
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleInputChange}
                                        className={errors[field.name] ? styled.errorInput : ''}
                                    />
                                    {errors[field.name] && <span className={styled.errorText}>{errors[field.name]}</span>}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styled.btns}>
                        <button 
                            type="button" 
                            className={styled.cancel} 
                            onClick={handleCancel}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className={`${styled.submit} ${isSubmitting ? styled.submitting : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
            <Footer showHeading={false} customText="Home" CustomClick="/" />
        </>
    );
};

export default Contact;
