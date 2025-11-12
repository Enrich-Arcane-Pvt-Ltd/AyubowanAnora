"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  const images = [
    "/Images/img1.jpg",
    "/Images/img2.jpg",
    "/Images/img3.jpg",
    "/Images/img4.jpg",
    "/Images/img5.jpg",
    "/Images/img6.jpg",
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-blue-600 text-white text-center py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex justify-center flex-wrap gap-5 md:gap-6 mb-10 px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative overflow-hidden shadow-2xl hover:shadow-purple-500/60 transition-all duration-500"
            style={{
              width: "150px",
              height: "240px",
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
              transform: `rotate(${index % 2 === 0 ? "2deg" : "2deg"})`,
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-md"></div>
            
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div 
              className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-90 transition-all duration-500" 
              style={{ clipPath: "polygon(100% 0, 100% 100%, 0 0)" }}
            ></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex justify-center">
        <Image
          src="/Images/img7.png"
          alt="Ayubowan Anora 2026 Logo"
          width={300}
          height={120}
          className="object-contain rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;