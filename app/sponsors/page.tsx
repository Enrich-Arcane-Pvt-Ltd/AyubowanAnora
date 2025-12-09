"use client";

import { ArrowRight, CheckCircle2, Globe, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SponsorsPage = () => {
    const platinumSponsors = [
        { name: "Google", logo: "/Images/img1.jpg" },
        { name: "Microsoft", logo: "/Images/img2.jpg" },
    ];

    const goldSponsors = [
        { name: "Adobe", logo: "/Images/img3.jpg" },
        { name: "Tesla", logo: "/Images/trade.jpg" },
        { name: "Samsung", logo: "/Images/avatar-ceo.jpg" },
        { name: "Bloomberg", logo: "/Images/avatar-2.jpg" },
    ];

    const silverSponsors = [
        "Slack", "Spotify", "Uber", "Airbnb", "Dropbox", "Shopify", "Intel", "IBM"
    ];

    return (
        <main className="w-full min-h-screen text-white bg-brand-dark">

            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/sponsors.jpg"
                        alt="Sponsors Hero"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">Sponsors</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest text-gray-300 uppercase md:text-base">
                        <Link href="/" className="transition-colors hover:text-brand-purple">Home</Link>
                        <span className="text-brand-pink">•</span>
                        <span>Sponsors</span>
                    </div>
                </div>
            </section>

            <section className="px-6 py-20 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-2xl font-bold tracking-widest text-white uppercase">Platinum Partners</h2>
                    <div className="w-20 h-1 mx-auto rounded-full bg-brand-purple"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {platinumSponsors.map((sponsor, idx) => (
                        <div key={idx} className="relative flex items-center justify-center h-64 overflow-hidden transition-all duration-300 border group bg-brand-card border-brand-purple/30 rounded-2xl hover:border-brand-purple">
                            <div className="absolute inset-0 transition-colors bg-brand-purple/5 group-hover:bg-brand-purple/10"></div>
                            <div className="absolute transition-opacity duration-500 opacity-0 -inset-1 bg-gradient-to-r from-brand-purple to-brand-pink group-hover:opacity-20 blur-xl"></div>

                            <div className="relative z-10 w-full h-full p-12">
                                <div className="relative w-full h-full transition-all duration-500 grayscale group-hover:grayscale-0">
                                    <Image src={sponsor.logo} alt={sponsor.name} fill className="object-cover rounded-lg md:object-contain" />
                                </div>
                                <span className="absolute text-sm font-bold tracking-widest uppercase transition-opacity -translate-x-1/2 opacity-0 bottom-4 left-1/2 group-hover:opacity-100">
                                    {sponsor.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 py-10 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-xl font-bold tracking-widest text-white uppercase">Gold Partners</h2>
                    <div className="w-16 h-1 mx-auto rounded-full bg-brand-pink"></div>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {goldSponsors.map((sponsor, idx) => (
                        <div key={idx} className="flex items-center justify-center h-48 overflow-hidden transition-all border group bg-brand-card border-white/10 rounded-xl hover:border-brand-pink/50">
                            <div className="relative w-full h-full p-8 transition-all duration-500 grayscale group-hover:grayscale-0">
                                <Image src={sponsor.logo} alt={sponsor.name} fill className="object-cover rounded-lg md:object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 py-16 mx-auto border-b max-w-7xl border-white/10">
                <div className="mb-12 text-center">
                    <h2 className="mb-2 text-lg font-bold tracking-widest text-gray-400 uppercase">Silver Partners</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
                    {silverSponsors.map((name, idx) => (
                        <span key={idx} className="text-xl font-black text-white uppercase transition-all cursor-default md:text-2xl hover:text-brand-purple hover:scale-110">
                            {name}
                        </span>
                    ))}
                </div>
            </section>

            <section className="px-6 py-24 mx-auto max-w-7xl">
                <div className="relative p-8 overflow-hidden border bg-brand-card border-white/10 rounded-3xl md:p-16">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                    <div className="relative z-10 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-brand-pink">Join the Network</span>
                            <h2 className="mb-6 text-3xl font-bold md:text-5xl">Become a Sponsor</h2>
                            <p className="mb-8 text-lg leading-relaxed text-gray-400">
                                Elevate your brand by partnering with the world&apos;s leading event organization. Gain access to thousands of industry professionals, potential clients, and global media coverage.
                            </p>

                            <div className="mb-10 space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark text-brand-purple">
                                        <Users size={20} />
                                    </div>
                                    <span className="font-medium text-gray-200">Access to 50k+ Attendees</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark text-brand-pink">
                                        <TrendingUp size={20} />
                                    </div>
                                    <span className="font-medium text-gray-200">Boost Brand Visibility</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-dark text-brand-blue">
                                        <Globe size={20} />
                                    </div>
                                    <span className="font-medium text-gray-200">Global Media Coverage</span>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 font-bold tracking-widest text-white uppercase transition-colors rounded-lg bg-brand-purple hover:bg-brand-pink"
                            >
                                Contact Us <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="p-8 border bg-brand-dark/50 rounded-2xl border-white/5">
                            <h3 className="mb-6 text-xl font-bold">Sponsorship Benefits</h3>
                            <ul className="space-y-4">
                                {[
                                    "Logo placement on all marketing materials",
                                    "VIP Access to exclusive networking dinners",
                                    "Dedicated booth space in prime locations",
                                    "Speaking opportunity in keynote sessions",
                                    "Social media shoutouts to 1M+ followers",
                                    "Access to attendee email list (Opt-in)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300 md:text-base">
                                        <CheckCircle2 size={18} className="mt-1 text-brand-purple shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
};

export default SponsorsPage;