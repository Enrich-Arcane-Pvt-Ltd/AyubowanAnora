"use client";

import React from "react";

const keywords = ["INNOVATION", "CREATIVITY", "NETWORKING", "WEB"];

const TextTicker = () => {
    return (
        <section className="w-full py-6 sm:py-10 overflow-hidden bg-[#05050a] border-y border-white/10">
            <div className="relative flex overflow-hidden">

                {/* SCROLLING TRACK */}
                <div className="flex animate-scroll whitespace-nowrap">
                    {keywords.map((word, index) => (
                        <React.Fragment key={`set1-${index}`}>
                            <span
                                className={`
                                    mx-6 sm:mx-12 
                                    text-2xl sm:text-4xl md:text-6xl 
                                    font-black uppercase italic tracking-wide
                                    ${index % 2 === 0 ? "text-white" : "text-transparent stroke-text"}
                                `}
                                style={index % 2 !== 0 ? { WebkitTextStroke: "1px rgba(255,255,255,0.5)" } : {}}
                            >
                                {word}
                            </span>
                            <span className="text-[#8b5cf6] text-xl sm:text-2xl md:text-3xl">•</span>
                        </React.Fragment>
                    ))}

                    {/* Duplicate for smooth loop */}
                    {keywords.map((word, index) => (
                        <React.Fragment key={`set2-${index}`}>
                            <span
                                className={`
                                    mx-6 sm:mx-12 
                                    text-2xl sm:text-4xl md:text-6xl 
                                    font-black uppercase italic tracking-wide
                                    ${index % 2 === 0 ? "text-white" : "text-transparent stroke-text"}
                                `}
                                style={index % 2 !== 0 ? { WebkitTextStroke: "1px rgba(255,255,255,0.5)" } : {}}
                            >
                                {word}
                            </span>
                            <span className="text-[#8b5cf6] text-xl sm:text-2xl md:text-3xl">•</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    display: flex;
                    animation: scroll 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default TextTicker;