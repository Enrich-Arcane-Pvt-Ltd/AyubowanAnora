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
    <section className="relative flex flex-col items-center bg-gradient-to-r from-[#7228e4] to-[#2b6fdc] text-white py-16 sm:py-24 overflow-hidden">

      
      <div
        className="
          relative z-10 flex items-end justify-center
          gap-3 sm:gap-5 md:gap-7 lg:gap-9 xl:gap-12
          mb-12 sm:mb-16 md:mb-20
          px-3 sm:px-6

          /* small screens scroll, large screens centered */
          w-full
          overflow-x-auto no-scrollbar
          whitespace-nowrap
        "
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden rounded-xl shadow-lg 
              hover:shadow-2xl transition-all duration-500 inline-block

              flex-shrink-0

              /* refined responsive sizes to match screenshot */
              w-[78px]  h-[170px]
              xs:w-[95px] xs:h-[210px]
              sm:w-[125px] sm:h-[280px]
              md:w-[150px] md:h-[330px]
              lg:w-[175px] lg:h-[390px]
              xl:w-[195px] xl:h-[440px]

              rotate-[1deg] sm:rotate-[2deg] md:rotate-[3deg]
            "
            style={{
              clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
              border: "2px solid rgba(255,255,255,0.75)",
            }}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              quality={100}
              className="object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        ))}
      </div>

      
      <div className="relative z-10 flex justify-center px-4 w-full">
        <Image
          src="/Images/img7.png"
          alt="Ayubowan Anora 2026 Logo"
          width={900}
          height={350}
          priority
          className="
            object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105

            w-[88%]
            xs:w-[80%]
            sm:w-[68%]
            md:w-[58%]
            lg:w-[50%]
            xl:w-[42%]
          "
        />
      </div>

    </section>
  );
};

export default HeroSection;
