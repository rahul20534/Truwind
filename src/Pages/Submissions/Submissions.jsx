import React, { useState, useEffect } from 'react';
import styles from './Submissions.module.css';
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

    useEffect(() => {
        fetchSubmissions(currentPage);
    }, [currentPage]);

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
    };

    const toggleCardExpansion = (submissionId) => {
        setExpandedCard(expandedCard === submissionId ? null : submissionId);
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
                <h1>Form Submissions</h1>
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
                                <h2>{submission.name}</h2>
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