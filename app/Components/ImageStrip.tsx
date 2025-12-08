"use client";

import Image from "next/image";

const images = [
  "/public/Images/img1.jpg",
  "/public/Images/img2.jpg",
  "/public/Images/img3.jpg",
  "/public/Images/img4.jpg",
  "/public/Images/img5.jpg",
  "/public/Images/img6.jpg",
  "/public/Images/img7.png",
];

export default function ImageStrip() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 p-10 bg-gradient-to-br from-purple-600 to-blue-500 min-h-screen">
      {images.map((src, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl transform hover:scale-105 transition-transform duration-300 shadow-xl"
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            width={220}
            height={320}
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      ))}
    </div>
  );
}