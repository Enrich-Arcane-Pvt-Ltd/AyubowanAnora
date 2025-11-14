"use client";

import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutPage from "./Components/AboutPage";
import ParticipationPackage from "./Components/ParticipationPackage";
import ContactPage from "./Components/ContactPage";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPage />
      <ParticipationPackage />
      <ContactPage />
      <Footer />
    </>
  );
}
