import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ChevronLeft, ChevronRight, MoveRight, House } from 'lucide-react';
import InquiryModal from '../../components/InquiryModal/InquiryModal';
import './ProductDetails.css';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!product) {
        return (
            <div className="container" style={{ paddingTop: 'var(--header-height)', textAlign: 'center', paddingBottom: '10rem' }}>
                <h2 style={{ marginTop: '5rem' }}>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Products</Link>
            </div>
        );
    }

    const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

    const features = [
        "Higher torque ratings",
        "Foot print same as ET Series",
        "Suitable for numerous applications",
        "Various sealing options available",
        "Different cooling systems"
    ];

    return (
        <div className="product-details-page">
            {/* Hero Section */}
            <section className="product-details-hero">
                <h1>Product Detail</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'var(--primary)' }}>
                        <House size={18} style={{ marginRight: '5px' }} /> Home
                    </Link>
                    <span style={{ color: 'var(--primary)', margin: '0 8px' }}>&gt;&gt;</span>
                    <Link to="/products" style={{ color: 'var(--primary)' }}>Products</Link>
                    <span style={{ color: 'var(--primary)', margin: '0 8px' }}>&gt;&gt;</span>
                    <span>Product Details</span>
                </div>
                <div className="product-details-hero-bg-text">Product Details</div>
            </section>

            <div className="container">
                {/* Intro Section */}
                <section className="product-intro">
                    <h2>{product.name.toUpperCase()}</h2>
                    <p>Browse our comprehensive catalog of high-performance industrial and medical equipment. Use the filters to find the perfect solution for your needs.</p>
                </section>

                {/* Main Product Info */}
                <main className="product-main-grid">
                    <div className="product-gallery">
                        <div className="main-image-box">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="thumbnail-list">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className={`thumb-box ${i === 0 ? 'active' : ''}`}>
                                    <img src={product.image} alt={product.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-info-panel">
                        <span className="category-label">{product.category.toUpperCase()}</span>
                        <p className="product-description">
                            {product.description}
                        </p>
                        <ul className="product-features">
                            {features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className="inquiry-btn" onClick={() => setIsModalOpen(true)}>
                            Inquiry <MoveRight size={18} />
                        </button>
                    </div>
                </main>

                {/* Related Products */}
                <section className="related-products-section">
                    <div className="related-header">
                        <h2>Related Products</h2>
                        <div className="slider-controls">
                            <button className="control-btn"><ChevronLeft size={20} /></button>
                            <button className="control-btn"><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    <div className="related-grid">
                        {relatedProducts.map((p) => (
                            <div key={p.id} className="related-card-wrapper">
                                <Link to={`/products/${p.id}`} className="related-card" onClick={() => window.scrollTo(0, 0)}>
                                    <div className="related-img">
                                        <img src={p.image} alt={p.name} />
                                    </div>
                                    <div className="related-footer">
                                        <h3>{p.name}</h3>
                                        <div className="go-btn">
                                            <ChevronRight size={20} />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                initialProduct={product}
            />
        </div>
    );
}


