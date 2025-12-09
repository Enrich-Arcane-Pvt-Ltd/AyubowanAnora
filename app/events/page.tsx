"use client";

import Image from "next/image";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "The Future of AI Trends & Innovations",
        location: "Main Auditorium, TechHub Conference Center",
        date: "MARCH 15, 2025",
        time: "10:00 AM – 12:00 PM",
        image: "/Images/img1.jpg",
    },
    {
        id: 2,
        title: "Cybersecurity Protecting Data & Privacy",
        location: "Room A2, TechHub Conference Center",
        date: "MARCH 17, 2025",
        time: "2:00 PM – 3:30 PM",
        image: "/Images/img2.jpg",
    },
    {
        id: 3,
        title: "Blockchain & Web3 Beyond Cryptocurrency",
        location: "Innovation Stage, TechHub Conference Center",
        date: "MARCH 03, 2025",
        time: "11:00 AM – 12:30 PM",
        image: "/Images/img3.jpg",
    },
    {
        id: 4,
        title: "Global Leadership Business Summit",
        location: "Auditorium, Tech Conference Center, New York, USA",
        date: "MARCH 18, 2025",
        time: "10:00 AM – 12:00 PM",
        image: "/Images/trade-expo.jpg",
    },
    {
        id: 5,
        title: "Marketing & Branding Expo",
        location: "TechHub Conference Center, London, UK",
        date: "MARCH 13, 2025",
        time: "2:00 PM – 3:30 PM",
        image: "/Images/trade.jpg",
    },
    {
        id: 6,
        title: "Startup & Investment Summit",
        location: "Innovation Stage, TechHub Center, Dubai, UAE",
        date: "MARCH 08, 2025",
        time: "11:00 AM – 12:30 PM",
        image: "/Images/avatar-ceo.jpg",
    },
];

const EventsPage = () => {
    return (
        <main className="w-full min-h-screen text-white bg-brand-dark">
            <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/Images/event.jpg"
                        alt="Events Hero"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">Events</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest text-gray-300 uppercase md:text-base">
                        <Link href="/" className="transition-colors hover:text-brand-purple">Home</Link>
                        <span className="text-brand-pink">•</span>
                        <span>Events</span>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-24 mx-auto max-w-7xl">
                <div className="flex flex-col">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="grid items-center grid-cols-1 gap-8 py-12 border-b group border-white/10 last:border-0 lg:grid-cols-12"
                        >
                            <div className="lg:col-span-3 w-full h-[220px] relative rounded-xl overflow-hidden">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-col gap-3 lg:col-span-4">
                                <h3 className="mb-3 text-2xl font-bold leading-tight transition-all duration-300 md:text-3xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient">
                                    {event.title}
                                </h3>
                                <div className="flex items-start gap-2 text-sm text-gray-400">
                                    <span className="font-semibold text-gray-500">Location:</span>
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <div className="grid items-center grid-cols-1 gap-6 lg:col-span-5 md:grid-cols-3">

                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Date</p>
                                    <p className="text-sm font-bold text-white uppercase">{event.date}</p>
                                </div>

                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Date</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
                                        <p className="text-sm font-bold text-white uppercase">{event.time}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default EventsPage;