"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Updated Data for Event Organizer Context
const slides = [
  {
    id: 1,
    image: "/Images/trade.jpg",
    titleLine1: "GLOBAL",
    titleLine2: "TRADE EXPO",
    // Adapted "Speaker" to be a Keynote or Special Guest
    speakerAvatar: "/Images/avatar-ceo.jpg",
  },
  {
    id: 2,
    image: "/Images/book-fair.jpg",
    titleLine1: "INTERNATIONAL",
    titleLine2: "BOOK FAIR",
    speakerAvatar: "/Images/avatar-author.jpg",
  },
  {
    id: 3,
    image: "/Images/innovative.jpg",
    titleLine1: "AUTOMOTIVE",
    titleLine2: "INNOVATION",
    speakerAvatar: "/Images/avatar-designer.jpg",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const slide = slides[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden text-white bg-black">
      {/* Background Image Carousel with Fade Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0.8, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 z-10 bg-black/40" /> {/* Slightly darker overlay for text readability */}
          <Image
            src={slide.image}
            alt={`${slide.titleLine1} ${slide.titleLine2}`}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-20 flex flex-col justify-between h-full px-6 md:px-12 lg:px-20 py-12 md:py-16 max-w-[1920px] mx-auto">
        {/* Center Content: Big Title */}
        <div className="flex flex-col justify-center flex-1">
          <motion.div
            key={`text-${slide.id}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-[150px] leading-[0.9] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
              {slide.titleLine1} <br />
              {slide.titleLine2}
            </h1>
          </motion.div>

          {/* Featured Guest / Keynote Info */}
          <motion.div
            key={`speaker-${slide.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mt-8 cursor-pointer md:mt-12 group w-fit"
          >
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid items-end grid-cols-1 gap-8 pt-8 border-t md:grid-cols-3 border-white/10">
          {/* Middle Spacer (Optional for statistics or descriptions) */}
          <div className="hidden col-span-1 md:block">
          </div>

          {/* Bottom Right: Navigation Controls */}
          <div className="flex items-center justify-start col-span-1 gap-8 text-sm font-bold tracking-widest uppercase md:justify-end">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 transition-all hover:text-blue-400 hover:-translate-x-1"
            >
              ← Prev
            </button>

            <div className="w-12 h-px bg-white/20"></div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 transition-all hover:text-blue-400 hover:translate-x-1"
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;