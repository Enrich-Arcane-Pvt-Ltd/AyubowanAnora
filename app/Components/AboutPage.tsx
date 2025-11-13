"use client";

import React from "react";
import { MapPin, CalendarDays, Clock, Ticket, Building2, Sparkles } from "lucide-react";
import { Permanent_Marker } from "next/font/google";

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 text-white py-24 px-6 sm:px-12 md:px-24 lg:px-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        {/* Title Section */}
        <div className="text-center px-2 mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-sm px-10 py-4 rounded-full border border-white/20">
            <Sparkles className="w-7 h-7 text-yellow-300 animate-pulse" />
            <span className="text-lg sm:text-xl font-semibold tracking-wider">OFFICIAL INVITATION</span>
            <Sparkles className="w-7 h-7 text-yellow-300 animate-pulse" />
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg ${permanentMarker.className}`}
          >
            AYUBOWAN–ANORA 2026
          </h1>

          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-xl sm:text-2xl font-semibold mt-10">
            {["Exhibition", "Trade Fair", "Book Fair"].map((item) => (
              <span
                key={item}
                className="bg-white/15 backdrop-blur-md px-8 py-4 rounded-lg border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Event Info */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 sm:p-12 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="grid sm:grid-cols-2 gap-10">
            {[
              {
                icon: <MapPin className="w-8 h-8 text-white" />,
                title: "Location",
                subtitle: "Etisalat Academy",
                desc: "Dubai, UAE",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                icon: <CalendarDays className="w-8 h-8 text-white" />,
                title: "Dates",
                subtitle: "March 28th & 29th, 2026",
                desc: "Saturday & Sunday",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: <Clock className="w-8 h-8 text-white" />,
                title: "Timings",
                subtitle: "10:00 AM – 10:00 PM",
                desc: "Both Days",
                gradient: "from-indigo-500 to-purple-500",
              },
              {
                icon: <Ticket className="w-8 h-8 text-white" />,
                title: "Entry",
                subtitle: "Free Entry",
                desc: "All Visitors & Buyers",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6 group">
                <div
                  className={`bg-gradient-to-br ${item.gradient} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-base uppercase tracking-wider text-gray-300 mb-1">{item.title}</p>
                  <p className="font-semibold text-xl sm:text-2xl">{item.subtitle}</p>
                  <p className="text-lg text-gray-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organized by */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 sm:p-12 border border-white/20 shadow-xl">
          <div className="flex items-center gap-5 mb-6">
            <Building2 className="w-10 h-10 text-blue-300" />
            <h3 className="text-3xl sm:text-4xl font-bold">Organized by</h3>
          </div>
          <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-100">
            Anora Entertainment UAE & Sri Lanka
          </p>
          <p className="text-xl sm:text-2xl text-gray-200">
            In collaboration with <span className="font-semibold text-white">Etisalat Academy, UAE</span>
          </p>
        </div>

        {/* About the Event */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 sm:p-12 border border-white/20 shadow-2xl">
          <h3 className="text-4xl sm:text-5xl font-bold mb-8 flex items-center gap-4">
            <span className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></span>
            About the Event
          </h3>
          <p className="leading-relaxed mb-6 text-xl sm:text-2xl text-gray-100">
            <strong className="text-white text-2xl sm:text-3xl">AYUBOWAN–ANORA 2026</strong> is a prestigious
            international exhibition, trade fair, and book fair connecting Sri Lankan entrepreneurs directly with
            global buyers —{" "}
            <strong className="text-yellow-300">without intermediaries, agents, or brokers.</strong>
          </p>
          <p className="leading-relaxed text-xl sm:text-2xl text-gray-100">
            This event is a powerful gateway for Sri Lankan SMEs to showcase innovation, craftsmanship, and services to
            the Middle East and beyond.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-lg rounded-3xl p-10 sm:p-12 border border-white/20 shadow-2xl">
          <h3 className="text-4xl sm:text-5xl font-bold mb-8 flex items-center gap-4">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></span>
            Event Objectives
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "To promote Sri Lankan products and services to UAE and GCC buyers.",
              "To enable direct trade connections between Sri Lankan SMEs and international customers.",
              "To enhance export opportunities and foster cross-border business partnerships.",
              "To strengthen cultural and trade relations between Sri Lanka and the UAE.",
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-5 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default AboutPage;
