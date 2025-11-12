"use client";

import React from "react";
import HeroSection from "./Components/HeroSection";
import AboutPage from "./Components/AboutPage";
import ParticipationPackage from "./Components/ParticipationPackage";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <ParticipationPackage />
      <Footer />
    </>
  );
}
