import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState([]);
  const [tools, setTools] = useState([]);
  const [selectedTool, setSelectedTool] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [newTool, setNewTool] = useState({
    name: '',
    category: '',
    price: '',
    status: 'Active'
  });

  useEffect(() => {
    if (activeTab === 'users' || activeTab === 'tools' || activeTab === 'dashboard') {
      fetch('http://localhost:5000/api/users').then(res => res.json()).then(setUsers);
      fetch('http://localhost:5000/api/all-tools').then(res => res.json()).then(setTools);
    }
  }, [activeTab]);

  const handleToolChange = (e) => {
    const { name, value } = e.target;
    setNewTool(prev => ({ ...prev, [name]: value }));
  };

  const addTool = async () => {
    const { name, category, price, status } = newTool;
    if (!name || !category || !price) return alert('Please fill all fields');

    try {
      const res = await fetch('http://localhost:5000/api/add-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTool)
      });
      const result = await res.json();
      alert(result.message || 'Tool added');
      setNewTool({ name: '', category: '', price: '', status: 'Active' });
      fetch('http://localhost:5000/api/all-tools').then(res => res.json()).then(setTools);
    } catch {
      alert('Error adding tool');
    }
  };

  const deleteTool = async (toolId) => {
    if (!window.confirm("Are you sure you want to delete this tool?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/delete-tool/${toolId}`, { method: 'DELETE' });
      const result = await res.json();
      alert(result.message || 'Tool deleted');
      fetch('http://localhost:5000/api/all-tools').then(res => res.json()).then(setTools);
    } catch {
      alert('Error deleting tool');
    }
  };

  const assignTool = async (userId) => {
    const toolId = selectedTool[userId];
    if (!toolId) return alert('Select a tool');
    await fetch('http://localhost:5000/api/assign-tool', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, toolId })
    });
    alert('Tool assigned');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const containerStyle = {
    display: 'flex',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: darkMode ? '#1e1e2f' : '#f5f6fa',
    minHeight: '100vh',
    color: darkMode ? '#fff' : '#000'
  };

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '250px',
    background: 'linear-gradient(135deg, #3366ff 0%, #2952cc 100%)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px'
  };

  const contentStyle = {
    marginLeft: '250px',
    padding: '30px',
    flex: 1
  };

  return (
    <div style={containerStyle}>
      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
            <img src="/images/logo2.png" alt="Logo" style={{ height: '40px', borderRadius: '8px' }} />
            <h2 style={{ fontSize: '1.4rem' }}>Admin Panel</h2>
          </div>
          <div onClick={() => setActiveTab('dashboard')} style={{ cursor: 'pointer', margin: '10px 0' }}>
            <i className="bi bi-bar-chart-line"></i> Dashboard
          </div>
          <div onClick={() => setActiveTab('users')} style={{ cursor: 'pointer', margin: '10px 0' }}>
            <i className="bi bi-people"></i> Users
          </div>
          <div onClick={() => setActiveTab('tools')} style={{ cursor: 'pointer', margin: '10px 0' }}>
            <i className="bi bi-tools"></i> Tools
          </div>
        </div>
        <div>
          <div onClick={handleLogout} style={{ cursor: 'pointer', marginTop: '20px', color: 'white', textDecoration: 'underline' }}>
            <i className="bi bi-box-arrow-right"></i> Logout
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={contentStyle}>
        {activeTab === 'dashboard' && (
          <>
            <h1>Welcome to Admin Dashboard</h1>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
              <div style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h3>Total Users</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{users.length}</p>
              </div>
              <div style={{ flex: 1, background: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h3>Total Tools</h3>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{tools.length}</p>
              </div>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <>
            <h2>User Management</h2>
            <table style={{ width: '100%', background: 'white', borderRadius: '8px', padding: '20px' }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Assign Tool</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>
                      <select
                        value={selectedTool[user.id] || ''}
                        onChange={(e) => setSelectedTool({ ...selectedTool, [user.id]: e.target.value })}
                        style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #ccc' }}
                      >
                        <option value="">Select Tool</option>
                        {tools.map(tool => (
                          <option key={tool.id} value={tool.id}>{tool.name}</option>
                        ))}
                      </select>
                      <button
                        onClick={() => assignTool(user.id)}
                        style={{
                          marginLeft: '10px',
                          padding: '6px 12px',
                          background: '#3366ff',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {activeTab === 'tools' && (
          <>
            <h2>Tool List</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
              {tools.map(tool => (
                <div
                  key={tool.id}
                  style={{
                    background: '#fff',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ fontSize: '1rem' }}>
                    <strong>{tool.name}</strong> - {tool.category}
                  </span>
                  <button
                    onClick={() => deleteTool(tool.id)}
                    style={{
                      background: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <h3>Add New Tool</h3>
            <div
              style={{
                background: '#fff',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              <input
                name="name"
                placeholder="Tool Name"
                value={newTool.name}
                onChange={handleToolChange}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flex: '1 1 150px' }}
              />
              <input
                name="category"
                placeholder="Category"
                value={newTool.category}
                onChange={handleToolChange}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flex: '1 1 150px' }}
              />
              <input
                name="price"
                placeholder="Price"
                value={newTool.price}
                onChange={handleToolChange}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flex: '1 1 100px' }}
              />
              <select
                name="status"
                value={newTool.status}
                onChange={handleToolChange}
                style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', flex: '1 1 100px' }}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <button
                onClick={addTool}
                style={{
                  padding: '10px 20px',
                  background: '#3366ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  flex: '1 1 120px'
                }}
              >
                Add Tool
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default AdminPage;
