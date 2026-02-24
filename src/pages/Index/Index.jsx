import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

// Assets
import indexLogo from '../../assets/Index_Logo.png';
import engineeringImg from '../../assets/Engineering.png';
import salesImg from '../../assets/Sales.png';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import twitterIcon from '../../assets/twitter.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import emailIcon from '../../assets/email.svg';
import phoneIcon from '../../assets/phone.svg';
import locationIcon from '../../assets/location_pin.svg';

const Index = () => {
    return (
        <div className="index-page">
            {/* Header */}
            <header className="index-header">
                <div className="index-container">
                    <div className="header-content">
                        <div className="small-logo">
                            <img src={indexLogo} alt="Logo" className="header-logo-icon" />
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-icon"><img src={facebookIcon} alt="FB" /></a>
                            <a href="#" className="social-icon"><img src={instagramIcon} alt="IG" /></a>
                            <a href="#" className="social-icon"><img src={twitterIcon} alt="TW" /></a>
                            <a href="#" className="social-icon"><img src={linkedinIcon} alt="IN" /></a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="index-main">
                <div className="index-container">
                    {/* Hero Section */}
                    <section className="hero-section">
                        <div className="large-logo">
                            <img src={indexLogo} alt="Mangalam Engineering" />
                            <div className="logo-text-vertical">
                                <span className="brand-name">Mangalam</span>
                                <span className="brand-sub">Engineering</span>
                            </div>
                        </div>

                        <h1 className="welcome-text">Welcome to Mangalam Engineering</h1>
                        <p className="tagline">Reliable Supply of Motors, Cylinders & Engineering Solutions</p>
                    </section>

                    {/* Business Cards */}
                    <section className="business-cards">
                        <div className="business-card-wrapper">
                            <Link to="/home" className="business-card">
                                <div className="card-image">
                                    <img src={engineeringImg} alt="Mangalam Engineering" />
                                </div>
                            </Link>
                            <h2 className="card-title">Mangalam Engineering</h2>
                        </div>

                        <div className="business-card-wrapper">
                            <Link to="/home" className="business-card">
                                <div className="card-image">
                                    <img src={salesImg} alt="Mangalam Sales" />
                                </div>
                            </Link>
                            <h2 className="card-title">Mangalam Sales</h2>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section className="contact-info">
                        <div className="contact-item">
                            <img src={emailIcon} alt="Email" className="contact-icon" />
                            <span className="contact-label">Email :</span>
                            <a href="mailto:example@email.com" className="contact-value">example@email.com</a>
                        </div>
                        <div className="contact-item">
                            <img src={phoneIcon} alt="Phone" className="contact-icon" />
                            <span className="contact-label">Mobile No :</span>
                            <a href="tel:+918978678908" className="contact-value">+91 8978678908</a>
                        </div>
                        <div className="contact-item full-width">
                            <img src={locationIcon} alt="Location" className="contact-icon" />
                            <span className="contact-label">Address :</span>
                            <span className="contact-value">Mangla Chambers, Char Rasta, G.I.D.C., Vapi - 396195, Gujarat, India</span>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="index-footer">
                <div className="index-container">
                    <div className="footer-content">
                        <div className="copyright">
                            Copyright 2026 ©supply123. All rights reserved.
                        </div>
                        <div className="footer-links">
                            <Link to="/terms">Terms & Conditions</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
