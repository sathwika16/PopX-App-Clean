import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import AccountSettings from './components/AccountSettings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="mobile-container">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;