"use client";

import React from "react";

const keywords = [
    "INNOVATION",
    "CREATIVITY",
    "NETWORKING",
    "WEB3",
];

const TextTicker = () => {
    return (
        // Darker background (Deep Purple) to match the dark theme better
        <section className="w-full py-10 overflow-hidden bg-[#05050a] border-y border-white/10">

            {/* Marquee Container */}
            <div className="relative flex overflow-hidden whitespace-nowrap">

                {/* Scrolling Content - Set 1 */}
                <div className="flex items-center min-w-full animate-infinite-scroll">
                    {keywords.map((word, index) => (
                        <React.Fragment key={`set1-${index}`}>
                            <span
                                className={`
                  mx-12 text-4xl md:text-6xl font-black uppercase italic tracking-wide
                  ${index % 2 === 0 ? 'text-white' : 'text-transparent stroke-text'}
                `}
                                // Stroke effect for alternate words
                                style={index % 2 !== 0 ? { WebkitTextStroke: "1px rgba(255,255,255,0.5)" } : {}}
                            >
                                {word}
                            </span>
                            {/* Separator Dot */}
                            <span className="text-[#8b5cf6] text-2xl md:text-3xl">•</span>
                        </React.Fragment>
                    ))}
                </div>

                {/* Scrolling Content - Set 2 (Duplicate for smooth loop) */}
                <div className="flex items-center min-w-full animate-infinite-scroll" aria-hidden="true">
                    {keywords.map((word, index) => (
                        <React.Fragment key={`set2-${index}`}>
                            <span
                                className={`
                  mx-12 text-4xl md:text-6xl font-black uppercase italic tracking-wide
                  ${index % 2 === 0 ? 'text-white' : 'text-transparent stroke-text'}
                `}
                                style={index % 2 !== 0 ? { WebkitTextStroke: "1px rgba(255,255,255,0.5)" } : {}}
                            >
                                {word}
                            </span>
                            {/* Separator Dot */}
                            <span className="text-[#8b5cf6] text-2xl md:text-3xl">•</span>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TextTicker;