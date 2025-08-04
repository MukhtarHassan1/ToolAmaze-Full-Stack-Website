import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarStyle = {
    padding: isScrolled ? '8px 0' : '15px 0',
    boxShadow: isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.15)' : '0 2px 15px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
  };

  const brandStyle = {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: 'var(--primary-dark)',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  };

  const navLinkStyle = {
    fontWeight: 500,
    margin: '0 8px',
    position: 'relative',
    transition: 'color 0.3s',
    textDecoration: 'none'
  };

  const btnLoginStyle = {
    backgroundColor: 'transparent',
    border: '1px solid var(--primary)',
    color: 'var(--primary)',
    borderRadius: 'var(--border-radius)',
    padding: '8px 20px',
    marginRight: '10px',
    transition: 'all 0.3s',
    textDecoration: 'none'
  };

  const btnRegisterStyle = {
    backgroundColor: 'var(--primary)',
    border: 'none',
    color: 'white',
    borderRadius: 'var(--border-radius)',
    padding: '8px 20px',
    transition: 'all 0.3s',
    textDecoration: 'none'
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white" style={navbarStyle}>
        <div className="container">
          <img 
            src="/images/logo2.png" 
            alt="Toolamaze Logo" 
            style={{ height: '60px', marginRight: '5px', borderRadius: '8px' }} 
          />
          <Link className="navbar-brand" to="/" style={brandStyle}>
            ToolAmaze
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                  to="/" 
                  style={navLinkStyle}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/pricing' ? 'active' : ''}`} 
                  to="/pricing" 
                  style={navLinkStyle}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
                  to="/contact" 
                  style={navLinkStyle}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="btn" style={btnLoginStyle}>
                Login
              </Link>
              <Link to="/register" className="btn" style={btnRegisterStyle}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;