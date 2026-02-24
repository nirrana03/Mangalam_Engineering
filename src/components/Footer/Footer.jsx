import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import logoImg from '../../assets/Logo.png';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-main">
            <div className="container">
                <div className="footer-grid-layout">
                    <div className="footer-column-brand">
                        <Link to="/" className="footer-logo">
                            <div className="logo-box">
                                <img src={logoImg} alt="Mangalam Logo" />
                            </div>
                            <div className="brand-text">
                                <span className="brand-primary">Mangalam</span>
                                <span className="brand-secondary">Engineering</span>
                            </div>
                        </Link>
                        <div className="social-links-row">
                            <a href="#" className="social-box"><Facebook size={18} /></a>
                            <a href="#" className="social-box"><Instagram size={18} /></a>
                            <a href="#" className="social-box"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Quick Links</h4>
                        <ul className="column-links">
                            <li><Link to="/about"> <ChevronRight size={14} /> About Us</Link></li>
                            <li><Link to="/products"> <ChevronRight size={14} /> Products</Link></li>
                            <li><Link to="/contact"> <ChevronRight size={14} /> Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Contact Information</h4>
                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail size={18} />
                                <span>Email : Bankim@Mangalam.Info</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} />
                                <span>Mobile: +91 9825098482</span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-column-newsletter">
                        <h4 className="column-title">Subscribe to our newsletter for updates and offers!</h4>
                        <p className="newsletter-desc">Get the latest news, tips, and exclusive offers straight to your inbox.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button className="subscribe-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal">
                <div className="container">
                    <p>Copyright © 2026 Mangalam Engineering All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
