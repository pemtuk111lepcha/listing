import React from "react";
import Footer from "./footer"; // Fix import to match actual filename
import "../styles/about.css"; // Ensure this path is correct for your styles
export default function AboutUs() {
  return (
    <div className="App">
      {/* Background image section with overlay and intro text */}
      <div className="aboutus-bg-section">
        <div className="aboutus-bg-overlay">
          <h1 className="aboutus-bg-title">Welcome to Kaluk Rinchenpong Tourism</h1>
          <p className="aboutus-bg-desc">
            Discover the untouched beauty, vibrant culture, and warm hospitality of Kaluk and Rinchenpong. Our mission is to connect you with authentic local experiences, unique stays, and the true spirit of Sikkim.
          </p>
        </div>
      </div>
      <section className="heading2" id="heading-about">
        <h2>About Kaluk <span>Rinchenpong Tourism</span></h2>
      </section>
      <section className="card-section" style={{ maxWidth: 900, margin: "0 auto" }}>
        <div className="card" style={{ padding: "2rem" }}>
          <h3 className="card-title">Who We Are</h3>
          <p className="card-description">
            Kaluk Rinchenpong Tourism is your trusted travel companion for discovering the best of Kaluk, Rinchenpong, and beyond. We connect travelers with unique homestays, resorts, hotels, and local experiences, making your journey memorable and hassle-free.
          </p>
          <h3 className="card-title" style={{ marginTop: "2rem" }}>Our Mission</h3>
          <p className="card-description">
            To empower travelers to explore offbeat destinations with confidence, comfort, and local insight. We believe in responsible tourism and supporting local communities.
          </p>
          <h3 className="card-title" style={{ marginTop: "2rem" }}>Why Choose Us?</h3>
          <ul style={{ textAlign: "left", margin: "1rem 0 0 1.5rem" }}>
            <li>Curated stays and experiences</li>
            <li>Easy and secure booking</li>
            <li>24x7 guest support</li>
            <li>Free cancellation on most bookings</li>
            <li>Local expertise and recommendations</li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
