import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./navbar";
import HomeStay from "./HomeStay";
import TourGuide from "./TourGuide";
import Hotels from "./hotels";
import Resorts from "./Resorts";
import Cab from "./Cab";
import PlaceOfInterest from "./PlaceOfInterest";
import Activities from "./Activities";
import AboutUs from "./AboutUs";

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
        <Route path="/cab" element={<Cab />} />
        <Route path="/places-of-interest" element={<PlaceOfInterest />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<AboutUs />} />
         <Route path="/tourguide" element={<TourGuide />} />
         <Route path="/footer" element={<footer />} />
        {/* Add more routes as you create more pages */}
        {/* <Route path="/activities" element={<Activities />} /> */}
        {/* <Route path="/places" element={<PlaceOfInterest />} /> */}
      </Routes>
   
    </>
  );
}
