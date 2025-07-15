import React, { useState, useEffect } from 'react';
// In a real React project, you would import your CSS file like this:
import './Cab.css';

// SVG Icons as React components
const icons = {
  MapPin: ({ color = 'currentColor', size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Calendar: ({ color = 'currentColor', size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  Car: ({ size = 32 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16.94V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1.34"/><path d="m18 11-3.46-3.46A2 2 0 0 0 13.08 7H5.21a2 2 0 0 0-1.61 3.21L5 14"/><path d="M7 14h11"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></svg>,
  CheckCircle: ({ size = 60, color = 'currentColor' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Clock: ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  XCircle: ({ size = 18 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
  DollarSign: ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  ChevronDown: ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  RefreshCcw: ({ size = 16 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v6h6"/><path d="M21 12A9 9 0 0 0 6 5.3L3 8"/><path d="M21 22v-6h-6"/><path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/></svg>,
  PlusCircle: ({ size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="16"/><line x1="8" x2="16" y1="12" y2="12"/></svg>,
  Square: ({ size = 32 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>,
  SquareCheck: ({ size = 32, color = 'currentColor' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/></svg>,
  SquareX: ({ size = 32, color = 'currentColor' }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>,
  Briefcase: ({ color = 'currentColor', size = 20 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
};

const SHARED_VEHICLE_CATEGORIES = {
  luxury: { name: 'Luxury', cars: ['Innova Crysta', 'Xylo'] },
  normal: { name: 'Normal', cars: ['Bolero', 'Sumo Gold'] },
  common: { name: 'Common', cars: ['Alto', 'WagonR'] },
};

const CATEGORY_SEATS_MAP = {
  luxury: 7,
  normal: 10,
  common: 4,
};

const BACKEND_URL = "http://localhost:5000/api";

const LOCATIONS = [
  '',
  'Bagdogra Airport',
  '32nd Mile',
  'Gangtok',
  'MG Marg, Gangtok',
  'Hotel Sonam Delek',
  'Sikkim Manipal Institute of Technology',
  'Siliguri Junction',
  'New Jalpaiguri Railway Station'
];

// Helper to determine car category
const isLuxuryCar = (model) => SHARED_VEHICLE_CATEGORIES.luxury.cars.includes(model);
const isNormalCar = (model) => SHARED_VEHICLE_CATEGORIES.normal.cars.includes(model);
const isCommonCar = (model) => SHARED_VEHICLE_CATEGORIES.common.cars.includes(model);

const App = () => {
  const [rideType, setRideType] = useState('shared');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(0);
  const [estimatedFare, setEstimatedFare] = useState(0);
  const [distance, setDistance] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentStep, setCurrentStep] = useState('input');
  const [allSharedRides, setAllSharedRides] = useState([]);
  const [availableSharedRides, setAvailableSharedRides] = useState([]);
  const [selectedSharedRide, setSelectedSharedRide] = useState(null);
  const [showSeatSelectionPopup, setShowSeatSelectionPopup] = useState(false);
  const [showLuggagePopup, setShowLuggagePopup] = useState(false);
  const [showCreateRidePopup, setShowCreateRidePopup] = useState(false);
  const [showContactInfoPopup, setShowContactInfoPopup] = useState(false);
  const [showFullCarSelectionPopup, setShowFullCarSelectionPopup] = useState(false);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMobile, setContactMobile] = useState('');
  const [newRideCategory, setNewRideCategory] = useState('luxury');
  const [newRideCarModel, setNewRideCarModel] = useState('');
  const [fullCarCategory, setFullCarCategory] = useState('luxury');
  const [fullCarModel, setFullCarModel] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userLocation, setUserLocation] = useState('');

  const today = new Date().toISOString().split('T')[0];

  // Auto-detect user location on mount
  React.useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          // Use a free reverse geocoding API (OpenStreetMap Nominatim)
          fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
            .then(res => res.json())
            .then(data => {
              // Try to extract a meaningful location name
              let locName = '';
              if (data.address) {
                locName = data.address.city || data.address.town || data.address.village || data.address.hamlet || data.address.suburb || data.address.state || '';
              }
              setUserLocation(locName);
              // If location matches one of LOCATIONS, set as pickup
              if (LOCATIONS.includes(locName)) setPickup(locName);
            })
            .catch(() => {});
        },
        () => {}
      );
    }
  }, []);

  // Helper function to calculate distance
  const calculateDistance = (pickupLoc, dropoffLoc) => {
    if (pickupLoc && dropoffLoc && pickupLoc.length > 3 && dropoffLoc.length > 3) {
      const dist = (pickupLoc.length + dropoffLoc.length) * 0.7 * 10;
      return parseFloat(dist.toFixed(1));
    }
    return 0;
  };

  // Event Handlers
  const handleRideTypeChange = (newType) => {
    if (currentStep === 'input') {
      handleNewBooking(); // Reset all form fields
      setRideType(newType);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setError('');
    if (id === 'pickup-location') setPickup(value);
    if (id === 'dropoff-location') setDropoff(value);
    if (id === 'date-input') setSelectedDate(value);
    if (id === 'time-input') setSelectedTime(value);
  };
  // Collect user email from input
  const handleContactInputChange = (e) => {
    const { id, value } = e.target;
    setError('');
    if (id === 'contact-name') setContactName(value);
    if (id === 'contact-email') setContactEmail(value); // <-- This sets contactEmail
    if (id === 'contact-mobile') setContactMobile(value);
  };

  const handlePassengerChange = (increment) => {
    setPassengers((prevCount) => {
      let newCount = prevCount + increment;
      if (newCount < 1) newCount = 1;
      if (newCount > 10) newCount = 10;
      return newCount;
    });
  };

  const handleLuggageChange = (increment) => {
    if (increment > 0 && luggage >= 2) {
      setShowLuggagePopup(true);
      return;
    }
    if (luggage + increment < 0) return;
    setLuggage((prevCount) => prevCount + increment);
  };

  const handleBookYourRide = () => {
    if (!pickup.trim() || !dropoff.trim() || !selectedDate || !selectedTime) {
      setError('Please select both pickup and drop-off locations, date, and time.');
      return;
    }
    if (pickup.trim().toLowerCase() === dropoff.trim().toLowerCase()) {
      setError('Pickup and drop-off locations cannot be the same.');
      return;
    }

    if (rideType === 'full') {
      setShowFullCarSelectionPopup(true);
      setFullCarCategory('luxury');
      setFullCarModel('');
      setError('');
    } else {
      setShowContactInfoPopup(true);
      setError('');
    }
  };

  const handleFullCarCategoryChange = (category) => {
    setFullCarCategory(category);
    setFullCarModel('');
    setError('');
  };

  const handleFullCarModelSelect = (model) => {
    setFullCarModel(model);
    setError('');
  };

  const handleConfirmFullCarSelection = () => {
    if (!fullCarModel) {
      setError('Please select a car model for your full car booking.');
      return;
    }
    setShowFullCarSelectionPopup(false);
    setError('');
    setShowContactInfoPopup(true);
  };

  const handleCancelFullCarSelectionPopup = () => {
    setShowFullCarSelectionPopup(false);
    setError('');
    setFullCarCategory('luxury');
    setFullCarModel('');
  };

  const handleConfirmContactInfo = () => {
    if (!contactName.trim() || !contactEmail.trim() || !contactMobile.trim()) {
      setError('Please enter your name, email address, and mobile number.');
      return;
    }

    setLoading(true);
    setError('');
    setSelectedSharedRide(null);
    setShowContactInfoPopup(false);

    if (rideType === 'shared') {
      // Fetch rides from backend with filters (ignore time, only match date)
      fetch(`${BACKEND_URL}/rides?pickupPoint=${encodeURIComponent(pickup.trim())}&dropoffPoint=${encodeURIComponent(dropoff.trim())}&date=${selectedDate}`)
        .then(res => res.json())
        .then(filteredRides => {
          // Only filter by seats left and same date, ignore time
          const filtered = filteredRides.filter(ride =>
            ride.seatsLeft >= passengers &&
            ride.date === selectedDate
          );
          setAvailableSharedRides(filtered);
          setLoading(false);
          setCurrentStep('available-shared-rides');
          setError(filtered.length === 0 ? 'No shared cabs found matching your criteria.' : '');
        })
        .catch(() => {
          setAvailableSharedRides([]);
          setLoading(false);
          setCurrentStep('available-shared-rides');
          setError('Error fetching rides.');
        });
    } else {
      // ...existing code for full car fare calculation...
      const newDistance = calculateDistance(pickup, dropoff);
      const baseFare = 300;
      let modelMultiplier = 1;
      if (isLuxuryCar(fullCarModel)) modelMultiplier = 2.5;
      else if (isNormalCar(fullCarModel)) modelMultiplier = 1.8;
      else if (isCommonCar(fullCarModel)) modelMultiplier = 1.2;

      const fare = (baseFare + (newDistance * 25)) * modelMultiplier;

      setLoading(false);
      setCurrentStep('booked');
      setDistance(newDistance);
      setEstimatedFare(fare);

      // Optionally, POST booking to backend for full car
      fetch(`${BACKEND_URL}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rideType: 'full',
          passengerCount: passengers,
          name: contactName,
          email: contactEmail,
          mobile: contactMobile,
          pickup,
          dropoff,
          date: selectedDate,
          time: selectedTime,
          fare,
          vehicleModel: fullCarModel
        })
      });
    }
  };

  const handleConfirmCreateNewSharedRide = () => {
    if (!newRideCarModel) {
      setError('Please select a car model.');
      return;
    }
    if (!pickup.trim() || !dropoff.trim() || !selectedDate || !selectedTime) {
      setError('Please select pickup, drop-off, date, and time on the main form before creating a ride.');
      return;
    }

    setLoading(true);
    setError('');
    setShowCreateRidePopup(false);

    const newRideTotalSeats = CATEGORY_SEATS_MAP[newRideCategory];
    const newRide = {
      vehicleModel: newRideCarModel,
      departureTime: selectedTime,
      totalSeats: newRideTotalSeats,
      seatsLeft: newRideTotalSeats,
      totalTripPrice: calculateDistance(pickup, dropoff) * 15 || 1200,
      pickupPoint: pickup.trim(),
      dropoffPoint: dropoff.trim(),
      date: selectedDate,
      amenities: ['AC', 'GPS'],
      duration: 'Estimated 3-4 hrs',
      description: 'New shared ride created by user.',
      occupiedSeats: [],
    };

    fetch(`${BACKEND_URL}/rides`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRide)
    })
      .then(res => res.json())
      .then(createdRide => {
        // After creation, fetch rides again (ignore time, only match date)
        return fetch(`${BACKEND_URL}/rides?pickupPoint=${encodeURIComponent(pickup.trim())}&dropoffPoint=${encodeURIComponent(dropoff.trim())}&date=${selectedDate}`);
      })
      .then(res => res.json())
      .then(filteredRides => {
        const filtered = filteredRides.filter(ride =>
          ride.seatsLeft >= passengers &&
          ride.date === selectedDate
        );
        setAllSharedRides(filteredRides);
        setAvailableSharedRides(filtered);
        setLoading(false);
        setError('');
      })
      .catch(() => {
        setLoading(false);
        setError('Error creating ride.');
      });
  };

  const handleConfirmFinalBooking = () => {
    setLoading(true);
    setError('');
    const bookingPayload = {
      rideId: selectedSharedRide._id,
      rideType: 'shared',
      seats: selectedSeats,
      passengerCount: passengers,
      name: contactName,
      email: contactEmail,
      pickup,
      dropoff,
      date: selectedSharedRide.date,
      time: selectedSharedRide.departureTime,
      fare: estimatedFare,
      vehicleModel: selectedSharedRide.vehicleModel
    };
    console.log('Booking payload sent to backend:', bookingPayload); // <-- This line logs the payload

    fetch(`${BACKEND_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingPayload)
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to save booking');
        return res.json();
      })
      .then((booking) => {
        // After booking, fetch rides again to update seat counts
        fetch(`${BACKEND_URL}/rides`)
          .then(res => res.json())
          .then(rides => {
            setAllSharedRides(rides);
            setLoading(false);
            setCurrentStep('booked');
          });

        // Only trigger WhatsApp send request to backend (no WhatsApp logic in frontend)
        fetch(`${BACKEND_URL}/send-whatsapp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            // Send all booking details, including email, to backend
            name: contactName, // use 'name' not 'contactName'
            mobile: contactMobile, // use 'mobile' not 'contactMobile'
            pickup,
            dropoff,
            date: selectedSharedRide.date,
            time: selectedSharedRide.departureTime,
            vehicleModel: selectedSharedRide.vehicleModel,
            seats: selectedSeats,
            fare: estimatedFare,
            email: contactEmail // <-- Ensure email is sent here
          })
        }).catch(() => {
          // Optionally handle WhatsApp send error, but don't block booking flow
        });
      })
      .catch((err) => {
        setLoading(false);
        setError('Booking failed. Please try again.');
      });
  };

  const openCreateRidePopup = () => {
    setShowCreateRidePopup(true);
    setNewRideCategory('luxury');
    setNewRideCarModel('');
    setError('');
  };

  // Fix: Move the reset logic into a function called handleNewBooking
  const handleNewBooking = () => {
    setPickup('');
    setDropoff('');
    setSelectedDate('');
    setSelectedTime('');
    setPassengers(1);
    setLuggage(0);
    setEstimatedFare(0);
    setDistance(0);
    setLoading(false);
    setError('');
    setAvailableSharedRides([]);
    setSelectedSharedRide(null);
    setShowSeatSelectionPopup(false);
    setShowContactInfoPopup(false);
    setShowFullCarSelectionPopup(false);
    setContactName('');
    setContactEmail('');
    setContactMobile('');
    setSelectedSeats([]);
    setCurrentStep('input');
    setShowCreateRidePopup(false);
    setFullCarCategory('luxury');
    setFullCarModel('');
  };

  // Fix: handleSeatSelectionClick should use correct id property for backend (_id)
  const handleSeatSelectionClick = (rideId) => {
      // Try both _id and id for compatibility
      const ride = availableSharedRides.find((r) => r._id === rideId || r.id === rideId);
      setSelectedSharedRide(ride);
      setSelectedSeats([]);
      setShowSeatSelectionPopup(true);
      setError('');
    };
  
    // Fix: handleCancelContactInfoPopup should close the popup and reset error
    const handleCancelContactInfoPopup = () => {
      setShowContactInfoPopup(false);
      setError('');
    };

  // Fix: toggleSeat should be defined and used in seat selection popup
  const toggleSeat = (seatId) => {
    if (!selectedSharedRide) return;
    if (selectedSharedRide.occupiedSeats.includes(seatId)) return;
    if (seatId === -1) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length < passengers) {
        setSelectedSeats([...selectedSeats, seatId]);
      }
    }
    setError('');
  };

  // Toggle seat selection for seat selection popup
  const confirmSeatSelection = () => {
    if (selectedSeats.length !== passengers) {
      setError(`Please select exactly ${passengers} seat(s).`);
      return;
    }
    // Calculate fare for shared ride
    if (selectedSharedRide) {
      const perSeatFare = selectedSharedRide.totalTripPrice / selectedSharedRide.totalSeats;
      setEstimatedFare(perSeatFare * selectedSeats.length);
      setCurrentStep('confirm-shared-booking');
      setError('');
      setShowSeatSelectionPopup(false);
    }
  };

  // Render Functions for different steps/popups
  const renderInputFields = () => (
    <div className="input-section">
      <div className="input-grid-top">
        <div className="input-card">
          <label htmlFor="pickup-location" className="input-label">From</label>
          <div className="input-field-wrapper">
            <span className="input-icon"><icons.MapPin color="#3B82F6" /></span>
            <select id="pickup-location" className="input-select" value={pickup} onChange={handleInputChange} disabled={loading}>
              {/* Add auto-detected location option if available */}
              {userLocation && !LOCATIONS.includes(userLocation) && (
                <option value={userLocation}>{`Your Location (${userLocation})`}</option>
              )}
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc} disabled={loc === dropoff && loc !== ''}>
                  {loc || 'Select Pick Up Point'}
                </option>
              ))}
            </select>
            <span className="select-arrow"><icons.ChevronDown /></span>
          </div>
          {/* Show detected location below dropdown if not in list */}
          {userLocation && !LOCATIONS.includes(userLocation) && (
            <div style={{ fontSize: "0.95rem", color: "#238b45", marginTop: "0.3rem" }}>
              Detected: {userLocation}
            </div>
          )}
        </div>

        <div className="input-card">
          <label htmlFor="dropoff-location" className="input-label">To</label>
          <div className="input-field-wrapper">
            <span className="input-icon"><icons.MapPin color="#EF4444" /></span>
            <select id="dropoff-location" className="input-select" value={dropoff} onChange={handleInputChange} disabled={loading}>
              {LOCATIONS.map((loc) => (
                <option key={loc} value={loc} disabled={loc === pickup && loc !== ''}>
                  {loc || 'Select Drop Point'}
                </option>
              ))}
            </select>
            <span className="select-arrow"><icons.ChevronDown /></span>
          </div>
        </div>
      </div>
      <div className="input-grid-bottom">
        <div className="input-card">
          <label className="input-label">When</label>
          <div className="input-field-wrapper date-time-input-wrapper">
            <span className="input-icon"><icons.Calendar color="#8B5CF6" /></span>
            <input type="date" id="date-input" className="input-text" value={selectedDate} onChange={handleInputChange} min={today} disabled={loading} />
          </div>
          <div className="input-field-wrapper">
            <span className="input-icon"><icons.Clock /></span>
            <input type="time" id="time-input" className="input-text" value={selectedTime} onChange={handleInputChange} disabled={loading} />
          </div>
        </div>
        <div className="input-card">
          <label className="input-label">No. of Passengers</label>
          <div className="passenger-luggage-controls">
            <button type="button" onClick={() => handlePassengerChange(-1)} disabled={passengers <= 1 || loading} className="control-button">-</button>
            <span className="count-display">{passengers}</span>
            <button type="button" onClick={() => handlePassengerChange(1)} disabled={passengers >= 10 || loading} className="control-button">+</button>
          </div>
          <p className="sub-text">Age 7yrs & above</p>
        </div>
        <div className="input-card">
          <label className="input-label">No. of Luggage</label>
          <div className="passenger-luggage-controls">
            <button type="button" onClick={() => handleLuggageChange(-1)} disabled={luggage <= 0 || loading} className="control-button">-</button>
            <span className="count-display">{luggage}</span>
            <button type="button" onClick={() => handleLuggageChange(1)} disabled={loading} className="control-button">+</button>
          </div>
          <p className="sub-text">Max 2 cabin bags</p>
        </div>
      </div>

      {error && (
        <div className="error-message">
          <span className="icon"><icons.XCircle /></span> {error}
        </div>
      )}

      <button
        type="button"
        onClick={handleBookYourRide}
        disabled={loading || !pickup.trim() || !dropoff.trim() || !selectedDate || !selectedTime}
        className="find-ride-button"
      >
        {loading ? (
          <>
            <span className="spinner animate-spin"><icons.Clock /></span> Searching...
          </>
        ) : (
          'Find Your Ride'
        )}
      </button>
    </div>
  );

  const renderLuggagePopup = () => (
    <div id="luggage-alert-popup" className="popup-overlay">
      <div className="popup-content">
        <div className="luggage-icon-wrapper">
          <span className="icon"><icons.Briefcase /></span>
        </div>
        <h3 className="popup-header">Luggage Limit Reached</h3>
        <p className="popup-description">
          You cannot carry more than 2 luggage items in a shared cab. Please book an extra seat for more luggage or reserve a full car.
        </p>
        <button type="button" onClick={() => setShowLuggagePopup(false)} className="popup-button popup-primary-button">
          Got it
        </button>
      </div>
    </div>
  );

  const renderCreateRidePopup = () => (
    <div id="create-ride-popup" className="popup-overlay car-selection-popup">
      <div className="popup-content">
        <h3 className="popup-header">Create a New Shared Ride</h3>
        <p className="popup-description">Choose a vehicle type for your new shared ride.</p>
        <div className="category-buttons">
          {Object.keys(SHARED_VEHICLE_CATEGORIES).map((key) => (
            <button
              key={key}
              type="button"
              data-category={key}
              onClick={() => {
                setNewRideCategory(key);
                setNewRideCarModel('');
              }}
              className={`new-ride-category-btn category-button ${newRideCategory === key ? 'active' : ''}`}
            >
              {SHARED_VEHICLE_CATEGORIES[key].name}
            </button>
          ))}
        </div>

        <div className="car-cards-grid">
          {SHARED_VEHICLE_CATEGORIES[newRideCategory].cars.map((car) => (
            <div
              key={car}
              data-car-name={car}
              onClick={() => {
                setNewRideCarModel(car);
                setError('');
              }}
              className={`new-ride-car-card car-card ${newRideCarModel === car ? 'car-card-selected' : ''}`}
            >
              <img src={`https://placehold.co/100x75/E0E7FF/374151?text=${car.split(' ').join('+')}`} alt={car} />
              <p>{car}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="error-message">
            <span className="icon"><icons.XCircle /></span> {error}
          </div>
        )}

        <div className="action-buttons">
          <button type="button" onClick={() => setShowCreateRidePopup(false)} className="popup-button popup-secondary-button">
            Cancel
          </button>
          <button type="button" onClick={handleConfirmCreateNewSharedRide} disabled={loading || !newRideCarModel} className="popup-button confirm-button">
            {loading ? (
              <>
                <span className="spinner animate-spin"><icons.Clock /></span> Creating...
              </>
            ) : (
              'Confirm & Create'
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderFullCarSelectionPopup = () => (
    <div id="full-car-selection-popup" className="popup-overlay car-selection-popup">
      <div className="popup-content">
        <h3 className="popup-header">Select Your Full Car Type</h3>
        <p className="popup-description">Choose a vehicle type for your private full car booking.</p>
        <div className="category-buttons">
          {Object.keys(SHARED_VEHICLE_CATEGORIES).map((key) => (
            <button
              key={key}
              type="button"
              data-category={key}
              onClick={() => handleFullCarCategoryChange(key)}
              className={`full-car-category-btn category-button ${fullCarCategory === key ? 'active' : ''}`}
            >
              {SHARED_VEHICLE_CATEGORIES[key].name}
            </button>
          ))}
        </div>

        <div className="car-cards-grid">
          {SHARED_VEHICLE_CATEGORIES[fullCarCategory].cars.map((car) => (
            <div
              key={car}
              data-car-name={car}
              onClick={() => handleFullCarModelSelect(car)}
              className={`full-car-car-card car-card ${fullCarModel === car ? 'car-card-selected' : ''}`}
            >
              <img src={`https://placehold.co/100x75/E0E7FF/374151?text=${car.split(' ').join('+')}`} alt={car} />
              <p>{car}</p>
            </div>
          ))}
        </div>

        {error && (
          <div className="error-message">
            <span className="icon"><icons.XCircle /></span> {error}
          </div>
        )}

        <div className="action-buttons">
          <button type="button" onClick={handleCancelFullCarSelectionPopup} className="popup-button popup-secondary-button">
            Cancel
          </button>
          <button type="button" onClick={handleConfirmFullCarSelection} disabled={loading || !fullCarModel} className="popup-button confirm-button">
            {loading ? (
              <>
                <span className="spinner animate-spin"><icons.Clock /></span> Selecting...
              </>
            ) : (
              'Confirm Selection'
            )}
          </button>
        </div>
      </div>
    </div>
  );

  const renderAvailableSharedRides = () => (
    <div className="available-rides-section">
      <div className="search-summary">
        <div className="search-summary-details">
          <p>From: <span>{pickup}</span></p>
          <p>To: <span>{dropoff}</span></p>
          <p>When: <span>{selectedDate}</span></p>
          <p>No. of Seats: <span>{passengers}</span></p>
          <button type="button" onClick={() => setCurrentStep('input')} className="modify-button">
            <span className="icon"><icons.RefreshCcw /></span> Modify
          </button>
        </div>
      </div>
      {error && !availableSharedRides.length && (
        <div className="error-message">
          <span className="icon"><icons.XCircle /></span> {error}
        </div>
      )}

      {availableSharedRides.length > 0 ? (
        availableSharedRides.map((ride) => (
          <div key={ride._id || ride.id} className="ride-card">
            <div className="ride-details-left">
              <div className="ride-car-image">
                <img src="https://placehold.co/80x60/A0C4FF/000000?text=Car" alt="Car" />
              </div>
              <div>
                <p className="ride-model">{ride.vehicleModel}</p>
                <p className="ride-time">
                  <span className="icon"><icons.Calendar /></span> {ride.date} {ride.departureTime}
                </p>
              </div>
            </div>
            <div className="ride-route-details">
              <div className="ride-location-text">
                <p>{ride.pickupPoint}</p><p>IXB</p>
              </div>
              <div className="ride-arrow-separator">
                <span></span><span className="icon"><icons.ChevronDown /></span><span></span>
              </div>
              <div className="ride-location-text">
                <p>{ride.dropoffPoint}</p><p>32M</p>
              </div>
            </div>
            <div className="ride-price-action">
              <p className="seats-left">Seats Left: {ride.seatsLeft}</p>
              <p className="total-price">₹{ride.totalTripPrice.toFixed(2)}</p>
              <button
                type="button"
                onClick={() => handleSeatSelectionClick(ride.id)}
                disabled={loading || passengers > ride.seatsLeft}
                className="btn-select-seat select-seat-button"
              >
                Select Seat
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="no-rides-message">
          <p>No shared cabs available for your search criteria.</p>
          <button type="button" onClick={openCreateRidePopup} disabled={loading} className="create-ride-button">
            {loading ? (
              <>
                <span className="spinner animate-spin"><icons.Clock /></span> Creating...
              </>
            ) : (
              <>
                <span className="icon"><icons.PlusCircle /></span> Create a New Shared Ride
              </>
            )}
          </button>
          <p className="create-ride-button-subtext">By creating a new ride, you're initiating a shared trip that others can join.</p>
        </div>
      )}
    </div>
  );

  const renderSeatSelectionPopup = () => {
    if (!selectedSharedRide) return null;

    let seatGridHtml = null;
    const seatLabelLegend = (
      <div className="seat-legend">
        <div><span className="icon"><icons.SquareCheck size={16} color="#3B82F6" /></span> Selected</div>
        <div><span className="icon"><icons.Square size={16} color="#9CA3AF" /></span> Available</div>
        <div><span className="icon"><icons.SquareX size={16} color="#EF4444" /></span> Occupied</div>
      </div>
    );

    if (isLuxuryCar(selectedSharedRide.vehicleModel)) {
      const seatMap = [
        { id: 0, class: 'seat-position-1', label: '1' },
        { id: -1, class: 'driver-seat', label: 'Driver', type: 'driver' },
        { id: 1, class: 'seat-position-2', label: '2' },
        { id: 2, class: 'seat-position-3', label: '3' },
        { id: 3, class: 'seat-position-4', label: '4' },
        { id: 4, class: 'seat-position-5', label: '5' },
        { id: 5, class: 'seat-position-6', label: '6' },
        { id: 6, class: 'seat-position-7', label: '7' },
      ];

      seatGridHtml = (
        <div className="luxury-seat-grid">
          {seatMap.map((seat) => {
            if (seat.type === 'driver') {
              return <div key={seat.id} className={`luxury-seat-item ${seat.class}`}>{seat.label}</div>;
            }
            const isOccupied = selectedSharedRide.occupiedSeats.includes(seat.id);
            const isSelectedByUser = selectedSeats.includes(seat.id);
            let classes = '';
            if (isOccupied) classes += ' occupied';
            else if (isSelectedByUser) classes += ' selected';
            else classes += ' available';

            return (
              <div
                key={seat.id}
                data-seat-index={seat.id}
                onClick={() => toggleSeat(seat.id)}
                className={`seat-selector luxury-seat-item ${classes} ${seat.class}`}
              >
                {seat.label}
              </div>
            );
          })}
        </div>
      );
    } else if (isNormalCar(selectedSharedRide.vehicleModel)) {
      const seatMap = [
        { id: 0, class: 'seat-normal-position-1', label: '1' },
        { id: 1, class: 'seat-normal-position-2', label: '2' },
        { id: -1, class: 'driver-seat-normal', label: 'Driver', type: 'driver' },
        { id: 2, class: 'seat-normal-position-4', label: '3' },
        { id: 3, class: 'seat-normal-position-5', label: '4' },
        { id: 4, class: 'seat-normal-position-6', label: '5' },
        { id: 5, class: 'seat-normal-position-7', label: '6' },
        { id: 6, class: 'seat-normal-position-8', label: '7' },
        { id: 7, class: 'seat-normal-position-9', label: '8' },
        { id: 8, class: 'seat-normal-position-10', label: '9' },
        { id: 9, class: 'seat-normal-position-11', label: '10' },
      ];

      seatGridHtml = (
        <div className="normal-seat-grid">
          {seatMap.map((seat) => {
            if (seat.type === 'driver') {
              return <div key={seat.id} className={`normal-seat-item ${seat.class}`}>{seat.label}</div>;
            }
            const isOccupied = selectedSharedRide.occupiedSeats.includes(seat.id);
            const isSelectedByUser = selectedSeats.includes(seat.id);
            let classes = '';
            if (isOccupied) classes += ' occupied';
            else if (isSelectedByUser) classes += ' selected';
            else classes += ' available';

            return (
              <div
                key={seat.id}
                data-seat-index={seat.id}
                onClick={() => toggleSeat(seat.id)}
                className={`seat-selector normal-seat-item ${classes} ${seat.class}`}
              >
                {seat.label}
              </div>
            );
          })}
        </div>
      );
    } else if (isCommonCar(selectedSharedRide.vehicleModel)) {
      const seatMap = [
        { id: 0, class: 'seat-common-position-1', label: '1' },
        { id: -1, class: 'driver-seat-common', label: 'Driver', type: 'driver' },
        { id: 1, class: 'seat-common-position-3', label: '3' },
        { id: 2, class: 'seat-common-position-4', label: '4' },
        { id: 3, class: 'seat-common-position-5', label: '5' },
      ];

      seatGridHtml = (
        <div className="common-seat-grid">
          {seatMap.map((seat) => {
            if (seat.type === 'driver') {
              return <div key={seat.id} className={`common-seat-item ${seat.class}`}>{seat.label}</div>;
            }
            const isOccupied = selectedSharedRide.occupiedSeats.includes(seat.id);
            const isSelectedByUser = selectedSeats.includes(seat.id);
            let classes = '';
            if (isOccupied) classes += ' occupied';
            else if (isSelectedByUser) classes += ' selected';
            else classes += ' available';

            return (
              <div
                key={seat.id}
                data-seat-index={seat.id}
                onClick={() => toggleSeat(seat.id)}
                className={`seat-selector common-seat-item ${classes} ${seat.class}`}
              >
                {seat.label}
              </div>
            );
          })}
        </div>
      );
    } else {
      // Fallback generic layout
      seatGridHtml = (
        <div className="grid grid-cols-4 gap-4 justify-items-center mb-6">
          {Array.from({ length: selectedSharedRide.totalSeats }).map((_, index) => {
            const isDriverSeat = index === 1;
            const isOccupied = selectedSharedRide.occupiedSeats.includes(index) || isDriverSeat;
            const isSelectedByUser = selectedSeats.includes(index);
            let classes =
              'relative w-16 h-16 rounded-lg flex items-center justify-center text-white text-lg font-bold cursor-pointer transition-transform transform hover:scale-105';
            if (isOccupied) classes += ' bg-red-500 cursor-not-allowed';
            else if (isSelectedByUser) classes += ' bg-blue-600 shadow-lg';
            else classes += ' bg-gray-400 hover:bg-gray-500';

            return (
              <div key={index} data-seat-index={index} onClick={() => toggleSeat(index)} className={`seat-selector ${classes}`}>
                {isDriverSeat ? (
                  <span className="flex flex-col items-center">
                    <icons.Car /><span className="absolute bottom-1 text-xs">Driver</span>
                  </span>
                ) : isOccupied ? (
                  <span><icons.SquareX size={32} /></span>
                ) : isSelectedByUser ? (
                  <span><icons.SquareCheck size={32} /></span>
                ) : (
                  <span><icons.Square size={32} /></span>
                )}
                {!isDriverSeat && <span className="absolute bottom-1 text-xs">{index + 1}</span>}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div id="seat-selection-popup" className="popup-overlay seat-selection-popup">
        <div className="popup-content">
          <h3 className="popup-header">Select Your Seats</h3>
          <p className="popup-description">You need to select <span>{passengers}</span> seat(s).</p>
          {seatLabelLegend}
          <div className="mb-6">{seatGridHtml}</div>
          {error && (
            <div className="error-message">
              <span className="icon"><icons.XCircle /></span> {error}
            </div>
          )}
          <div className="seat-selection-actions">
            <button
              type="button"
              onClick={confirmSeatSelection}
              disabled={selectedSeats.length !== passengers || loading}
              className="popup-button confirm-button"
            >
              {loading ? (
                <>
                  <span className="spinner animate-spin"><icons.Clock /></span> Confirming...
                </>
              ) : (
                'Confirm Selected Seats'
              )}
            </button>
            <button type="button" onClick={() => setShowSeatSelectionPopup(false)} className="popup-button popup-secondary-button">
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderContactInfoPopup = () => (
    <div id="contact-info-popup" className="popup-overlay contact-info-popup">
      <div className="popup-content">
        <h3 className="popup-header">Enter Your Contact Details</h3>
        <p className="popup-description">Please provide your name, email address, and mobile number to proceed.</p>
        <div className="space-y-4">
          <div className="input-group">
            <label htmlFor="contact-name" className="input-label">Full Name</label>
            <input
              type="text"
              id="contact-name"
              className="input-field"
              value={contactName}
              onChange={handleContactInputChange}
              placeholder="e.g., John Doe"
            />
          </div>
          <div className="input-group">
            <label htmlFor="contact-email" className="input-label">Email Address</label>
            <input
              type="email"
              id="contact-email"
              className="input-field"
              value={contactEmail}
              onChange={handleContactInputChange}
              placeholder="e.g., john@example.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="contact-mobile" className="input-label">Mobile Number</label>
            <input
              type="tel"
              id="contact-mobile"
              className="input-field"
              value={contactMobile}
              onChange={handleContactInputChange}
              placeholder="e.g., 9876543210"
              maxLength={15}
            />
          </div>
        </div>
        {error && (
          <div className="error-message">
            <span className="icon"><icons.XCircle /></span> {error}
          </div>
        )}
        <div className="action-buttons">
          <button type="button" onClick={handleCancelContactInfoPopup} className="popup-button popup-secondary-button">
            Cancel
          </button>
          <button type="button" onClick={handleConfirmContactInfo} className="popup-button popup-primary-button">
            Continue
          </button>
        </div>
      </div>
    </div>
  );

  const renderConfirmSharedBooking = () => {
    if (!selectedSharedRide) return <p>Error: No ride selected.</p>;
    return (
      <div className="confirm-booking-section">
        <h3 className="section-header">Confirm Your Shared Ride</h3>
        <div className="confirm-booking-details">
          <div className="confirm-booking-item"><p>Vehicle:</p><p>{selectedSharedRide.vehicleModel}</p></div>
          <div className="confirm-booking-item"><p>From:</p><p>{selectedSharedRide.pickupPoint}</p></div>
          <div className="confirm-booking-item"><p>To:</p><p>{selectedSharedRide.dropoffPoint}</p></div>
          <div className="confirm-booking-item"><p>Date & Time:</p><p>{selectedSharedRide.date} at {selectedSharedRide.departureTime}</p></div>
          <div className="confirm-booking-item"><p>Your Seats:</p><p>{selectedSeats.length}</p></div>
          <div className="confirm-booking-item total"><p>Total Fare:</p><p>₹{estimatedFare.toFixed(2)}</p></div>
        </div>
        {error && (
          <div className="error-message">
            <span className="icon"><icons.XCircle /></span> {error}
          </div>
        )}
        <button
          type="button"
          onClick={handleConfirmFinalBooking}
          disabled={loading}
          className="confirm-final-button"
        >
          {loading ? (
            <>
              <span className="spinner animate-spin"><icons.Clock /></span> Confirming...
            </>
          ) : (
            'Confirm Booking'
          )}
        </button>
        <button type="button" onClick={() => setCurrentStep('available-shared-rides')} disabled={loading} className="back-to-rides-button">
          Back to Available Rides
        </button>
      </div>
    );
  };

  const renderBookingConfirmedStep = () => {
    const details = rideType === 'shared' && selectedSharedRide ? (
      <>
        <p>Vehicle: {selectedSharedRide.vehicleModel}</p>
        <p>From: {selectedSharedRide.pickupPoint}</p>
        <p>To: {selectedSharedRide.dropoffPoint}</p>
        <p>Date & Time: {selectedSharedRide.date} at {selectedSharedRide.departureTime}</p>
        <p>Your Seats: {selectedSeats.length}</p>
      </>
    ) : (
      <>
        <p>Vehicle: {fullCarModel}</p>
        <p>From: {pickup}</p>
        <p>To: {dropoff}</p>
        <p>Date: {selectedDate}</p>
        <p>Time: {selectedTime}</p>
        <p>Passengers: {passengers}</p>
      </>
    );

    return (
      <div className="booking-confirmed-section">
        <div className="icon-wrapper"><icons.CheckCircle size={60} /></div>
        <h3>Booking Confirmed!</h3>
        <p>Your ride is on its way. Enjoy your journey!</p>
        <div className="booking-summary-details">
          <p className="font-semibold">Ride Type: {rideType === 'shared' ? 'Shared Cab' : 'Full Car'}</p>
          {details}
          <p className="font-bold">Total Paid: ₹{estimatedFare.toFixed(2)}</p>
          <p className="font-semibold mt-4">Customer Name: {contactName}</p>
          <p>Email: {contactEmail}</p>
          <p>Mobile: {contactMobile}</p>
          <p className="font-semibold mt-4">Driver: John Doe</p>
          <p>Vehicle: {(selectedSharedRide?.vehicleModel || fullCarModel)} (DL9C 1234)</p>
          <p>ETA: ~5 minutes</p>
          <p>Contact: +91 98765 43210</p>
        </div>
        <button type="button" onClick={handleNewBooking} className="book-another-button">
          Book Another Ride
        </button>
      </div>
    );
  };

  const isInputStep = currentStep === 'input';

  let currentView;
  switch (currentStep) {
    case 'input':
      currentView = renderInputFields();
      break;
    case 'available-shared-rides':
      currentView = renderAvailableSharedRides();
      break;
    case 'confirm-shared-booking':
      currentView = renderConfirmSharedBooking();
      break;
    case 'booked':
      currentView = renderBookingConfirmedStep();
      break;
    default:
      currentView = renderInputFields();
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      {/*
        In a real React project, you would import your CSS file like this:
        import './style.css';
        For this environment, we've extracted the CSS into a separate immersive artifact.
      */}
      <div id="app-container">
        <div className="header-buttons">
          <button
            type="button"
            id="btn-shared"
            disabled={!isInputStep}
            className={`header-button ${rideType === 'shared' && isInputStep ? 'active' : ''}`}
            onClick={() => handleRideTypeChange('shared')}
          >
            Luxury Shared Cab
          </button>
          <button
            type="button"
            id="btn-full"
            disabled={!isInputStep}
            className={`header-button ${rideType === 'full' && isInputStep ? 'active' : ''}`}
            onClick={() => handleRideTypeChange('full')}
          >
            Reserve a Full Car
          </button>
        </div>

        {currentView}

        <div className="why-choose-us">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <span className="icon"><icons.CheckCircle size={18} /></span> On-Time Departures
            </li>
            <li>
              <span className="icon"><icons.CheckCircle size={18} /></span> Luxury Travel at the Best Price
            </li>
            <li>
              <span className="icon"><icons.CheckCircle size={18} /></span> Best in Service Quality Commitment
            </li>
            <li>
              <span className="icon"><icons.CheckCircle size={18} /></span> Proud Experts in Shared Mobility since 2017
            </li>
          </ul>
        </div>

        {showSeatSelectionPopup && renderSeatSelectionPopup()}
        {showLuggagePopup && renderLuggagePopup()}
        {showCreateRidePopup && renderCreateRidePopup()}
        {showContactInfoPopup && renderContactInfoPopup()}
        {showFullCarSelectionPopup && renderFullCarSelectionPopup()}
      </div>
    </>
  );
};

export default App;

