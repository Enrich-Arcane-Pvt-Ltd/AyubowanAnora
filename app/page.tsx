"use client";

import AboutSection from "./Components/home/About";
import FutureEvents from "./Components/home/FutureEvents";
import HeroSection from "./Components/home/HeroSection";
import InfoBar from "./Components/home/InfoBar";
import Testimonials from "./Components/home/Testimonial";
import TextTicker from "./Components/home/TextTicker";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoBar />
      <AboutSection />
      <TextTicker />
      <FutureEvents />
      {/* <Sponsors /> */}
      <Testimonials />
      {/* <ParticipationPackage /> */}
      {/* <TestimonialSection /> */}
    </>
  );
}
