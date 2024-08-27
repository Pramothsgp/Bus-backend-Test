// db.js

const mysql = require('mysql2');

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

module.exports = db;
