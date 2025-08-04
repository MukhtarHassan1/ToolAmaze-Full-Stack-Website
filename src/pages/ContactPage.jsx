import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

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

  const contactSectionStyle = {
    padding: '80px 0',
    backgroundColor: '#f5f6fa'
  };

  const contactBoxStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px',
    height: '100%'
  };

  const contactInfoItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '25px'
  };

  const contactIconStyle = {
    width: '50px',
    height: '50px',
    background: 'var(--primary)',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    color: 'white'
  };

  const mapContainerStyle = {
    height: '200px',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundColor: '#e9ecef'
  };

  const submitBtnStyle = {
    background: 'linear-gradient(135deg, var(--primary), #6c47ff)',
    border: 'none',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'all 0.3s ease'
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section style={pageHeaderStyle}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Have questions or need help? We're here for you. Reach out to our team and we'll get back to you as soon as possible.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section style={contactSectionStyle}>
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div style={contactBoxStyle}>
                <h3 className="mb-4">Contact Information</h3>
                
                <div style={contactInfoItemStyle}>
                  <div style={contactIconStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-0">Our Location</h5>
                    <p className="mb-0">Civic Center, Phase 04, Bahria Town <br />Rawalpindi, Pakistan</p>
                  </div>
                </div>
                
                <div style={contactInfoItemStyle}>
                  <div style={contactIconStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                      <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-0">Call Us</h5>
                    <p className="mb-0">+92 301 1234567</p>
                  </div>
                </div>
                
                <div style={contactInfoItemStyle}>
                  <div style={contactIconStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-0">Email Us</h5>
                    <p className="mb-0">toolamaze@gmail.com</p>
                  </div>
                </div>
                
                <div style={contactInfoItemStyle}>
                  <div style={contactIconStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-0">Working Hours</h5>
                    <p className="mb-0">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-lg-8">
              <div style={contactBoxStyle}>
                <h3 className="mb-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          placeholder="Enter Full Name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          placeholder="Enter Email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="subject" 
                      placeholder="How can we help you?" 
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      placeholder="+92 301 1234567" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5"
                      placeholder="Write your message here..." 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" style={submitBtnStyle}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;