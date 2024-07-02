const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config({ path: './config/.env' });

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database.');
});

// Retrieve available destinations
app.get('/destinations', (req, res) => {
  const query = 'SELECT * FROM destinations';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Create a new booking
app.post('/bookings', (req, res) => {
  const { userId, destinationId, bookingDate, status } = req.body;
  if (!userId || !destinationId || !bookingDate || !status) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const query = 'INSERT INTO bookings (userId, destinationId, bookingDate, status) VALUES (?, ?, ?, ?)';
  db.query(query, [userId, destinationId, bookingDate, status], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
    } else {
      res.status(201).json({ message: 'Booking created', bookingId: result.insertId });
    }
  });
});

// Retrieve booking details by bookingId
app.get('/bookings/:bookingId', (req, res) => {
  const { bookingId } = req.params;
  const query = 'SELECT * FROM bookings WHERE id = ?';
  db.query(query, [bookingId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Booking not found' });
    } else {
      res.status(200).json(results[0]);
    }
  });
});

// Retrieve all bookings for a specific user
app.get('/bookings/user/:userId', (req, res) => {
  const { userId } = req.params;
  const query = 'SELECT * FROM bookings WHERE userId = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database query failed' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'No bookings found for this user' });
    } else {
      res.status(200).json(results);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
