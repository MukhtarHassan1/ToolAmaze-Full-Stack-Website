import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.paddingTop = '76px';
    document.body.style.backgroundColor = '#f5f6fa';

    return () => {
      document.body.style.paddingTop = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const registerSectionStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0'
  };

  const registerContainerStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    textAlign: 'center'
  };

  const registerLogoStyle = {
    marginBottom: '30px'
  };

  const registerTitleStyle = {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--dark)',
    marginBottom: '30px'
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '20px'
  };

  const formControlStyle = {
    padding: '12px 15px',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    marginBottom: '20px'
  };

  const termsCheckStyle = {
    textAlign: 'left',
    marginBottom: '25px'
  };

  const registerBtnStyle = {
    background: 'linear-gradient(135deg, var(--primary), #6c47ff)',
    border: 'none',
    color: 'white',
    padding: '12px 0',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    width: '100%',
    transition: 'all 0.3s ease',
    marginBottom: '20px'
  };

  const loginLinkStyle = {
    color: 'var(--secondary)',
    fontSize: '0.9rem'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!termsAccepted) {
      alert("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registered successfully. Please login.");
        navigate('/login');
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      
      <section style={registerSectionStyle}>
        <div className="container">
          <div style={registerContainerStyle}>
            <div style={registerLogoStyle}>
              <img 
                src="/images/logo2.png" 
                alt="ToolAmaze Logo" 
                style={{ height: '60px', width: '60px', borderRadius: '8px' }} 
              />
            </div>
            <h2 style={registerTitleStyle}>Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <div style={formGridStyle}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="First Name" 
                    style={formControlStyle}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last Name" 
                    style={formControlStyle}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required 
                  />
                </div>
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email address" 
                  style={formControlStyle}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  style={formControlStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <div className="mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Confirm Password" 
                  style={formControlStyle}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required 
                />
              </div>
              <div style={termsCheckStyle}>
                <div className="form-check">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="termsCheck"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required 
                  />
                  <label className="form-check-label" htmlFor="termsCheck">
                    I accept the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
                  </label>
                </div>
              </div>
              <button type="submit" style={registerBtnStyle}>
                Create Account
              </button>
            </form>
            <div style={loginLinkStyle}>
              Already have an account? <Link to="/login">Login here</Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default RegisterPage;