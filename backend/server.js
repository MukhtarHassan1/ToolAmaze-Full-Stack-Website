const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'ai_tools_db'
});

db.connect(err => {
  if (err) {
    console.log('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// REGISTER API
app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Email already registered' });
      }
      return res.status(500).json({ message: 'Server error' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// LOGIN API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const adminQuery = 'SELECT * FROM admin WHERE email = ? AND password = ?';
  db.query(adminQuery, [email, password], (adminErr, adminResult) => {
    if (adminErr) return res.status(500).json({ message: 'Server error' });

    if (adminResult.length > 0) {
      return res.status(200).json({ userType: 'admin' });
    }

    const userQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(userQuery, [email, password], (userErr, userResult) => {
      if (userErr) return res.status(500).json({ message: 'Server error' });

      if (userResult.length > 0) {
        const user = userResult[0];
        return res.status(200).json({ userType: 'user', userId: user.id });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    });
  });
});

// GET ALL USERS
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users' });
    }
    res.json(results);
  });
});

// GET ALL TOOLS
app.get('/api/all-tools', (req, res) => {
  const query = 'SELECT * FROM tools';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tools:', err);
      return res.status(500).json({ message: 'Error fetching tools' });
    }
    res.json(results);
  });
});

// ADD TOOL (now includes 'link')
app.post('/api/add-tool', (req, res) => {
  const { name, category, price, status, link } = req.body;
  if (!name || !category || !price || !status || !link) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const query = 'INSERT INTO tools (name, category, price, status, link) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, category, price, status, link], (err, result) => {
    if (err) {
      console.error('Error adding tool:', err);
      return res.status(500).json({ message: 'Error adding tool' });
    }
    res.status(201).json({ message: 'Tool added successfully' });
  });
});

// DELETE TOOL
app.delete('/api/delete-tool/:id', (req, res) => {
  const toolId = req.params.id;
  db.query('DELETE FROM tools WHERE id = ?', [toolId], (err, result) => {
    if (err) {
      console.error('Error deleting tool:', err);
      return res.status(500).json({ message: 'Failed to delete tool' });
    }
    res.json({ message: 'Tool deleted successfully' });
  });
});

// ASSIGN TOOL TO USER
app.post('/api/assign-tool', (req, res) => {
  const { userId, toolId } = req.body;
  if (!userId || !toolId) {
    return res.status(400).json({ message: 'Missing userId or toolId' });
  }

  const query = 'INSERT INTO assignment (user_id, tool_id) VALUES (?, ?)';
  db.query(query, [userId, toolId], (err, result) => {
    if (err) {
      console.error('Assignment error:', err);
      return res.status(500).json({ message: 'Assignment failed' });
    }
    res.json({ message: 'Tool assigned successfully' });
  });
});

// GET TOOLS ASSIGNED TO SPECIFIC USER (now includes 'link')
app.get('/api/tools/:userId', (req, res) => {
  const userId = req.params.userId;
  const query = `
    SELECT tools.id, tools.name, tools.category, tools.price, tools.status, tools.link
    FROM tools
    JOIN assignment ON tools.id = assignment.tool_id
    WHERE assignment.user_id = ?
  `;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching assigned tools:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
