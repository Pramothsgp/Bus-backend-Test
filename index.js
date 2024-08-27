const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Npr@m07h', // Replace with your MySQL password
  database: 'Bus_Management_Data_temp' // Replace with your MySQL database name
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Endpoint to fetch all data from RealTime_data
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM RealTime_data', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
      return;
    }
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
