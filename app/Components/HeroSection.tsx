import React from "react";
import { CalendarDays, MapPin } from "lucide-react";

const HeroSection = () => (
  <section className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600 text-white text-center">
    <div className="bg-black/30 absolute inset-0" />
    <div className="relative z-10 space-y-4">
      <h1 className="text-4xl font-bold md:text-6xl">AYUBOWAN–ANORA 2026</h1>
      <p className="text-lg md:text-xl">Exhibition • Trade Fair • Book Fair</p>
      <div className="flex flex-col items-center space-y-2 mt-4">
        <p className="flex items-center gap-2">
          <MapPin className="w-5 h-5" /> Etisalat Academy, Dubai, UAE
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5" /> March 28–29, 2026 | 10:00 AM – 10:00 PM
        </p>
        <p className="text-yellow-300 font-semibold">Free Entry for All Visitors & Buyers</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
