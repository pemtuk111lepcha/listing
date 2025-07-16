import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./navbar";
import HomeStay from "./HomeStay";
import TourGuide from "./TourGuide";
import Hotels from "./hotels";
import Resorts from "./Resorts";
import ComingSoon from "./ComingSoon";
import PlaceOfInterest from "./PlaceOfInterest";
import Activities from "./Activities";
import AboutUs from "./AboutUs";
import Blog from "./Blog"; // Add this import
import Cab from "./Cab";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeStay />} />
        <Route path="/homestay" element={<HomeStay />} />
        <Route path="/tour-guide" element={<TourGuide />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/places-of-interest" element={<PlaceOfInterest />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tourguide" element={<TourGuide />} />
        <Route path="/footer" element={<footer />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
