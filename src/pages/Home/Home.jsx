import React from "react";
import "./Home.css";

import heroBg from "../../assets/hero_bg.png";
import aboutImage from "../../assets/about_image.png";
import imageOverlap from "../../assets/about_image_overlap.png";

import category1 from "../../assets/category-1.svg";
import category2 from "../../assets/category-2.svg";
import category3 from "../../assets/category-3.svg";
import category4 from "../../assets/category-4.svg";
import category5 from "../../assets/category-5.svg";
import category6 from "../../assets/category-6.svg";

// import product1 from "../../assets/product-1.png";
// import product2 from "../../assets/product-2.png";
// import product3 from "../../assets/product-3.png";
// import product4 from "../../assets/product-4.png";
// import contactImage from "../../assets/contact_us.png";

const Home = () => {
    return (
        <main>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <img className="hero-bg" src={heroBg} alt="Background Image" />

                <div className="hero-container">
                    <div className="hero-content">
                        <h1>
                            Engineering The <span>Future Of Industry</span>
                            <br />
                            Through Innovation
                            <br />
                            And Technology
                        </h1>

                        <p>
                            Discover premium industrial automation, medical technology,
                            and high-performance electronics designed for mission-critical
                            applications.
                        </p>

                        <div className="hero-buttons">
                            <button className="btn-outline">Explore Products</button>
                            <button className="btn-primary">Contact Sales</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="about">
                <div className="container about-container">
                    <div className="about-image-card">
                        <img src={aboutImage} alt="Industrial Work" />

                        <div className="image-overlay image-top-left">
                            <img src={imageOverlap} alt="Square Image" />
                        </div>

                        <div className="image-overlay image-bottom-right">
                            <strong>20+ Years of</strong> <br />
                            <strong>Experience</strong>
                            <div className="stars">★★★★★</div>
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="section-label">
                            <span className="dot"></span> ABOUT COMPANY
                        </span>

                        <h2>Delivering Industrial Solutions</h2>

                        <p>
                            We focus on small organizations, but by adopting the latest
                            production technologies and maintaining strict quality control,
                            we ensure completely reliable and accurate products and services.
                        </p>

                        <ul className="about-list">
                            <li>Power Transmission</li>
                            <li>Authorized Service</li>
                            <li>Advanced Technology</li>
                            <li>Quality Assurance</li>
                            <li>Customer Satisfaction</li>
                            <li>Custom Manufacturing</li>
                        </ul>

                        <button className="btn-primary">More About Us</button>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section className="categories">
                <div className="container">
                    <div className="categories-header">
                        <div>
                            <span className="section-label">
                                <span className="dot"></span> CATEGORIES
                            </span>
                            <h2>Explore Our Popular Categories</h2>
                        </div>

                        <button className="btn-outline small">View All</button>
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
                                    <img src={icon} alt="" />
                                </div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;