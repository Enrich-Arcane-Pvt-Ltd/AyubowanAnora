"use client";

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-600 text-white pt-40 pb-28 relative overflow-hidden">

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        
        <div className="text-center mb-20">
          <h2 className="text-6xl sm:text-7xl font-extrabold text-white drop-shadow-lg">
            Drop a Line
          </h2>
          <span className="text-cyan-300 text-4xl">~</span>
        </div>

        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 sm:p-14 shadow-xl border border-white/20">
          <form className="space-y-10">

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <label className="text-2xl font-semibold mb-3 block">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-5 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-gray-200 focus:ring-2 focus:ring-cyan-300"
                />
              </div>

              <div>
                <label className="text-2xl font-semibold mb-3 block">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-5 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-gray-200 focus:ring-2 focus:ring-cyan-300"
                />
              </div>
            </div>

            
            <div>
              <label className="text-2xl font-semibold mb-3 block">Your Message</label>
              <textarea
                rows={6}
                placeholder="Type your message"
                className="w-full p-5 rounded-xl bg-white/20 border border-white/30 text-white text-xl placeholder-gray-200 focus:ring-2 focus:ring-cyan-300"
              ></textarea>
            </div>

            
            <div className="flex items-start gap-4 text-gray-100 text-xl">
              <input type="checkbox" className="w-6 h-6" />
              <span>I agree that my submitted data is being collected and stored.</span>
            </div>

            
            <button
              type="submit"
              className="px-12 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-2xl rounded-xl shadow-xl hover:shadow-cyan-300/30 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        
        <div className="mt-24 relative">

          
          <iframe
            src="https://www.google.com/maps?q=Colombo,%20Sri%20Lanka&output=embed"
            className="w-full h-[500px] rounded-3xl border-none shadow-xl"
            loading="lazy"
          ></iframe>

          
          <div className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl p-8 rounded-2xl w-96 text-white">
            <h3 className="text-3xl font-bold mb-6">Find Us</h3>

            <ul className="space-y-6 text-xl">
              <li className="flex items-start gap-5">
                <Mail className="w-7 h-7 text-cyan-300" />
                <a href="mailto:anorajanaka@gmail.com" className="hover:underline">
                  anorajanaka@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-5">
                <Phone className="w-7 h-7 text-cyan-300" />
                <span>+94 777 193 834 / +971 52 938 3422</span>
              </li>

              <li className="flex items-start gap-5">
                <Globe className="w-7 h-7 text-cyan-300" />
                <a
                  href="https://www.ayubowan-anora.com"
                  target="_blank"
                  className="hover:underline"
                >
                  www.ayubowan-anora.com
                </a>
              </li>
            </ul>
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
}
