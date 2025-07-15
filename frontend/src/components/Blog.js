import React from "react";
import "../styles/HomeStay.css";

// Import blog images
import blog1img from "../img/blog/b1.jpg";
import blog2img from "../img/blog/b2.jpg";
import blog3img from "../img/blog/b3.jpg";

// Example blog posts data
const posts = [
  {
    title: "Top 5 Hidden Gems in Kaluk Rinchenpong",
    date: "June 2024",
    excerpt: "Discover the lesser-known places in Kaluk Rinchenpong that offer breathtaking views, unique experiences, and authentic Sikkimese culture.",
    content: "Kaluk and Rinchenpong are home to many hidden gems. From tranquil monasteries to scenic hiking trails, these spots are perfect for travelers seeking peace and adventure. Don't miss the Reesum Monastery, the Orange Orchards, and the local market haat for a true taste of Sikkim.",
    image: blog1img
  },
  {
    title: "A Guide to Homestay Experiences in West Sikkim",
    date: "May 2024",
    excerpt: "Staying at a homestay is the best way to experience local hospitality. Here’s what to expect and how to choose the right homestay for your trip.",
    content: "Homestays in West Sikkim offer cozy rooms, home-cooked meals, and a chance to interact with local families. Whether you prefer mountain views or village life, there’s a homestay for everyone. Book early during peak season!",
    image: blog2img
  },
  {
    title: "Seasonal Activities: Orange Picking & Kiwi Cultivation",
    date: "April 2024",
    excerpt: "Plan your visit around the harvest season for oranges and kiwis. Participate in picking, learn about cultivation, and enjoy fresh fruit straight from the orchards.",
    content: "Orange picking is best from November to January, while kiwi season peaks in late autumn. Local farmers welcome visitors to join the harvest and share stories about their traditions.",
    image: blog3img
  }
];

export default function Blog() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      background: "linear-gradient(135deg, #f0eaea 0%, #e6f7ef 100%)",
      color: "#238b45",
      paddingTop: "2rem"
    }}>
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1.2rem", fontWeight: "bold" }}>
        Blog
      </h1>
      <div style={{ maxWidth: 1200, width: "100%" }}>
        {posts.map((post, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 12px rgba(34,139,69,0.08)",
            marginBottom: "2rem",
            padding: "1.5rem",
            display: "flex",
            flexDirection: idx % 2 === 0 ? "row" : "row-reverse",
            alignItems: "flex-start",
            gap: "1.5rem"
          }}>
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: "90%",
                maxWidth: "400px",
                maxHeight: "220px",
                objectFit: "cover",
                borderRadius: "0.7rem",
                marginBottom: "0"
              }}
            />
            <div style={{ flex: 1 }}>
              <h2 style={{ color: "#238b45", fontSize: "1.4rem", marginBottom: "0.5rem" }}>{post.title}</h2>
              <div style={{ fontSize: "0.95rem", color: "#888", marginBottom: "0.7rem" }}>{post.date}</div>
              <p style={{ fontSize: "1.08rem", color: "#444", marginBottom: "0.7rem" }}>{post.excerpt}</p>
              <div style={{ fontSize: "1rem", color: "#555" }}>{post.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
