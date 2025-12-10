"use client";

import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    const brands = [
        "Google", "Microsoft", "Penguin Books", "Tesla", "Adobe", "Samsung", "Bloomberg"
    ];
    return (
        <main className="w-full overflow-hidden text-white bg-brand-dark">
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/trade-expo.jpg"
                        alt="About Us Hero"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">About Us</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest text-gray-300 uppercase md:text-base">
                        <Link href="/" className="transition-colors hover:text-brand-purple">Home</Link>
                        <span className="text-brand-pink">•</span>
                        <span>About Us</span>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 mx-auto text-center md:px-12 lg:px-20 max-w-7xl">
                <h3 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                    Uniting Creative Minds
                </h3>
                <h2 className="max-w-5xl mx-auto mb-10 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Pioneering the future of <span className="text-brand-purple">innovation</span> and design. Where creativity meets collaboration at global forums.
                </h2>
                <p className="mb-12 text-lg text-gray-400">
                    Let us know if you&apos;d like any refinements!
                </p>
            </section>

            <section className="w-full py-16 bg-brand-gradient">
                <div className="grid grid-cols-1 gap-8 px-6 mx-auto text-center divide-y max-w-7xl md:grid-cols-3 md:text-left md:divide-y-0 md:divide-x divide-white/20">
                    <div className="px-4">
                        <h3 className="mb-2 text-5xl font-black md:text-6xl">9 K</h3>
                        <p className="text-sm font-medium tracking-wider uppercase opacity-80">Speakers & Experts</p>
                    </div>
                    <div className="px-4 pt-8 md:pt-0">
                        <h3 className="mb-2 text-5xl font-black md:text-6xl">22 K+</h3>
                        <p className="text-sm font-medium tracking-wider uppercase opacity-80">Total Attendees</p>
                    </div>
                    <div className="px-4 pt-8 md:pt-0">
                        <h3 className="mb-2 text-5xl font-black md:text-6xl">13 +</h3>
                        <p className="text-sm font-medium tracking-wider uppercase opacity-80">Workshops & Panels</p>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 mx-auto md:px-12 lg:px-20 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <span className="block mb-2 text-xs font-bold tracking-widest uppercase text-brand-pink">About The Conference</span>
                            <h2 className="text-4xl font-bold leading-tight md:text-5xl">Education for a <br /> Changing World</h2>
                        </div>

                        <ul className="space-y-4">
                            {['World-Class Speakers & Industry Leaders', 'Cutting-Edge Topics & Trends', 'Interactive Workshops & Hands-On', 'Networking'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 size={18} className="text-brand-purple" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="leading-relaxed text-gray-400">
                            Join us as we redefine education for the 21st century! Our events are designed to spark curiosity and foster global connections.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mt-8 space-y-4">
                            <div className="relative w-full h-64 overflow-hidden bg-gray-800 rounded-lg">
                                <Image src="/Images/img2.jpg" alt="Speaker" fill className="object-cover" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative w-full h-64 overflow-hidden bg-gray-800 rounded-lg">
                                <Image src="/Images/img1.jpg" alt="Audience" fill className="object-cover" />
                            </div>
                            <div className="relative w-full h-40 overflow-hidden bg-gray-800 rounded-lg">
                                <Image src="/Images/img3.jpg" alt="Workshop" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="py-20 border-t border-white/5">
                <div className="flex flex-col items-end justify-between gap-8 px-6 mx-auto max-w-7xl md:flex-row">
                    <div>
                        <h2 className="mb-4 text-4xl font-bold md:text-5xl">What the world <br /> has to say!</h2>
                        <p className="max-w-md text-gray-400">Hear from our attendees and partners about their experiences.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="flex items-center justify-center w-12 h-12 transition-all border rounded-full border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="flex items-center justify-center w-12 h-12 text-white transition-all rounded-full bg-brand-purple hover:bg-brand-pink">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </section>

            <section className="relative w-full h-[650px] bg-gray-900 overflow-hidden group">
                <Image
                    src="/Images/trade.jpg"
                    alt="Conference Experience"
                    fill
                    className="object-cover transition-transform duration-700 opacity-60 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full py-4 overflow-hidden whitespace-nowrap bg-brand-gradient opacity-90">
                    <div className="inline-block animate-infinite-scroll">
                        <span className="mx-4 text-2xl font-black tracking-wider text-white uppercase md:text-4xl">
                            Nextgen Conference Experience • Creative & Innovative •
                        </span>
                        <span className="mx-4 text-2xl font-black tracking-wider text-white uppercase md:text-4xl">
                            Nextgen Conference Experience • Creative & Innovative •
                        </span>
                        <span className="mx-4 text-2xl font-black tracking-wider text-white uppercase md:text-4xl">
                            Nextgen Conference Experience • Creative & Innovative •
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Experts</span>
                    <h2 className="mt-2 text-4xl font-bold uppercase md:text-5xl">Industry <br /> Lead Speaker</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="relative group">
                        <div className="relative h-[400px] w-full bg-gray-800 rounded-sm overflow-hidden">
                            <Image src="/Images/avatar-ceo.jpg" alt="Sophia Martinez" fill className="object-cover" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-brand-purple/80 group-hover:opacity-100">
                                <div className="p-6 text-center">
                                    <p className="mb-2 text-xl font-bold text-white">Sophia Martinez</p>
                                    <p className="mb-4 text-sm tracking-widest uppercase text-white/80">CEO, TechFlow</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h4 className="text-lg font-bold">Sophia Martinez</h4>
                            <p className="text-xs tracking-wider text-gray-500 uppercase">Lead CEO Community</p>
                        </div>
                    </div>

                </div>
            </section>

            <div className="pt-10 pb-10 mt-24 border-t border-white/10">
                <p className="mb-8 text-sm font-semibold tracking-widest text-center text-gray-500 uppercase">
                    Partners & Sponsors
                </p>

                {/* Scroll Container */}
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        {[...brands, ...brands].map((brand, index) => (
                            <li key={index} className="text-2xl font-black text-gray-700 uppercase transition-colors cursor-default whitespace-nowrap hover:text-brand-purple">
                                {brand}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default AboutPage;