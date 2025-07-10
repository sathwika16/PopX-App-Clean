import React from 'react';
import '../css/AccountSettings.css';
import cameraIcon from '../assets/camera-icon.svg';

function AccountSettings() {
    // In a real app, you would fetch this data from an API or context
    const userData = {
        name: "Marry Doe",
        email: "Marry@Gmail.Com",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetuer Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
    };

    return (
        <div className="account-settings-container">
            <header className="settings-header">
                <h1 className="settings-title">Account Settings</h1>
            </header>

            <div className="user-profile-card">
                <div className="profile-header">
                    <div className="profile-image-container">
                        <div className="profile-image">
                            {/* Placeholder for profile image */}
                        </div>
                        <div className="camera-icon">
                            <img src={cameraIcon} alt="Edit" />
                        </div>
                    </div>

                    <div className="profile-info">
                        <h2 className="profile-name">{userData.name}</h2>
                        <p className="profile-email">{userData.email}</p>
                    </div>
                </div>

                <div className="profile-description">
                    <p>{userData.description}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;