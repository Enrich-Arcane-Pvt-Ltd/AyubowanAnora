import React from "react";

const team = [
  { name: "Janaka Anora", role: "Organizer", image: "/team1.jpg" },
  { name: "Ahamed N.", role: "Coordinator", image: "/team2.jpg" },
];

const OurTeam = () => (
  <section id="team" className="section">
    <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Our Team</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {team.map((m, i) => (
        <div key={i} className="text-center">
          <img src={m.image} alt={m.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
          <h3 className="font-semibold text-lg">{m.name}</h3>
          <p className="text-gray-500">{m.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default OurTeam;
