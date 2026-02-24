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

    // Check if ECH Series (id: 1) should be shown as featured
    // ECH Series is in Gear Boxes category
    const showECHFeatured = selectedCategories.length === 0 || selectedCategories.includes("Gear Boxes");

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
                            {/* Special Featured Card (ECH Series) - Only show if Gear Boxes selected or no filter */}
                            {showECHFeatured && (
                                <div className="featured-product-card">
                                    <p>
                                        Keeping in line of the strategy of "Gearing the Future" Better & Faster the 'ECH' Series delivers to industry needs. The ECH series has been developed keeping in mind the industry requirements which offers greater flexibility and modularity and caters to a wide range of industries.
                                    </p>
                                    <Link to="/products/1" className="read-more-btn">Read More</Link>
                                    <div className="featured-title-bottom">
                                        <span>ECH Series</span>
                                        <div className="circle-btn-arrow">
                                            <ChevronRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {filteredProducts
                                .filter(product => !showECHFeatured || product.id !== 1)
                                .map((product) => (
                                    <div key={product.id} className="product-card-wrapper">
                                        <div className="product-card">
                                            <div className="product-img-wrapper">
                                                <img src={product.image} alt={product.name} />
                                            </div>
                                            <div className="product-info-minimal">
                                                <h3>{product.name}</h3>
                                                <Link to={`/products/${product.id}`} className="circle-btn-arrow">
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

