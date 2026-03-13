import { Mail, Phone, Send, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Contact.css';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            {/* Contact Hero Section */}
            <section className="contact-hero">
                <h1>CONTACT US</h1>
                <div className="breadcrumb-wrapper">
                    <div className="breadcrumb">
                        <Link to="/" className="breadcrumb-item">
                            <Home size={18} /> Home
                        </Link>
                        <span className="breadcrumb-separator">&gt;&gt;</span>
                        <span className="breadcrumb-current">Contact Us</span>
                    </div>
                </div>
            </section>

            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-card-container animate-fade-in">
                        {/* Left Column: Info & Image */}
                        <div className="contact-info-panel">
                            <div className="info-header">
                                <h2>Reach Out & Connect</h2>
                                <p>Our team of experts is ready to assist you with your industrial engineering needs.</p>
                            </div>

                            <div className="info-image-container">
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
                                    alt="Engineers Working"
                                    className="panel-image"
                                />
                            </div>

                            <div className="help-section">
                                <h3>Need More Help?</h3>
                                <div className="help-cards">
                                    <div className="help-card">
                                        <div className="help-icon-box">
                                            <Phone size={20} />
                                        </div>
                                        <div className="help-text">
                                            <span>Customers Support</span>
                                            <strong>+91 9825098482</strong>
                                        </div>
                                    </div>
                                    <div className="help-card">
                                        <div className="help-icon-box">
                                            <Mail size={20} />
                                        </div>
                                        <div className="help-text">
                                            <span>Email Us</span>
                                            <strong>Bankim@Mangalam.Info</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Submission Form */}
                        <div className="contact-form-panel">
                            <form onSubmit={handleSubmit} className="custom-contact-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Id" required />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Phone No" required />
                                </div>
                                <div className="form-group">
                                    <textarea rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="form-submit">
                                    <button type="submit" className="submit-now-btn" style={{padding: '12px 30px', fontWeight: '400'}}>
                                        SUBMIT NOW
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
