"use client";

import { ArrowRight, Calendar, CheckCircle2, Clock, Mic2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PackagesPage = () => {

    // Mock Data: Pricing Packages
    const packages = [
        {
            name: "Standard Pass",
            price: "$199",
            description: "Perfect for individuals looking to explore the exhibition floor.",
            features: [
                "Access to Exhibition Hall",
                "Event Guidebook",
                "Standard Wi-Fi Access",
                "Certificate of Attendance"
            ],
            highlight: false,
        },
        {
            name: "Business Pro",
            price: "$499",
            description: "Designed for professionals seeking networking and workshops.",
            features: [
                "All Standard Benefits",
                "Access to Keynote Sessions",
                "Networking Lunch & Drinks",
                "Access to Business Lounge",
                "Priority Check-in"
            ],
            highlight: true, // This will make the card pop
        },
        {
            name: "VIP All Access",
            price: "$999",
            description: "The ultimate experience with exclusive backstage access.",
            features: [
                "All Business Benefits",
                "Backstage Meet & Greet",
                "Gala Dinner Invitation",
                "Private Chauffeur Service",
                "VIP Seating Front Row",
                "Lifetime Membership"
            ],
            highlight: false,
        },
    ];

    // Mock Data: Seminars
    const seminars = [
        {
            id: 1,
            title: "Mastering Digital Transformation",
            speaker: "Dr. Robert Fox",
            role: "CTO, FutureTech",
            date: "Oct 15, 2025",
            time: "10:00 AM - 01:00 PM",
            image: "/Images/img1.jpg", // Replace with seminar image
            tags: ["Tech", "Strategy"],
        },
        {
            id: 2,
            title: "Sustainable Event Management",
            speaker: "Jane Cooper",
            role: "Director, GreenEvents",
            date: "Oct 16, 2025",
            time: "02:00 PM - 05:00 PM",
            image: "/Images/img2.jpg",
            tags: ["Sustainability", "Management"],
        },
        {
            id: 3,
            title: "The Future of AI in Marketing",
            speaker: "Arlene McCoy",
            role: "CMO, Brandify",
            date: "Oct 17, 2025",
            time: "09:00 AM - 12:00 PM",
            image: "/Images/img3.jpg",
            tags: ["Marketing", "AI"],
        },
    ];

    return (
        <main className="w-full min-h-screen text-white bg-brand-dark">

            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/seminars-2.jpg"
                        alt="Packages Hero"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">Packages & Seminars</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest text-gray-300 uppercase md:text-base">
                        <Link href="/" className="transition-colors hover:text-brand-purple">Home</Link>
                        <span className="text-brand-pink">•</span>
                        <span>Packages & Seminars</span>
                    </div>
                </div>
            </section>

            {/* 2. PRICING PACKAGES */}
            <section className="px-6 py-24 mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Choose Your Pass</h2>
                    <p className="max-w-2xl mx-auto text-gray-400">Select the perfect package that suits your needs. Whether you are visiting or exhibiting, we have a plan for you.</p>
                </div>

                <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-3">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col ${pkg.highlight
                                ? "bg-brand-card border-brand-purple shadow-[0_0_30px_rgba(139,92,246,0.2)] scale-105 z-10"
                                : "bg-brand-dark border-white/10 hover:border-white/30"
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute top-0 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase -translate-x-1/2 -translate-y-1/2 rounded-full left-1/2 bg-brand-gradient">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="mb-2 text-xl font-bold text-white">{pkg.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-white">{pkg.price}</span>
                                <span className="text-gray-500">/event</span>
                            </div>
                            <p className="pb-8 mb-8 text-sm leading-relaxed text-gray-400 border-b border-white/10">
                                {pkg.description}
                            </p>

                            <ul className="flex-1 mb-8 space-y-4">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={18} className={`shrink-0 ${pkg.highlight ? "text-brand-purple" : "text-gray-500"}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all ${pkg.highlight
                                ? "bg-brand-purple hover:bg-brand-gradient text-white shadow-lg"
                                : "bg-white/5 hover:bg-brand-gradient text-white"
                                }`}>
                                Get Ticket
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 border-t bg-brand-card border-white/5">
                <div className="px-6 mx-auto max-w-7xl">
                    <div className="flex flex-col justify-between gap-6 mb-16 md:flex-row md:items-end">
                        <div>
                            <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-brand-pink">Learning Hub</span>
                            <h2 className="text-3xl font-bold md:text-5xl">Upcoming Seminars</h2>
                        </div>
                        <Link href="/events" className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase transition-colors text-brand-purple hover:text-white">
                            View Full Schedule <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6">
                        {seminars.map((seminar) => (
                            <div key={seminar.id} className="flex flex-col gap-6 p-4 transition-all duration-300 border group bg-brand-dark border-white/5 rounded-2xl md:flex-row md:items-center hover:border-brand-purple/50">
                                <div className="relative w-full h-48 overflow-hidden md:w-64 md:h-40 rounded-xl shrink-0">
                                    <Image
                                        src={seminar.image}
                                        alt={seminar.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute flex gap-2 top-3 left-3">
                                        {seminar.tags.map(tag => (
                                            <span key={tag} className="bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase text-white px-2 py-1 rounded-sm border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex-1 py-2">
                                    <h3 className="mb-2 text-2xl font-bold transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient">
                                        {seminar.title}
                                    </h3>

                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Mic2 size={16} className="text-brand-pink" />
                                            <span className="font-medium text-white">{seminar.speaker}</span>
                                            <span className="pl-2 ml-1 text-xs border-l border-white/20">{seminar.role}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={16} className="text-brand-blue" />
                                            {seminar.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={16} className="text-brand-blue" />
                                            {seminar.time}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end md:pr-6 md:block">
                                    <Link href="/events" className="flex items-center justify-center w-12 h-12 text-white transition-all border rounded-full border-white/20 group-hover:bg-brand-purple group-hover:border-brand-purple">
                                        <ArrowRight size={20} className="transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                                    </Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-4xl px-6 py-24 mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold">Have Questions?</h2>
                <p className="mb-8 text-gray-400">
                    Unsure which package is right for you? Our team is available 24/7 to assist with corporate bookings and seminar schedules.
                </p>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 font-bold tracking-widest text-white uppercase transition-all rounded-full bg-brand-gradient hover:opacity-90 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                >
                    Contact Support
                </Link>
            </section>

        </main>
    );
};

export default PackagesPage;