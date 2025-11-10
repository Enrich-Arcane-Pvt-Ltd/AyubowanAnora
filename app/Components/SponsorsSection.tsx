import React from "react";

const sponsors = ["/sponsor1.png", "/sponsor2.png", "/sponsor3.png"];

const SponsorsSection = () => (
  <section id="sponsors" className="section bg-white">
    <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Our Sponsors</h2>
    <div className="flex flex-wrap justify-center gap-6">
      {sponsors.map((s, i) => (
        <img key={i} src={s} alt={`Sponsor ${i + 1}`} className="h-16 object-contain" />
      ))}
    </div>
  </section>
);

export default SponsorsSection;
