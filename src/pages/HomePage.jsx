import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  useEffect(() => {
    // Add padding-top to body for fixed navbar
    document.body.style.paddingTop = '76px';
    document.body.style.display = 'grid';
    document.body.style.gridTemplateRows = 'auto 1fr auto';
    document.body.style.minHeight = '100vh';
    document.body.style.backgroundColor = '#f5f6fa';

    return () => {
      document.body.style.paddingTop = '';
      document.body.style.display = '';
      document.body.style.gridTemplateRows = '';
      document.body.style.minHeight = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const heroStyle = {
    background: 'linear-gradient(135deg, #3366ff 20%, #6c47ff 100%)',
    color: 'white',
    padding: '100px 0',
    paddingLeft: '15%',
    borderRadius: '0 0 50px 50px'
  };

  const heroContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '30px',
    alignItems: 'center'
  };

  const heroContentStyle = {
    paddingRight: '20px'
  };

  const heroTitleStyle = {
    fontWeight: 700,
    fontSize: '3rem',
    marginBottom: '20px'
  };

  const heroTextStyle = {
    fontSize: '1.2rem',
    marginBottom: '30px',
    opacity: 0.9
  };

  const btnCtaStyle = {
    backgroundColor: 'white',
    color: 'var(--primary)',
    fontWeight: 600,
    padding: '12px 30px',
    borderRadius: 'var(--border-radius)',
    transition: 'all 0.3s',
    border: 'none',
    display: 'inline-block',
    textDecoration: 'none'
  };

  const featuresStyle = {
    padding: '80px 0',
    backgroundColor: 'var(--light)'
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    fontWeight: 700,
    color: 'var(--dark)'
  };

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '25px'
  };

  const featureCardStyle = {
    background: 'white',
    borderRadius: 'var(--border-radius)',
    padding: '30px',
    height: '100%',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr'
  };

  const featureIconStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    color: 'var(--primary)'
  };

  const featureTitleStyle = {
    fontWeight: 600,
    marginBottom: '15px'
  };

  const featureDescriptionStyle = {
    color: 'var(--secondary)'
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="container">
          <div style={heroContainerStyle}>
            <div style={heroContentStyle}>
              <h1 style={heroTitleStyle}>Amaze Yourself with the Right Tools</h1>
              <p style={heroTextStyle}>
                At Toolamaze, we bring you a curated collection of powerful digital tools 
                that help you work smarter, not harder. From writing assistants like Grammarly 
                and QuillBot, to creative platforms like Canva and Envato Elements, we offer 
                premium tools at budget-friendly prices!
              </p>
              <a href="/pricing" style={btnCtaStyle}>
                View Pricing Plans
              </a>
            </div>
            <div>
              <img 
                src="/images/logo.png" 
                alt="Tools Illustration" 
                className="img-fluid hero-image" 
                style={{ 
                  width: '400px', 
                  height: '400px', 
                  borderRadius: '15px', 
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' 
                }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={featuresStyle}>
        <div className="container">
          <h2 style={sectionTitleStyle}>Why Choose Our Platform</h2>
          <div style={featuresGridStyle}>
            <div style={featureCardStyle}>
              <div style={featureIconStyle}>🧰</div>
              <h3 style={featureTitleStyle}>Wide Selection</h3>
              <p style={featureDescriptionStyle}>
                Access thousands of professional-grade tools from trusted suppliers 
                across multiple industries.
              </p>
            </div>
            
            <div style={featureCardStyle}>
              <div style={featureIconStyle}>✓</div>
              <h3 style={featureTitleStyle}>Verified Users</h3>
              <p style={featureDescriptionStyle}>
                Our verification system ensures all users are trusted professionals 
                with proven credentials.
              </p>
            </div>
            
            <div style={featureCardStyle}>
              <div style={featureIconStyle}>🔒</div>
              <h3 style={featureTitleStyle}>Insurance Coverage</h3>
              <p style={featureDescriptionStyle}>
                Every rental includes comprehensive insurance protection for both 
                parties involved.
              </p>
            </div>
            
            <div style={featureCardStyle}>
              <div style={featureIconStyle}>🕒</div>
              <h3 style={featureTitleStyle}>24/7 Support</h3>
              <p style={featureDescriptionStyle}>
                Our dedicated support team is always available to assist with any 
                questions or issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;