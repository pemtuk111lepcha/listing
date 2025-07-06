const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride' },
  rideType: String, // 'shared' or 'full'
  seats: [Number],
  passengerCount: Number,
  name: String,
  mobile: String,
  pickup: String,
  dropoff: String,
  date: String,
  time: String,
  fare: Number,
  vehicleModel: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', BookingSchema);
