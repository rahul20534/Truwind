import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Submissions.module.css';
import Submissions from './Submissions';

// API base URL - Use production URL or local development
const API_BASE_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:8080' 
    : 'https://truward-server.onrender.com';

const ProtectedSubmissions = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [attempts, setAttempts] = useState(3);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Check if already authenticated
    useEffect(() => {
        const auth = sessionStorage.getItem('submissionsAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password })
            });

            const data = await response.json();

            if (data.success) {
                setIsAuthenticated(true);
                sessionStorage.setItem('submissionsAuth', 'true');
                setError('');
            } else {
                const remainingAttempts = attempts - 1;
                setAttempts(remainingAttempts);
                setPassword('');
                
                if (remainingAttempts === 0) {
                    navigate('/');
                } else {
                    setError(`Incorrect password. ${remainingAttempts} ${remainingAttempts === 1 ? 'attempt' : 'attempts'} remaining.`);
                }
            }
        } catch (error) {
            setError('Failed to verify password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isAuthenticated) {
        return <Submissions />;
    }

    return (
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h2>Protected Area</h2>
                <p>Please enter the password to view submissions.</p>
                
                <form onSubmit={handleSubmit} className={styles.authForm}>
                    <div className={styles.inputGroup}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className={error ? styles.errorInput : ''}
                            disabled={isLoading}
                        />
                        {error && <span className={styles.errorText}>{error}</span>}
                    </div>
                    <button 
                        type="submit" 
                        className={styles.authButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Verifying...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProtectedSubmissions; 