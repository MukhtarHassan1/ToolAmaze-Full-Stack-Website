import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.paddingTop = '76px';
    document.body.style.backgroundColor = '#f5f6fa';

    return () => {
      document.body.style.paddingTop = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  const loginSectionStyle = {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 0'
  };

  const loginContainerStyle = {
    background: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  };

  const loginLogoStyle = {
    marginBottom: '30px'
  };

  const loginTitleStyle = {
    fontSize: '2rem',
    fontWeight: 700,
    color: 'var(--dark)',
    marginBottom: '30px'
  };

  const formControlStyle = {
    padding: '12px 15px',
    border: '2px solid #e1e5e9',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    marginBottom: '20px'
  };

  const forgotPasswordStyle = {
    color: 'var(--primary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    display: 'block',
    marginBottom: '25px'
  };

  const loginBtnStyle = {
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

  const registerLinkStyle = {
    color: 'var(--secondary)',
    fontSize: '0.9rem'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.userType === 'admin') {
          navigate('/admin');
        } else if (data.userType === 'user') {
          localStorage.setItem('userId', data.userId); // ✅ Store user ID
          navigate('/dashboard');
        }
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <>
      <Navbar />
      
      <section style={loginSectionStyle}>
        <div className="container">
          <div style={loginContainerStyle}>
            <div style={loginLogoStyle}>
              <img 
                src="/images/logo2.png" 
                alt="ToolAmaze Logo" 
                style={{ height: '60px', width: '60px', borderRadius: '8px' }} 
              />
            </div>
            <h2 style={loginTitleStyle}>Welcome Back</h2>
            <form onSubmit={handleSubmit}>
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
                  type={showPassword ? "text" : "password"} 
                  className="form-control" 
                  placeholder="Password" 
                  style={formControlStyle}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <button 
                  type="button" 
                  className="btn btn-outline-secondary btn-sm mt-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'} Password
                </button>
              </div>
              <button type="submit" style={loginBtnStyle}>
                Login
              </button>
            </form>
            <div style={registerLinkStyle}>
              Don't have an account? <Link to="/register">Register now</Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default LoginPage;
