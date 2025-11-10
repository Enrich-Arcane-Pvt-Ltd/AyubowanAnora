"use client";

import React from "react";
import HeroSection from "./Components/HeroSection";
import AboutPage from "./Components/AboutPage";
import EventHighlights from "./Components/EventHighlights";
import EventObjectives from "./Components/EventObjectives";
import ParticipationPackage from "./Components/ParticipationPackage";
import Gallery from "./Components/Gallery";
import OurTeam from "./Components/OurTeam";
import SponsorsSection from "./Components/SponsorsSection";
import Testimonials from "./Components/Testimonials";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPage />
      <EventHighlights />
      <EventObjectives />
      <ParticipationPackage />
      <Gallery />
      <OurTeam />
      <SponsorsSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
  );
}
