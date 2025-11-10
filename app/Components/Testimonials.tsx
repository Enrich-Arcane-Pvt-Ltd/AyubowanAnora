import React from "react";

const testimonials = [
  { name: "A. Perera", text: "An incredible opportunity to showcase our brand to global buyers!" },
  { name: "S. Fernando", text: "Professional and well-organized — highly recommended!" },
];

const Testimonials = () => (
  <section id="testimonials" className="section bg-gray-100">
    <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">What People Say</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic mb-2">“{t.text}”</p>
          <p className="text-purple-700 font-semibold">— {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
