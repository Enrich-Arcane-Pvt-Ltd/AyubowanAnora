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
            className="relative overflow-hidden shadow-lg"
            style={{
              width: "150px",
              height: "240px",
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
              transform: `rotate(${index % 2 === 0 ? "-5deg" : "5deg"})`,
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
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
