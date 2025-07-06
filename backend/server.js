const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const rideRoutes = require('./routes/rides');
const bookingRoutes = require('./routes/bookings');
const sendWhatsappRoute = require('./routes/sendWhatsapp');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/rides', rideRoutes);
app.use('/api/bookings', bookingRoutes);

// Add this route to handle /api/send-whatsapp POST requests
app.post('/api/send-whatsapp', async (req, res) => {
  try {
    const sendWhatsapp = require('./routes/sendWhatsapp');
    // Forward the booking payload to the notification function
    const result = await sendWhatsapp.sendBookingToDriver(req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a root route for health check or welcome message
app.get('/', (req, res) => {
  res.send('Cab Booking Backend API is running.');
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/cabapp';


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
