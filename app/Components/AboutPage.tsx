"use client";

import React from "react";
import { MapPin, CalendarDays, Clock, Ticket, Building2 } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-700 to-blue-600 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24 font-[Exhibition]">
      <div className="max-w-5xl mx-auto space-y-10">

       
        <div className="text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Official Invitation & Participation Prospectus
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
            AYUBOWAN–ANORA 2026
          </h2>
          <p className="text-base sm:text-lg font-medium">
            Exhibition | Trade Fair | Book Fair
          </p>
        </div>

       
        <hr className="border-gray-300 opacity-70" />

        
        <div className="space-y-3 text-sm sm:text-base md:text-lg">
          <p className="flex flex-wrap items-center gap-2">
            <MapPin className="w-5 h-5 text-white flex-shrink-0" />
            <span>
              <em>Etisalat Academy, Dubai, United Arab Emirates</em>
            </span>
          </p>

          <p className="flex flex-wrap items-center gap-2">
            <CalendarDays className="w-5 h-5 text-white flex-shrink-0" />
            <em>March 28th & 29th, 2026 (Saturday & Sunday)</em>
          </p>

          <p className="flex flex-wrap items-center gap-2 italic">
            <Clock className="w-5 h-5 text-white flex-shrink-0" />
            10:00 AM – 10:00 PM
          </p>

          <p className="flex flex-wrap items-center gap-2 italic">
            <Ticket className="w-5 h-5 text-white flex-shrink-0" />
            Free Entry for All Visitors & Buyers
          </p>
        </div>

     
        <hr className="border-gray-300 opacity-70" />

        
        <div className="text-sm sm:text-base md:text-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
            Organized by
          </h3>
          <p className="flex flex-wrap items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-white flex-shrink-0" />
            <span>
              <strong>Anora Entertainment UAE & Sri Lanka</strong>
            </span>
          </p>
          <p>
            In collaboration with{" "}
            <strong>Etisalat Academy, UAE</strong>
          </p>
        </div>

       
        <hr className="border-gray-300 opacity-70" />

        
        <div className="text-sm sm:text-base md:text-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
            About the Event
          </h3>
          <p className="leading-relaxed mb-3 text-gray-100">
            <strong>AYUBOWAN–ANORA 2026</strong> is a prestigious international
            exhibition, trade fair, and book fair that brings together Sri
            Lankan entrepreneurs, SMEs, and professionals to connect directly
            with global buyers —{" "}
            <strong>without intermediaries, agents, or brokers.</strong>
          </p>
          <p className="leading-relaxed text-gray-100">
            This event serves as a powerful gateway for Sri Lankan small and
            medium enterprises to showcase their innovation, craftsmanship, and
            services to the Middle East market and beyond.
          </p>
        </div>

     
        <hr className="border-gray-300 opacity-70" />

        
        <div className="text-sm sm:text-base md:text-lg">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
            Event Objectives
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-100">
            <li>
              To promote <strong>Sri Lankan products and services</strong> to
              UAE and GCC buyers.
            </li>
            <li>
              To enable <strong>direct trade connections</strong> between Sri
              Lankan SMEs and international customers.
            </li>
            <li>
              To <strong>enhance export opportunities</strong> and foster
              cross-border business partnerships.
            </li>
            <li>
              To <strong>strengthen cultural and trade relations</strong>{" "}
              between Sri Lanka and the UAE.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
