import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--dark)',
    color: 'white',
    padding: '60px 0 30px'
  };

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '40px'
  };

  const footerTitleStyle = {
    fontWeight: 600,
    marginBottom: '25px',
    fontSize: '1.2rem'
  };

  const footerTextStyle = {
    opacity: 0.8,
    marginBottom: '20px'
  };

  const footerLinksStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px'
  };

  const footerLinkStyle = {
    color: 'white',
    opacity: 0.8,
    textDecoration: 'none',
    transition: 'all 0.3s'
  };

  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    opacity: 0.7,
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={footerGridStyle}>
          <div>
            <h4 style={footerTitleStyle}>ToolAmaze</h4>
            <p style={footerTextStyle}>
              We're revolutionizing the way professionals access tools and equipment. 
              Our platform connects tool owners with those who need them, creating a 
              sustainable sharing economy in the trades industry.
            </p>
          </div>
          
          <div>
            <h4 style={footerTitleStyle}>Quick Links</h4>
            <ul style={footerLinksStyle}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={footerLinkStyle}>Home</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/pricing" style={footerLinkStyle}>Pricing</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/contact" style={footerLinkStyle}>Contact</Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#terms" style={footerLinkStyle}>Terms of Service</a>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <a href="#privacy" style={footerLinkStyle}>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={copyrightStyle}>
          <p>&copy; 2025 ToolAmaze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;