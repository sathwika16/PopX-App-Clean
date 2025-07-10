import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CreateAccount.css';

function CreateAccount() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: '',
        companyName: '',
        isAgency: 'yes' // Default selection
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRadioChange = (value) => {
        setFormData({
            ...formData,
            isAgency: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', formData);
        // Navigate to next page or dashboard after account creation
        // navigate('/dashboard');
    };

    return (
        <div className="create-account-container">
            <h1 className="create-account-title">Create your PopX account</h1>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fullName" className="input-label">Full Name<span className="required">*</span></label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="input-field"
                        placeholder="Marry Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phoneNumber" className="input-label">Phone number<span className="required">*</span></label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="input-field"
                        placeholder="Marry Doe"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="input-label">Email address<span className="required">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="input-field"
                        placeholder="Marry Doe"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password" className="input-label">Password<span className="required">*</span></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input-field"
                        placeholder="Marry Doe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="companyName" className="input-label">Company name</label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="input-field"
                        placeholder="Marry Doe"
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group agency-question">
                    <p className="agency-label">Are you an Agency?<span className="required">*</span></p>
                    <div className="radio-group">
                        <label className="radio-container">
                            <input
                                type="radio"
                                name="isAgency"
                                checked={formData.isAgency === 'yes'}
                                onChange={() => handleRadioChange('yes')}
                                required
                            />
                            <span className="radio-custom"></span>
                            <span className="radio-label">Yes</span>
                        </label>

                        <label className="radio-container">
                            <input
                                type="radio"
                                name="isAgency"
                                checked={formData.isAgency === 'no'}
                                onChange={() => handleRadioChange('no')}
                            />
                            <span className="radio-custom"></span>
                            <span className="radio-label">No</span>
                        </label>
                    </div>
                </div>

                <button type="submit" className="create-account-btn">
                    Create Account
                </button>
            </form>
        </div>
    );
}

export default CreateAccount;