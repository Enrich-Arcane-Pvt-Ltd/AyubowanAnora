import React from "react";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg", "/img6.jpg"];

const Gallery = () => (
  <section id="gallery" className="section bg-gray-100">
    <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Gallery ${i + 1}`} className="rounded-lg shadow-md hover:scale-105 transition-transform" />
      ))}
    </div>
  </section>
);

export default Gallery;
