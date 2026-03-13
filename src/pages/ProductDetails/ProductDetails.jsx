import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../../data/products';
import { ChevronLeft, ChevronRight, MoveRight, House } from 'lucide-react';
import InquiryModal from '../../components/InquiryModal/InquiryModal';
import './ProductDetails.css';
import '../ProductPage/Products.css';

export default function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [relatedIndex, setRelatedIndex] = useState(0);

    if (!product) {
        return (
            <div className="container" style={{ paddingTop: 'var(--header-height)', textAlign: 'center', paddingBottom: '10rem' }}>
                <h2 style={{ marginTop: '5rem' }}>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Products</Link>
            </div>
        );
    }

    const relatedProductsAll = products.filter(p => p.id !== product.id);
    const relatedProducts = Array.from({ length: 3 }, (_, i) => {
        const index = (relatedIndex + i) % relatedProductsAll.length;
        return relatedProductsAll[index];
    });

    const slidePrev = () => {
        setRelatedIndex(prev => (prev - 1 + relatedProductsAll.length) % relatedProductsAll.length);
    };

    const slideNext = () => {
        setRelatedIndex(prev => (prev + 1) % relatedProductsAll.length);
    };

    const displayFeatures = product.features || [
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

            <div className="container" style={{ maxWidth: "1200px" }}>
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
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className={`thumb-box ${activeIndex === i ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    <img src={product.image} alt={product.name} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="product-info-panel">
                        <div className="category-badge">
                            {product.category}
                        </div>

                        <p className="product-description">
                            {product.description}
                        </p>

                        <ul className="product-features-list">
                            {displayFeatures.map((feature, index) => (
                                <li key={index}>
                                    <span className="feature-arrow">▶</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="inquiry-submit-btn" onClick={() => setIsModalOpen(true)}>
                            Inquiry <MoveRight size={20} />
                        </button>
                    </div>
                </main>

                {/* Related Products */}
                <section className="related-products-section">
                    <div className="related-header">
                        <h2>Related Products</h2>
                        <div className="slider-controls">
                            <button className="control-btn" onClick={slidePrev} aria-label="Previous products"><ChevronLeft size={20} /></button>
                            <button className="control-btn" onClick={slideNext} aria-label="Next products"><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    <div className="related-grid">
                        {relatedProducts.map((p) => (
                            <div key={p.id} className="product-card">
                                <div className="product-card-overlay"></div>

                                <div className="product-image">
                                    <img src={p.image} alt={p.name} />
                                </div>

                                <div className="product-hover-content">
                                    <p>{p.description}</p>
                                    <Link
                                    to={`/products/${p.id}`}
                                    className="btn-read-more"
                                    onClick={() => window.scrollTo(0, 0)}
                                    >
                                    View Details
                                    </Link>
                                </div>

                                <div className="product-card-footer">
                                    <div className="product-info">
                                    <h3>{p.name}</h3>
                                    </div>

                                    <div className="product-btn-wrapper">
                                    <Link
                                        to={`/products/${p.id}`}
                                        className="product-btn"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <ChevronRight size={24} />
                                    </Link>
                                    </div>
                                </div>
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


