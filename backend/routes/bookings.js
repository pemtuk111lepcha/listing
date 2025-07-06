const express = require('express');
const Booking = require('../models/Booking');
const Ride = require('../models/Ride');
const router = express.Router();

// Add: require your WhatsApp/SMS sending logic
const sendWhatsapp = require('./sendWhatsapp');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();

    // If shared ride, update ride seats
    if (booking.rideType === 'shared' && booking.rideId && booking.seats) {
      const ride = await Ride.findById(booking.rideId);
      if (ride) {
        ride.seatsLeft -= booking.seats.length;
        ride.occupiedSeats = [...ride.occupiedSeats, ...booking.seats].sort((a, b) => a - b);
        await ride.save();
      }
    }

    // Send WhatsApp/SMS notification to driver (fire-and-forget)
    sendWhatsapp.sendBookingToDriver(booking).catch(err => {
      console.error('Notification send error:', err);
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all bookings (optionally filter by mobile)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.mobile) filter.mobile = req.query.mobile;
    const bookings = await Booking.find(filter).populate('rideId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
