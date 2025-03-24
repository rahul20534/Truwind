import React, { useState, useEffect } from 'react';
import styles from './Submissions.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

// API base URL - Use production URL or local development
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8080' 
    : 'https://truward-server.onrender.com';

const Submissions = () => {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedSubmissions, setSelectedSubmissions] = useState([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchSubmissions(currentPage);
    }, [currentPage]);

    // Clear success message after 5 seconds
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const fetchSubmissions = async (page) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/contact?page=${page}`);
            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Failed to fetch submissions');
            }

            setSubmissions(data.data);
            setPagination(data.pagination);
        } catch (error) {
            console.error('Error fetching submissions:', error);
            setError(error.message || 'Failed to fetch submissions');
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setLoading(true);
        setExpandedCard(null);
        setSelectedSubmissions([]);
    };

    const toggleCardExpansion = (submissionId) => {
        setExpandedCard(expandedCard === submissionId ? null : submissionId);
    };

    const handleSelectSubmission = (submissionId) => {
        setSelectedSubmissions(prev => {
            if (prev.includes(submissionId)) {
                return prev.filter(id => id !== submissionId);
            } else {
                return [...prev, submissionId];
            }
        });
    };

    const handleSelectAll = () => {
        if (selectedSubmissions.length === submissions.length) {
            setSelectedSubmissions([]);
        } else {
            setSelectedSubmissions(submissions.map(sub => sub._id));
        }
    };

    const handleConfirmation = async (submissionId) => {
        try{
            const response = await fetch(`${API_BASE_URL}/api/membership/confirm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: submissionId }),
            });

            if (!response.ok) { 
                throw new Error('Failed to send confirmation email');
            }

            const data = await response.json();
            console.log('Confirmation email sent:', data.message);
            setSuccessMessage('Confirmation email sent successfully!');

            // Reset selection after sending
            setSelectedSubmissions([]);
            setIsSelecting(false);
        } catch (error) {
            console.error('Error sending confirmation email:', error);
            setError('Failed to send confirmation email');
        }
    };

    const handleBulkConfirmation = async () => {
        try{
            const response = await fetch(`${API_BASE_URL}/api/membership/confirmMultiple`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userIds: selectedSubmissions }),
            });

            if (!response.ok) {
                throw new Error('Failed to send confirmation emails');
            }

            const data = await response.json();
            console.log('Confirmation emails sent:', data.message);
            setSuccessMessage(`${selectedSubmissions.length} confirmation emails sent successfully!`);

            // Reset selection after sending
            setSelectedSubmissions([]);
            setIsSelecting(false);
        } catch (error) {
            console.error('Error sending confirmation emails:', error);
            setError('Failed to send confirmation emails');
        }
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loader}></div>
                <p>Loading submissions...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <h2>Error</h2>
                <p>{error}</p>
                <button onClick={() => fetchSubmissions(currentPage)} className={styles.retryButton}>
                    Retry
                </button>
            </div>
        );
    }

    return (
        <>
            <div className={styles.submissionsContainer}>
                {successMessage && (
                    <div className={styles.successMessage}>
                        {successMessage}
                    </div>
                )}
                <div className={styles.headerActions}>
                    <h1>Form Submissions</h1>
                    <button className={styles.confirmUsersButton} onClick={() => navigate('/confirm-users')}>Confirmed Users</button>
                    <div className={styles.actionButtons}>
                        {!isSelecting ? (
                            <button 
                                className={styles.selectButton}
                                onClick={() => setIsSelecting(true)}
                            >
                                Select Multiple
                            </button>
                        ) : (
                            <>
                                <button 
                                    className={styles.selectAllButton}
                                    onClick={handleSelectAll}
                                >
                                    {selectedSubmissions.length === submissions.length ? 'Deselect All' : 'Select All'}
                                </button>
                                <button 
                                    className={styles.confirmButton}
                                    onClick={handleBulkConfirmation}
                                    disabled={selectedSubmissions.length === 0}
                                >
                                    Send Confirmation ({selectedSubmissions.length})
                                </button>
                                <button 
                                    className={styles.cancelButton}
                                    onClick={() => {
                                        setIsSelecting(false);
                                        setSelectedSubmissions([]);
                                    }}
                                >
                                    Cancel
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {pagination && (
                    <p className={styles.submissionCount}>
                        Showing {submissions.length} of {pagination.totalItems} submissions
                    </p>
                )}

                <div className={styles.submissionsList}>
                    {submissions.map((submission) => (
                        <div key={submission._id} 
                            className={`${styles.submissionCard} ${expandedCard === submission._id ? styles.expanded : ''}`}
                        >
                            <div className={styles.submissionHeader}>
                                <div className={styles.headerLeft}>
                                    {isSelecting && (
                                        <label className={styles.checkboxLabel}>
                                            <input
                                                type="checkbox"
                                                checked={selectedSubmissions.includes(submission._id)}
                                                onChange={() => handleSelectSubmission(submission._id)}
                                                className={styles.checkbox}
                                            />
                                        </label>
                                    )}
                                    <h2>{submission.name}</h2>
                                </div>
                                <span className={styles.date}>
                                    {formatDate(submission.createdAt)}
                                </span>
                            </div>

                            <div className={styles.basicInfo}>
                                <div className={styles.detailRow}>
                                    <strong>Work Profile:</strong>
                                    <span>{submission.workProfile}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <strong>Location:</strong>
                                    <span>{submission.cityState}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <strong>Email:</strong>
                                    <span>{submission.email}</span>
                                </div>
                                <div className={styles.detailRow}>
                                    <strong>Phone:</strong>
                                    <span>{submission.phone}</span>
                                </div>
                                {submission.linkedinUrl && (
                                    <div className={styles.detailRow}>
                                        <strong>LinkedIn:</strong>
                                        <a href={submission.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                            View Profile
                                        </a>
                                    </div>
                                )}
                            </div>

                            <button 
                                className={styles.expandButton}
                                onClick={() => toggleCardExpansion(submission._id)}
                            >
                                {expandedCard === submission._id ? 'Show Less' : 'Show More'}
                            </button>

                            {expandedCard === submission._id && (
                                <div className={styles.expandedContent}>
                                    <div className={styles.submissionAnswers}>
                                        <h3>Impact & Interests</h3>
                                        <div className={styles.answer}>
                                            <strong>Creating Impact?</strong>
                                            <p>{submission.impactAnswer}</p>
                                        </div>
                                        {submission.impactDescription && (
                                            <div className={styles.answer}>
                                                <strong>Impact Description:</strong>
                                                <p>{submission.impactDescription}</p>
                                            </div>
                                        )}
                                        <div className={styles.answer}>
                                            <strong>Reason for Joining:</strong>
                                            <p>{submission.joinReason}</p>
                                        </div>
                                        {submission.interests && (
                                            <div className={styles.answer}>
                                                <strong>Areas of Interest:</strong>
                                                <p>{submission.interests}</p>
                                            </div>
                                        )}
                                        {submission.contribution && (
                                            <div className={styles.answer}>
                                                <strong>Planned Contribution:</strong>
                                                <p>{submission.contribution}</p>
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.confirmationBtn} onClick={() => handleConfirmation(submission._id)}>
                                        Send Confirmation Email
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {pagination && (
                    <div className={styles.pagination}>
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={!pagination.hasPrevPage}
                            className={styles.pageButton}
                        >
                            Previous
                        </button>
                        <span className={styles.pageInfo}>
                            Page {pagination.currentPage} of {pagination.totalPages}
                        </span>
                        <button 
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={!pagination.hasNextPage}
                            className={styles.pageButton}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            <Footer showHeading={false} customText="Home" CustomClick="/" />
        </>
    );
};

export default Submissions; 