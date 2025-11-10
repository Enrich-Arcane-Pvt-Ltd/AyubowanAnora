"use client";

import React from "react";
import { MapPin, CalendarDays, Clock, Ticket } from "lucide-react";

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-600 text-white flex items-center justify-center p-8">
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 space-y-6">
        
        {/* Header Section */}
        <div>
          <h1 className="text-center text-2xl font-bold mb-2">
            Official Invitation & Participation Prospectus
          </h1>
          <h2 className="text-center text-xl font-bold text-purple-700">
            AYUBOWAN–ANORA 2026
          </h2>
          <h3 className="text-center text-gray-700 font-medium mt-2">
            Exhibition | Trade Fair | Book Fair
          </h3>
        </div>

        {/* Event Details */}
        <div className="text-sm space-y-2">
          <p className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-700" />
            <strong>Etisalat Academy, Dubai, United Arab Emirates</strong>
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-purple-700" />
            <em>March 28th & 29th, 2026 (Saturday & Sunday)</em>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-700" />
            <em>10:00 AM – 10:00 PM</em>
          </p>
          <p className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-purple-700" />
            <em>Free Entry for All Visitors & Buyers</em>
          </p>
        </div>

        {/* Organized by */}
        <div>
          <h3 className="font-semibold border-t border-gray-300 pt-4">Organized by</h3>
          <p className="mt-1 font-medium text-purple-700">
            📡 Anora Entertainment UAE & Sri Lanka
          </p>
          <p className="text-gray-700">
            In collaboration with <strong>Etisalat Academy, UAE</strong>
          </p>
        </div>

        {/* About the Event */}
        <div>
          <h3 className="font-semibold border-t border-gray-300 pt-4 mb-2">About the Event</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>AYUBOWAN–ANORA 2026</strong> is a prestigious international exhibition,
            trade fair, and book fair that brings together Sri Lankan entrepreneurs, SMEs,
            and professionals to connect directly with global buyers —
            <strong> without intermediaries, agents, or brokers.</strong>
          </p>
          <p className="text-gray-700 mt-2 leading-relaxed">
            This event serves as a powerful gateway for Sri Lankan small and medium enterprises
            to showcase their innovation, craftsmanship, and services to the Middle East market and beyond.
          </p>
        </div>

        {/* Event Objectives */}
        <div>
          <h3 className="font-semibold border-t border-gray-300 pt-4 mb-2">Event Objectives</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              To promote <strong>Sri Lankan products and services</strong> to UAE and GCC buyers.
            </li>
            <li>
              To enable <strong>direct trade connections</strong> between Sri Lankan SMEs and
              international customers.
            </li>
            <li>
              To <strong>enhance export opportunities</strong> and foster cross-border business
              partnerships.
            </li>
            <li>
              To strengthen <strong>cultural and trade relations</strong> between Sri Lanka and the UAE.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
