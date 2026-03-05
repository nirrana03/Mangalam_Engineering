import { Home, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

import aboutMain from '../../assets/about_image.png';
import aboutOverlap from '../../assets/about_image_overlap.png';
import certificate from '../../assets/certificate.png';

export default function About() {
    return (
        <div className="about-page">
            {/* Dark Hero Section */}
            <section className="about-hero">
                <h1>ABOUT US</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'var(--primary)' }}><Home size={18} style={{ marginRight: '5px' }} /> Home</Link>
                    <span style={{ color: 'var(--primary)', margin: '0 8px' }}>&gt;&gt;</span>
                    <span>About Us</span>
                </div>
                <div className="about-hero-bg-text">About Us</div>
            </section>

            {/* Industrial Solutions Section */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '5rem' }}>
                        <div className="staggered-images animate-fade-in">
                            <img
                                src={aboutMain}
                                alt="Industrial Main"
                                className="image-main"
                            />
                            <div className="image-overlay-container">
                                <img
                                    src={aboutOverlap}
                                    alt="Industrial Detail"
                                    className="image-overlay"
                                />
                            </div>
                            <div className="experience-badge">
                                <h4 style={{ fontSize: '1.4rem', color: '#002d5b', fontWeight: '800', lineHeight: '1.2', marginBottom: '1rem' }}>20+ Years of<br />Experience</h4>
                                <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill="#f26522" color="#f26522" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <span className="subtitle">ABOUT US COMPANY</span>
                            <h2 className="section-title" style={{ color: '#002d5b', fontSize: '3rem', marginBottom: '2rem' }}>Delivering Industrial Solutions</h2>

                            <p className="mb-4" style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                We started as a small organization, but by adopting the latest production technologies and maintaining strict quality control, we have successfully delivered a wide range of products and services, ensuring complete customer satisfaction.
                            </p>

                            <p className="mb-4" style={{ fontSize: '1rem', color: '#555', lineHeight: '1.8', marginBottom: '2rem' }}>
                                Our vision is to become a total solution provider for any kind of mixing, drying, gas transmission & material transmission equipment. Later in 2006, we introduced ourselves as the providers for mining equipment such as magnetic separator, magnetic pulley, tube magnets under the authorization of Electromag Devices Pvt. Ltd. Since 2009.
                            </p>

                            <div className="feature-grid">
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Power Transmission</span>
                                </div>
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Authorized Stockist</span>
                                </div>
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Advanced Technology</span>
                                </div>
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Quality Assurance</span>
                                </div>
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Customer Satisfaction</span>
                                </div>
                                <div className="feature-item">
                                    <Play size={10} fill="var(--primary)" color="var(--primary)" />
                                    <span>Custom Manufacturing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section className="certificate-section animate-fade-in">
                <div className="container">
                    <div className="certificate-grid">
                        <div className="certificate-text">
                            <h2>Certificate</h2>
                        </div>
                        <div className="certificate-image-container">
                            <img
                                src={certificate}
                                alt="Certificate of Authorization"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
