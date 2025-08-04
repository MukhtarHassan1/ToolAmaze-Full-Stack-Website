import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tools, setTools] = useState([]);

  useEffect(() => {
    document.body.style.fontFamily = "'Poppins', sans-serif";
    document.body.style.backgroundColor = '#f5f6fa';
    document.body.style.overflowX = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    if (window.innerWidth <= 768) {
      setSidebarCollapsed(true);
    }

    const userId = localStorage.getItem('userId');
    if (userId) {
      fetch(`http://localhost:5000/api/tools/${userId}`)
        .then(res => res.json())
        .then(data => setTools(data))
        .catch(err => console.error('Error fetching tools:', err));
    }

    return () => {
      document.body.style.fontFamily = '';
      document.body.style.backgroundColor = '';
      document.body.style.overflowX = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.classList.remove('dark-mode');
    };
  }, []);

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: sidebarCollapsed ? '80px' : '280px',
    background: 'linear-gradient(135deg, #3366ff 0%, #2952cc 100%)',
    color: 'white',
    zIndex: 1000,
    transition: 'all 0.3s ease',
    overflowY: 'auto'
  };

  const mainContentStyle = {
    marginLeft: sidebarCollapsed ? '80px' : '280px',
    transition: 'margin-left 0.3s ease',
    minHeight: '100vh'
  };

  const headerStyle = {
    background: 'white',
    padding: '20px 30px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999
  };

  const searchInputStyle = {
    width: '100%',
    padding: '15px 20px 15px 50px',
    border: '2px solid #e1e5e9',
    borderRadius: '12px',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    background: 'white'
  };

  const toolsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '25px',
    marginTop: '20px'
  };

  const toolCardStyle = {
    background: 'white',
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e1e5e9',
    position: 'relative',
    overflow: 'hidden'
  };

  const accessBtnStyle = {
    background: 'var(--primary)',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontWeight: 500,
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    fontSize: '0.95rem'
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const accessTool = (toolName) => {
    alert(`${toolName} accessed successfully!`);
  };

  return (
    <div>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={{ padding: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img 
            src="/images/logo2.png" 
            alt="Toolamaze Logo" 
            style={{ height: '40px', marginRight: '5px', borderRadius: '8px' }} 
          />
          <div style={{ fontWeight: 700, fontSize: '1.4rem', transition: 'opacity 0.3s ease', opacity: sidebarCollapsed ? 0 : 1 }}>
            ToolAmaze
          </div>
        </div>
        
        <nav style={{ padding: '20px 0' }}>
          <div style={{ marginBottom: '30px' }}>
            <div style={{ padding: '0 20px 10px', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.7, fontWeight: 600, transition: 'opacity 0.3s ease', opacity: sidebarCollapsed ? 0 : 0.7 }}>
              Dashboard
            </div>
            <div style={{ margin: '5px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', textDecoration: 'none', transition: 'all 0.3s ease', borderRadius: 0, gap: '15px', background: 'rgba(255, 255, 255, 0.1)', color: 'white', transform: 'translateX(5px)' }}>
                <i className="bi bi-grid" style={{ width: '20px', textAlign: 'center', fontSize: '1.1rem' }}></i>
                <span style={{ transition: 'opacity 0.3s ease', opacity: sidebarCollapsed ? 0 : 1 }}>Tools Access</span>
              </div>
            </div>
            <div style={{ margin: '5px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'all 0.3s ease', borderRadius: 0, gap: '15px', cursor: 'pointer' }}>
                <i className="bi bi-credit-card" style={{ width: '20px', textAlign: 'center', fontSize: '1.1rem' }}></i>
                <span style={{ transition: 'opacity 0.3s ease', opacity: sidebarCollapsed ? 0 : 1 }}>Subscriptions/Billing</span>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: '30px' }}>
            <div style={{ padding: '0 20px 10px', fontSize: '0.8rem', textTransform: 'uppercase', opacity: sidebarCollapsed ? 0 : 0.7, fontWeight: 600, transition: 'opacity 0.3s ease' }}>
              Quick Actions
            </div>
            <div style={{ margin: '5px 0' }}>
              <Link to="/login" style={{ display: 'flex', alignItems: 'center', padding: '12px 20px', color: 'rgba(255, 255, 255, 0.8)', textDecoration: 'none', transition: 'all 0.3s ease', borderRadius: 0, gap: '15px' }}>
                <i className="bi bi-box-arrow-right" style={{ width: '20px', textAlign: 'center', fontSize: '1.1rem' }}></i>
                <span style={{ transition: 'opacity 0.3s ease', opacity: sidebarCollapsed ? 0 : 1 }}>Logout</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button 
              onClick={toggleSidebar}
              style={{ background: 'none', border: 'none', fontSize: '1.2rem', color: 'var(--dark)', cursor: 'pointer', padding: '8px', borderRadius: 'var(--border-radius)', transition: 'all 0.3s ease' }}
            >
              <i className="bi bi-list"></i>
            </button>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--dark)', margin: 0 }}>
              Access Tools
            </h1>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '30px' }}>
          <div style={{ marginBottom: '30px' }}>
            <div style={{ position: 'relative', maxWidth: '500px' }}>
              <input 
                type="text" 
                placeholder="Search tools..." 
                style={searchInputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="bi bi-search" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary)', fontSize: '1.1rem' }}></i>
            </div>
          </div>

          <div style={toolsGridStyle}>
            {filteredTools.map((tool, index) => (
              <div key={index} style={toolCardStyle}>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--success)', color: 'white', padding: '4px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 500 }}>
                  {tool.status}
                </div>
                <div style={{ width: '80px', height: '80px', margin: '0 auto 20px', background: 'linear-gradient(135deg, #15CD72, #00b894)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', transition: 'all 0.3s ease' }}>
                  <i className="bi bi-box" style={{ color: 'white' }}></i>
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--dark)', marginBottom: '10px' }}>
                  {tool.name}
                </h3>
                <p style={{ color: 'var(--secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                  {tool.category} — ${tool.price}
                </p>
                <a 
                  href={tool.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ ...accessBtnStyle, display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}
                >
                  Access Tool
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;