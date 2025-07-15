import React from "react";
import "../styles/HomeStay.css"; // Or create a new CSS file for custom styles

export default function ComingSoon() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #f0eaea 0%, #e6f7ef 100%)",
      color: "#238b45"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1.2rem", fontWeight: "bold" }}>
        Coming Soon
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        This page is under construction. Please check back later!
      </p>
    </div>
  );
}
