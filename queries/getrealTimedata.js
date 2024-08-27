// queries/getRealTimeData.js

const db = require('../db'); // Import your database connection

// Function to get all data from the RealTime_data table
const getRealTimeData = (callback) => {
  db.query('SELECT * FROM RealTime_data', (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};

module.exports = getRealTimeData;
