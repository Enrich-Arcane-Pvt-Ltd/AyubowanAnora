"use client";

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="
        bg-[#2a0052]
        bg-gradient-to-br from-[#2a0052] via-[#3a0478] to-[#4b0aa0]
        text-gray-200
        pt-24 pb-14
        relative overflow-hidden
      "
    >
     
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
      </div>

     
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20 z-10">

       
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-purple-400/20 transition">
          <h3 className="text-white text-3xl font-bold mb-6">About Us</h3>
          <p className="leading-relaxed text-lg sm:text-xl text-gray-200">
            AYUBOWAN–ANORA 2026 is dedicated to empowering Sri Lankan entrepreneurs
            by creating a direct bridge between SMEs and global buyers. We host
            international exhibitions and trade fairs that showcase Sri Lanka’s
            innovation and craftsmanship. Our mission is to enable Sri Lankan businesses
            to access UAE, GCC, and global markets.
          </p>
        </div>

        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-purple-400/20 transition">
          <h3 className="text-white text-3xl font-bold mb-6">Links</h3>
          <ul className="space-y-4 text-lg sm:text-xl">
            {[
              "Home",
              "About Us",
              "Sponsors & Partners",
              "Packages & Seminars",
              "Contact Us",
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-yellow-300 text-gray-200 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-purple-400/20 transition">
          <h3 className="text-white text-3xl font-bold mb-6">Contacts</h3>

          <ul className="space-y-6 text-lg sm:text-xl">

            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-yellow-300 mt-1" />
              <a
                href="mailto:anorajanaka@gmail.com"
                className="hover:text-yellow-300 transition"
              >
                anorajanaka@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-yellow-300 mt-1" />
              <span className="text-gray-200">
                +94 777 193 834 / +971 52 938 3422
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Globe className="w-6 h-6 text-yellow-300 mt-1" />
              <a
                href="https://www.ayubowan-anora.com"
                target="_blank"
                className="hover:text-yellow-300 transition"
              >
                www.ayubowan-anora.com
              </a>
            </li>

          </ul>
        </div>

      </div>

     
      <div className="relative text-center border-t border-white/20 mt-20 pt-8 text-gray-300 z-10">
        <p className="text-yellow-300 text-2xl font-extrabold tracking-wide mb-2">
          AYUBOWAN–ANORA
        </p>
        <p className="text-lg sm:text-xl font-semibold text-gray-200">
          © {year} AYUBOWAN–ANORA | Organized by Anora Entertainment UAE & Sri Lanka
        </p>
      </div>
    </footer>
  );
}
