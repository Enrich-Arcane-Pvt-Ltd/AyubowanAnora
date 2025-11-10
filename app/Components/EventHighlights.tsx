import React from "react";

const highlights = [
  "Over 60 exhibitors representing diverse industries.",
  "Book Fair Pavilion featuring Sri Lankan authors and publishers.",
  "B2B networking sessions with international buyers and distributors.",
  "Cultural showcases celebrating Sri Lankan heritage.",
  "Free admission for all visitors and buyers."
];

const EventHighlights = () => (
  <section id="highlights" className="section bg-gray-100 rounded-2xl shadow-inner">
    <h2 className="text-3xl font-bold text-purple-700 mb-6">Key Highlights</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {highlights.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>
);

export default EventHighlights;
