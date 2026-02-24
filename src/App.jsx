import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Index from './pages/Index/Index';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/ContactUs/Contact';
import Products from './pages/ProductPage/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout with Header + Footer (for inner pages)
function MainLayout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: 'calc(100vh - 400px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing / Index page — has its own header & footer */}
        <Route path="/" element={<Index />} />

        {/* Inner pages — wrapped with Header + Footer */}
        <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/products/:id" element={<MainLayout><ProductDetails /></MainLayout>} />

        <Route path="*" element={
          <MainLayout>
            <div style={{ textAlign: 'center', padding: '10rem 0' }}>
              <h1>404</h1>
              <p>Page Not Found</p>
              <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back Home</Link>
            </div>
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
