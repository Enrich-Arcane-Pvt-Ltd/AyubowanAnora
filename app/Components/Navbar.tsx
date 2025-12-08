"use client";

import React, { useState } from "react";
import { PhoneCall, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 w-full
      bg-[#2a0052]                     /* DARK PURPLE BACKGROUND */
      bg-gradient-to-br from-[#2a0052] via-[#3a0478] to-[#4b0aa0]
      backdrop-blur-xl border-b border-white/20
      shadow-lg shadow-purple-900/40"
    >

      <div className="relative flex items-center justify-between h-[90px] px-4 md:px-6 lg:px-10">

        
        <div className="absolute left-1/2 top-1/2 hidden lg:block -translate-x-1/2 -translate-y-1/2">
          <ul className="flex gap-12 text-white text-[17px] font-bold drop-shadow">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Sponsors & Partners</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Packages & Seminars</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact Us</a></li>
          </ul>
        </div>

        
        <div className="flex items-center gap-5 text-white ml-auto">

        
          <a
            href="tel:+94777193834"
            className="hidden md:flex font-bold items-center gap-3 hover:text-yellow-300 transition"
          >
            <PhoneCall className="w-6 h-6 text-yellow-300" />
            <span className="hidden lg:inline text-[16px]">
              +94 777 193 834 / +971 52 938 3422
            </span>
          </a>

          
          <Search className="w-6 h-6 text-yellow-300 cursor-pointer hover:scale-110 transition" />

      
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      
      {mobileMenuOpen && (
        <div
          className="lg:hidden 
          bg-[#2a0052]/90 backdrop-blur-2xl
          border-t border-white/20 shadow-inner shadow-purple-700/20"
        >
          <ul className="text-white text-[17px] font-bold">

            {[
              "Home",
              "About Us",
              "Sponsors & Partners",
              "Packages & Seminars",
              "Contact Us",
            ].map((item, index) => (
              <li
                key={index}
                className="border-b border-white/20 hover:bg-white/10 transition"
              >
                <a className="block px-6 py-4">{item}</a>
              </li>
            ))}

           
            <li className="hover:bg-white/10 transition">
              <a
                href="tel:+94777193834"
                className="flex items-center gap-3 px-6 py-5"
              >
                <PhoneCall className="w-6 h-6 text-yellow-300" />
                <span className="text-[16px] font-bold">
                  +94 777 193 834 / +971 52 938 3422
                </span>
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
