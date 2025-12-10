"use client";

import { Cpu, Gem, Globe, Layers, Shield } from "lucide-react"; // Using Lucide icons as logo placeholders

const sponsors = [
    { id: 1, name: "Prestige Platinum", icon: <Layers size={32} /> },
    { id: 2, name: "Micro Software", icon: <Cpu size={32} /> },
    { id: 3, name: "Globe Event", icon: <Globe size={32} /> },
    { id: 4, name: "Luxe Diamond", icon: <Shield size={32} /> },
    { id: 5, name: "Diamond Prestige", icon: <Gem size={32} /> },
    // Duplicate for seamless loop if list is short
    { id: 6, name: "Tech Ventures", icon: <Cpu size={32} /> },
];

const Sponsors = () => {
    return (
        <section className="w-full py-10 overflow-hidden bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 border-y border-white/10">
            <div className="max-w-[1920px] mx-auto text-center mb-8">
                <h3 className="text-white font-bold tracking-[0.2em] text-lg uppercase drop-shadow-md">
                    Brands • Diamond Sponsor • Platinum Sponsor
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden group">

                {/* Gradient Overlays (Optional: fade effect on sides) */}
                <div className="absolute top-0 bottom-0 left-0 z-10 hidden w-20 bg-gradient-to-r from-blue-700/80 to-transparent md:block" />
                <div className="absolute top-0 bottom-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-pink-600/80 to-transparent md:block" />

                {/* Scrolling Content - We duplicate the list to ensure seamless looping */}
                <div className="flex items-center justify-around min-w-full px-4 space-x-16 animate-infinite-scroll md:space-x-24 shrink-0">
                    {/* Set 1 */}
                    {sponsors.map((sponsor) => (
                        <div key={`set1-${sponsor.id}`} className="flex items-center gap-4 text-white transition-opacity cursor-pointer opacity-80 hover:opacity-100">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                {sponsor.icon}
                            </div>
                            <span className="text-lg font-bold tracking-wider uppercase whitespace-nowrap">
                                {sponsor.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Set 2 (Immediate duplicate for the loop) */}
                <div className="flex items-center justify-around min-w-full px-4 space-x-16 animate-infinite-scroll md:space-x-24 shrink-0" aria-hidden="true">
                    {sponsors.map((sponsor) => (
                        <div key={`set2-${sponsor.id}`} className="flex items-center gap-4 text-white transition-opacity cursor-pointer opacity-80 hover:opacity-100">
                            <div className="p-2 rounded-lg bg-white/10 backdrop-blur-sm">
                                {sponsor.icon}
                            </div>
                            <span className="text-lg font-bold tracking-wider uppercase whitespace-nowrap">
                                {sponsor.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Inline styles for animation if not added to tailwind.config */}
            <style jsx>{`
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
        </section>
    );
};

export default Sponsors;