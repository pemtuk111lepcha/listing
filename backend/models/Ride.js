const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
  vehicleModel: String,
  departureTime: String,
  totalSeats: Number,
  seatsLeft: Number,
  totalTripPrice: Number,
  pickupPoint: String,
  dropoffPoint: String,
  date: String,
  amenities: [String],
  duration: String,
  description: String,
  occupiedSeats: [Number],
});

module.exports = mongoose.model('Ride', RideSchema);
