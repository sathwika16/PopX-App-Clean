import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt with:', { email, password });
        // Navigate to dashboard or home after successful login
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Signin to your PopX account</h1>
            <p className="login-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="input-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="input-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-submit-btn">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;