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
    <section className="relative flex flex-col items-center justify-center bg-[#7028e4] text-white text-center py-28 sm:py-32 overflow-hidden">
      
      {/* Image Row */}
      <div
        className="relative z-10 flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 
                   mb-16 sm:mb-20 md:mb-24 px-3 sm:px-6 translate-x-6 sm:translate-x-10 flex-wrap md:flex-nowrap"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
            style={{
              width: "clamp(140px, 22vw, 240px)",
              height: "clamp(320px, 60vh, 520px)",
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
              border: "2.5px solid rgba(255,255,255,0.85)",
              flexShrink: 0,
              transform: `translateY(${index % 2 === 0 ? "-25px" : "25px"})`,
            }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              priority
              quality={100}
              className="object-cover transition-transform duration-700 hover:scale-110"
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1536px) 220px, 240px"
            />
          </div>
        ))}
      </div>

      {/* Center Logo */}
      <div className="relative z-10 flex justify-center w-full px-4">
        <Image
          src="/Images/img7.png"
          alt="Ayubowan Anora 2026 Logo"
          width={760}
          height={260}
          priority
          quality={100}
          className="object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105
                     max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[760px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
