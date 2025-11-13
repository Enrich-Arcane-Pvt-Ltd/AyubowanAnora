"use client";

import React from "react";
import { MapPin, CalendarDays, Clock, Ticket, Building2, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-600 to-blue-600 text-white py-16 px-4 sm:px-8 md:px-16 lg:px-24 font-[Exhibition] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 relative z-10">
        <div className="text-center px-2 mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-sm font-medium tracking-wider">OFFICIAL INVITATION</span>
            <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-lg">
            AYUBOWAN-ANORA 2026
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-base sm:text-lg font-medium mt-6">
            <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300">
              Exhibition
            </span>
            <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300">
              Trade Fair
            </span>
            <span className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/25 shadow-lg hover:bg-white/20 transition-all duration-300">
              Book Fair
            </span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 group">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">Location</p>
                <p className="font-semibold text-base sm:text-lg">Etisalat Academy</p>
                <p className="text-sm text-gray-200">Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CalendarDays className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">Dates</p>
                <p className="font-semibold text-base sm:text-lg">March 28th & 29th, 2026</p>
                <p className="text-sm text-gray-200">Saturday & Sunday</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">Timings</p>
                <p className="font-semibold text-base sm:text-lg">10:00 AM – 10:00 PM</p>
                <p className="text-sm text-gray-200">Both Days</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-300 mb-1">Entry</p>
                <p className="font-semibold text-base sm:text-lg">Free Entry</p>
                <p className="text-sm text-gray-200">All Visitors & Buyers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-7 h-7 text-blue-300" />
            <h3 className="text-xl sm:text-2xl font-bold">Organized by</h3>
          </div>
          <p className="text-lg sm:text-xl font-bold mb-2 text-blue-100">
            Anora Entertainment UAE & Sri Lanka
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            In collaboration with <span className="font-semibold text-white">Etisalat Academy, UAE</span>
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-5 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"></span>
            About the Event
          </h3>
          <p className="leading-relaxed mb-4 text-base sm:text-lg text-gray-100">
            <strong className="text-white text-lg sm:text-xl">AYUBOWAN–ANORA 2026</strong> is a prestigious international
            exhibition, trade fair, and book fair that brings together Sri
            Lankan entrepreneurs, SMEs, and professionals to connect directly
            with global buyers —{" "}
            <strong className="text-yellow-300">without intermediaries, agents, or brokers.</strong>
          </p>
          <p className="leading-relaxed text-base sm:text-lg text-gray-100">
            This event serves as a powerful gateway for Sri Lankan small and
            medium enterprises to showcase their innovation, craftsmanship, and
            services to the Middle East market and beyond.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600/40 to-blue-600/40 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></span>
            Event Objectives
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "To promote Sri Lankan products and services to UAE and GCC buyers.",
              "To enable direct trade connections between Sri Lankan SMEs and international customers.",
              "To enhance export opportunities and foster cross-border business partnerships.",
              "To strengthen cultural and trade relations between Sri Lanka and the UAE."
            ].map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  {objective.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
                  )}
                </p>
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