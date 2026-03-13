import React from "react";
import "./Home.css";
import '../ProductPage/Products.css';
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Star, Phone, Mail } from 'lucide-react';
import { products } from "../../data/products";

import heroBg from "../../assets/hero-bg.jpeg";
import technicianImg from "../../assets/technician.png";
import aboutImage from "../../assets/about_image.png";
import imageOverlap from "../../assets/about_image_overlap.png";

import category1 from "../../assets/category-1.svg";
import category2 from "../../assets/category-2.svg";
import category3 from "../../assets/category-3.svg";
import category4 from "../../assets/category-4.svg";
import category5 from "../../assets/category-5.svg";
import category6 from "../../assets/category-6.svg";

import contactImage from "../../assets/contact_us.png";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";

const Home = () => {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <img className="hero-bg" src={heroBg} alt="Background Image" />

                <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="animate-fade-in">
                            Engineering The
                            <br />
                            <span>Future Of Industry</span>
                            <br />
                            Through Innovation And Technology
                        </h1>

                        <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            Discover premium industrial automation, medical technology, and high-
                            performance electronics designed for mission-critical applications.
                        </p>

                        <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <Link to="/products" className="btn-hero-outline">
                                Explore Products
                            </Link>
                            <Link to="/contact" className="btn-hero-solid">
                                Contact Sales
                            </Link>
                        </div>
                    </div>

                    <div className="hero-image-side animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="technician-wrapper">
                            <div className="technician-circle"></div>
                            <img src={technicianImg} alt="Technician" className="technician-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about">
                <div className="container">
                    <div className="about-grid">
                        <div className="staggered-images animate-fade-in">
                            <img src={aboutImage} alt="Industrial Work" className="main-about-img" />

                            <div className="image-overlay-container">
                                <img src={imageOverlap} alt="Square Detail" className="overlap-img" />
                            </div>

                            <div className="experience-box">
                                <h4 style={{ fontSize: '1.4rem', color: '#002d5b', fontWeight: '600', lineHeight: '1.2', marginBottom: '1rem' }}>
                                    20+ Years of<br />Experience
                                </h4>
                                <div className="stars" style={{ display: 'flex', justifyContent: 'center', gap: '6px' }}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={20} fill="#f26522" color="#f26522" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="about-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <span className="subtitle">ABOUT US COMPANY</span>

                            <h2 className="section-title" style={{ color: '#002d5b', fontSize: '3rem', marginBottom: '2rem' }}>
                                Delivering Industrial<br />Solutions
                            </h2>

                            <p style={{ color: '#788094', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                                We started as a small organization, but by adopting the latest production
                                technologies and maintaining strict quality control, we have successfully
                                delivered a wide range of products and services, ensuring complete
                                customer satisfaction.
                            </p>

                            <ul className="about-list">
                                <li>Power Transmission</li>
                                <li>Authorized Stockist</li>
                                <li>Advanced Technology</li>
                                <li>Quality Assurance</li>
                                <li>Customer Satisfaction</li>
                                <li>Custom Manufacturing</li>
                            </ul>

                            <Link to="/about" className="btn-primary">
                                MORE ABOUT US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="categories">
                <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
                    <div className="categories-header">
                        <div className="animate-fade-in">
                            <span className="subtitle">CATEGORIES</span>
                            <h2 className="section-title" style={{fontWeight: '600', lineHeight: '1', marginBottom: '2rem' }}>Explore Our Popular Categories</h2>
                        </div>

                        <Link to="/products" className="btn-outline-blue hide-mobile">
                            View All
                        </Link>
                    </div>

                    <div className="category-grid">
                        {[
                            ["01", "Gear Boxes", "Power Transmission", category1],
                            ["02", "Geared Motors", "Integrated Drive", category2],
                            ["03", "Motors", "Reliable Power", category3],
                            ["04", "Coupling", "Shaft Connection", category4],
                            ["05", "Machine Automation", "Smart Control", category5],
                            ["06", "Helical Gear Boxes", "Quiet Efficiency", category6],
                        ].map(([num, title, desc, icon]) => (
                            <div className="category-card" key={num}>
                                <span className="category-number">{num}</span>
                                <div className="category-icon">
                                    <img src={icon} alt={title} />
                                </div>
                                <div className="category-card-content">
                                    <h3>{title}</h3>
                                    <p className="category-description">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="categories-mobile-footer show-mobile">
                        <Link to="/products" className="btn-outline-blue">
                            View All
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRODUCTS SECTION */}
            <section className="products">
                <div className="container products-container animate-fade-in">
                    <div className="products-header">
                        <span className="subtitle">PRODUCTS</span>
                        <h2 className="section-title" style={{fontWeight: '600', lineHeight: '1', marginBottom: '1rem' }}>Innovative Industrial Products</h2>
                    </div>

                    <div className="products-grid home-products-grid">
                        {products.slice(0, 4).map((product) => (
                            <div className="product-card" key={product.id}>
                                <div className="product-card-overlay"></div>

                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>

                                <div className="product-hover-content">
                                    <p>{product.description}</p>

                                    <Link to={`/products/${product.id}`} className="btn-read-more">
                                        View Details
                                    </Link>
                                </div>

                                <div className="product-card-footer">
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                    </div>

                                    <div className="product-btn-wrapper">
                                        <Link
                                            to={`/products/${product.id}`}
                                            className="product-btn"
                                            aria-label="View Product"
                                        >
                                            <ChevronRight size={24} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="products-footer">
                        <Link to="/products" className="btn-primary" style={{ padding: '12px 30px', textTransform: 'uppercase', fontSize: '16px', fontWeight: '400' }} onClick={() => navigate("/products")}>
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-card-container animate-fade-in">
                        {/* Left Column: Info & Image */}
                        <div className="contact-info-panel">
                            <div className="info-header">
                                <h2 style={{fontWeight: '600', lineHeight: '0.7', marginBottom: '1.7rem' }}>Reach Out & Connect</h2>
                                <p>Our team of experts is ready to assist you with your industrial engineering needs.</p>
                            </div>

                            <div className="info-image-container">
                                <img src={contactImage} alt="Contact Us" className="panel-image" />
                            </div>

                            <div className="help-section">
                                <h3 style={{fontWeight: '600', lineHeight: '0.4', marginBottom: '2rem' }}>Need More Help?</h3>
                                <div className="help-cards">
                                    <div className="help-card">
                                        <div className="help-icon-box">
                                            <Phone size={20} />
                                        </div>
                                        <div className="help-text">
                                            <span>Customers Support</span>
                                            <strong>+91 9825088482</strong>
                                        </div>
                                    </div>
                                    <div className="help-card">
                                        <div className="help-icon-box">
                                            <Mail size={20} />
                                        </div>
                                        <div className="help-text">
                                            <span>Email Us</span>
                                            <strong>Bankim@Mangalam.info</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Submission Form */}
                        <div className="contact-form-panel">
                            <form className="custom-contact-form">
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
        </main>
    );
};

export default Home;
