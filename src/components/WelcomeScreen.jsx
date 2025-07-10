import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WelcomeScreen.css';

function WelcomeScreen() {
    const navigate = useNavigate();

    return (
        <div className="welcome-container">
            <h1 className="welcome-title">Welcome to PopX</h1>
            <p className="welcome-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button
                className="create-account-btn"
                onClick={() => navigate('/create-account')}
            >
                Create Account
            </button>
            <button
                className="login-btn"
                onClick={() => navigate('/login')}
            >
                Already Registered? Login
            </button>
        </div>
    );
}

export default WelcomeScreen;