"use client";

import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const AboutSection = () => {
    return (
        <section className="relative px-4 py-24 overflow-hidden text-white bg-brand-dark sm:px-6 lg:px-8">
            <div className="absolute top-0 w-full h-full max-w-4xl -translate-x-1/2 pointer-events-none left-1/2 opacity-10">
                <div className="absolute top-20 left-0 w-72 h-72 bg-brand-purple rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-0 w-72 h-72 bg-brand-pink rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center mx-auto text-center max-w-7xl">

                <h3 className="mb-6 text-lg font-medium tracking-widest uppercase text-brand-blue">
                    Connecting Industries Globally
                </h3>
                <h2 className="max-w-5xl mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    We curate world-class <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-brand-gradient">
                        Exhibitions & Trade Fairs
                    </span>
                    <br /> that drive business growth.
                </h2>

                <p className="max-w-3xl mb-10 text-xl text-gray-400">
                    From international book fairs to large-scale industrial expos, we create
                    immersive environments where brands showcase innovation and professionals
                    forge lasting partnerships.
                </p>

                <div className="flex flex-col items-center gap-8 mb-24 sm:flex-row">

                    <Link href="/about" className="relative flex items-center gap-2 px-8 py-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 ease-in-out rounded-full group bg-brand-purple hover:bg-brand-pink">
                        Read More
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="flex items-center justify-center w-12 h-12 transition-colors border rounded-full bg-brand-card text-brand-pink border-white/10 group-hover:border-brand-pink/50">
                            <Phone size={20} fill="currentColor" className="rotate-12" />
                        </div>
                        <div className="text-left">
                            <span className="block text-xs tracking-wider text-gray-400 uppercase">Event Inquiries</span>
                            <span className="text-lg font-medium text-white transition-colors group-hover:text-brand-blue">
                                +1-416-824-1228
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-12 pt-16 border-t md:grid-cols-3 border-white/10">

                    <div className="flex flex-col items-center">
                        <span className="mb-2 text-5xl font-bold text-white md:text-6xl">
                            150<span className="text-brand-purple">+</span>
                        </span>
                        <span className="mb-2 text-xl font-bold text-gray-200">Global Exhibitions</span>
                        <span className="text-sm text-gray-500">Successfully Managed Worldwide</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="mb-2 text-5xl font-bold text-white md:text-6xl">
                            2M<span className="text-brand-pink">+</span>
                        </span>
                        <span className="mb-2 text-xl font-bold text-gray-200">Annual Footfall</span>
                        <span className="text-sm text-gray-500">Visitors Across All Venues</span>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="mb-2 text-5xl font-bold text-white md:text-6xl">
                            5k<span className="text-brand-blue">+</span>
                        </span>
                        <span className="mb-2 text-xl font-bold text-gray-200">Exhibitors</span>
                        <span className="text-sm text-gray-500">Brands Trusting Our Platform</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;