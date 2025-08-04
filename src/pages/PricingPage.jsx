import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PricingPage = () => {
  useEffect(() => {
    document.body.style.paddingTop = '76px';
    document.body.style.backgroundColor = '#f5f6fa';

    return () => {
      document.body.style.paddingTop = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const pageHeaderStyle = {
    background: 'linear-gradient(135deg, #3366ff 20%, #6c47ff 100%)',
    color: 'white',
    padding: '80px 0',
    textAlign: 'center',
    borderRadius: '0 0 50px 50px',
    fontSize: '1.5rem'
  };

  const pricingSectionStyle = {
    padding: '80px 0',
    backgroundColor: '#f5f6fa'
  };

  const pricingGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const pricingCardStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '40px 30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const featuredCardStyle = {
    ...pricingCardStyle,
    border: '2px solid var(--primary)',
    transform: 'scale(1.05)',
    boxShadow: '0 10px 30px rgba(51, 102, 255, 0.2)'
  };

  const pricingBadgeStyle = {
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--primary)',
    color: 'white',
    padding: '5px 20px',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600'
  };

  const pricingTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#333'
  };

  const pricingPriceStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'var(--primary)',
    marginBottom: '15px'
  };

  const pricingPeriodStyle = {
    fontSize: '1rem',
    fontWeight: '400',
    color: '#666'
  };

  const pricingFeaturesStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '30px 0'
  };

  const featureItemStyle = {
    padding: '8px 0',
    color: '#666',
    display: 'flex',
    alignItems: 'center'
  };

  const checkIconStyle = {
    width: '20px',
    height: '20px',
    color: '#28a745',
    marginRight: '10px'
  };

  const pricingBtnStyle = {
    display: 'inline-block',
    padding: '12px 30px',
    borderRadius: '8px',
    textDecoration: 'none',
    textAlign: 'center',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    width: '100%'
  };

  const primaryBtnStyle = {
    ...pricingBtnStyle,
    background: 'linear-gradient(135deg, var(--primary), #6c47ff)',
    color: 'white'
  };

  const outlineBtnStyle = {
    ...pricingBtnStyle,
    background: 'transparent',
    color: 'var(--primary)',
    border: '2px solid var(--primary)'
  };

  const faqSectionStyle = {
    padding: '80px 0',
    backgroundColor: 'white'
  };

  const faqGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto'
  };

  const faqItemStyle = {
    padding: '20px',
    border: '1px solid #e9ecef',
    borderRadius: '8px'
  };

  const faqQuestionStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333'
  };

  const faqAnswerStyle = {
    color: '#666',
    lineHeight: '1.6',
    margin: '0'
  };

  <a
  href="https://wa.me/1234567890?text=Hi%20ToolAmaze%20Team,%20I%20need%20help%20with%20billing."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#25D366',
    color: '#fff',
    padding: '15px',
    borderRadius: '50%',
    fontSize: '24px',
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  }}
>
  <i className="fab fa-whatsapp"></i>
</a>

  const CheckIcon = () => (
    <svg style={checkIconStyle} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section style={pageHeaderStyle}>
        <div className="container">
          <h1>Pricing Plans</h1>
          <p>Choose the right plan for your tool access needs. All plans include access to our marketplace, secure payments, and 24/7 customer support.</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={pricingSectionStyle}>
        <div className="container">
          <div style={pricingGridStyle}>
            {/* Basic Plan */}
            <div style={pricingCardStyle}>
              <div>
                <h3 style={pricingTitleStyle}>Basic</h3>
                <div style={pricingPriceStyle}>
                  $29<span style={pricingPeriodStyle}>/month</span>
                </div>
                <p>Perfect for occasional tool needs and individual contractors.</p>
              </div>
              <ul style={pricingFeaturesStyle}>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Access to tool marketplace
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Up to 5 tool rentals per month
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Basic insurance coverage
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Email support
                </li>
              </ul>
              <div>
                <a href="/register" style={outlineBtnStyle}>Get Started</a>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div style={featuredCardStyle}>
              <span style={pricingBadgeStyle}>Most Popular</span>
              <div>
                <h3 style={pricingTitleStyle}>Pro</h3>
                <div style={pricingPriceStyle}>
                  $79<span style={pricingPeriodStyle}>/month</span>
                </div>
                <p>Ideal for active professionals and small businesses.</p>
              </div>
              <ul style={pricingFeaturesStyle}>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Unlimited tool rentals
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Priority booking access
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Enhanced insurance coverage
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  24/7 phone & email support
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Discounted delivery fees
                </li>
              </ul>
              <div>
                <a href="/register" style={primaryBtnStyle}>Get Started</a>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div style={pricingCardStyle}>
              <div>
                <h3 style={pricingTitleStyle}>Enterprise</h3>
                <div style={pricingPriceStyle}>
                  $199<span style={pricingPeriodStyle}>/month</span>
                </div>
                <p>Complete solution for construction companies and large teams.</p>
              </div>
              <ul style={pricingFeaturesStyle}>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  All Pro features included
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Multiple user accounts
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Premium insurance coverage
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Dedicated account manager
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Custom tool requests
                </li>
                <li style={featureItemStyle}>
                  <CheckIcon />
                  Free delivery & pickup
                </li>
              </ul>
              <div>
                <a href="/contact" style={outlineBtnStyle}>Contact Sales</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/03191969510?text=Hi%20ToolAmaze%20Team,%20I%20have%20a%20billing%20question."
        className="btn btn-success d-inline-flex align-items-center"
        target="_blank"
        rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }}
      >
  <i className="fab fa-whatsapp me-2"></i> Chat for Billing
</a>

      {/* FAQ Section */}
      <section style={faqSectionStyle}>
        <div className="container">
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <div style={faqGridStyle}>
            {/* FAQ Item 1 */}
            <div style={faqItemStyle}>
              <h4 style={faqQuestionStyle}>How does the insurance coverage work?</h4>
              <p style={faqAnswerStyle}>Our insurance plans cover accidental damage to tools during the rental period. Basic plans cover up to $1,000, Pro plans cover up to $5,000, and Enterprise plans offer full coverage with no deductible.</p>
            </div>
            
            {/* FAQ Item 2 */}
            <div style={faqItemStyle}>
              <h4 style={faqQuestionStyle}>Can I upgrade my plan anytime?</h4>
              <p style={faqAnswerStyle}>Yes, you can upgrade your plan at any time. The new rate will be prorated for the remainder of your billing cycle. Downgrades take effect at the end of your current billing period.</p>
            </div>
            
            {/* FAQ Item 3 */}
            <div style={faqItemStyle}>
              <h4 style={faqQuestionStyle}>Are there any long-term contracts?</h4>
              <p style={faqAnswerStyle}>No, all our plans are month-to-month with no long-term commitment required. We also offer annual plans at a 15% discount if you prefer to save with a yearly subscription.</p>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;