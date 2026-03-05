import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Home, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import './Products.css';

export default function Products() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [
        "Gear Boxes",
        "Geared Motors",
        "Motors",
        "Couplings",
        "Machine Automation",
        "Helical Gear Boxes"
    ];

    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const filteredProducts = useMemo(() => {
        if (selectedCategories.length === 0) return products;
        return products.filter(product => selectedCategories.includes(product.category));
    }, [selectedCategories]);

    return (
        <div className="products-page">
            {/* Hero Section */}
            <section className="products-hero">
                <h1>Products</h1>
                <div className="breadcrumb">
                    <Link to="/" style={{ color: 'var(--primary)' }}>
                        <Home size={18} style={{ marginRight: '5px' }} /> Home
                    </Link>
                    <span style={{ color: 'var(--primary)', margin: '0 8px' }}>&gt;&gt;</span>
                    <span>Products</span>
                </div>
                <div className="products-hero-bg-text">Products</div>
            </section>

            <div className="container">
                <div className="products-intro">
                    <h2>Our Products</h2>
                    <p>Browse our comprehensive catalog of high-performance industrial and medical equipment. Use the filters to find the perfect solution for your needs.</p>
                </div>

                <main className="products-layout">
                    {/* Sidebar */}
                    <aside className="categories-sidebar">
                        <div className="sidebar-title">
                            Categories
                            <ChevronUp size={20} className="sidebar-icon" />
                        </div>
                        <div className="category-list">
                            {categories.map((cat, idx) => (
                                <label key={idx} className="category-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                        {selectedCategories.length > 0 && (
                            <button
                                onClick={() => setSelectedCategories([])}
                                style={{
                                    marginTop: '1.5rem',
                                    color: 'var(--primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    textDecoration: 'underline'
                                }}
                            >
                                Clear All Filters
                            </button>
                        )}
                    </aside>

                    {/* Main Content */}
                    <div className="products-content">
                        <div className="products-grid">
                            {filteredProducts.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <div className="product-card-overlay"></div>

                                    <div className="product-image">
                                        <img src={product.image} alt={product.name} />
                                    </div>

                                    <div className="product-hover-content">
                                        <p>{product.description}</p>
                                        <Link to={`/products/${product.id}`} className="btn-read-more">Read More</Link>
                                    </div>

                                    <div className="product-card-footer">
                                        <div className="product-info">
                                            <h3>{product.name}</h3>
                                        </div>
                                        <div className="product-btn-wrapper">
                                            <Link to={`/products/${product.id}`} className="product-btn" aria-label="View Product">
                                                <ChevronRight size={24} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProducts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                                <h3>No products found in the selected categories.</h3>
                                <button
                                    className="btn btn-outline"
                                    style={{ marginTop: '1rem' }}
                                    onClick={() => setSelectedCategories([])}
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
