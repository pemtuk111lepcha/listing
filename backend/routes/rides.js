const express = require('express');
const Ride = require('../models/Ride');
const router = express.Router();

// Get all rides (optionally filter by pickup/dropoff/date/time)
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.pickupPoint) filter.pickupPoint = req.query.pickupPoint;
    if (req.query.dropoffPoint) filter.dropoffPoint = req.query.dropoffPoint;
    if (req.query.date) filter.date = req.query.date;
    if (req.query.departureTime) filter.departureTime = req.query.departureTime;
    const rides = await Ride.find(filter);
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new ride
router.post('/', async (req, res) => {
  try {
    const ride = new Ride(req.body);
    await ride.save();
    res.status(201).json(ride);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update ride seats (e.g., after booking)
router.patch('/:id/seats', async (req, res) => {
  try {
    const { seatsLeft, occupiedSeats } = req.body;
    const ride = await Ride.findByIdAndUpdate(
      req.params.id,
      { seatsLeft, occupiedSeats },
      { new: true }
    );
    res.json(ride);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
