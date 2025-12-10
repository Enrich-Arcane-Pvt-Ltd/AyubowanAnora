"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const events = [
    {
        id: 1,
        title: "Exhibition | Trade Fair | Book Fair",
        location: "Etisalat Academy, Dubai, United Arab Emirates",
        category: "Exhibition | Trade Fair | Book Fair",
        date: "March 28th & 29th, 2026 (Saturday & Sunday)",
        time: "10:00 AM – 10:00 PM",
        image: "/Images/trade-expo.jpg",
    },
    {
        id: 2,
        title: "Sri Lanka Seminars",
        location: "Sri Lanka",
        category: "Literature & Education",
        date: "JAN 03rd - FEB 08th",
        time: "10:00 AM – 04:00 PM",
        image: "/Images/book.jpg",
    },
];

const FutureEvents = () => {
    const displayEvents = events.slice(0, 3);

    return (
        <section className="relative px-4 py-24 text-white bg-brand-dark sm:px-6 lg:px-8">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <div className="flex items-end justify-between pb-4 mb-12 border-b border-white/10">
                    <div>
                        <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-brand-purple">
                            Calendar
                        </span>
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                            Upcoming <span className="text-transparent bg-clip-text bg-brand-gradient">Events</span>
                        </h2>
                    </div>

                    <Link
                        href="/events"
                        className="items-center hidden gap-2 text-sm font-semibold tracking-widest text-gray-400 uppercase transition-colors md:flex hover:text-brand-pink"
                    >
                        View Full Calendar
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="flex flex-col">
                    {displayEvents.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col gap-6 px-4 py-10 transition-colors border-b group border-white/5 last:border-0 md:flex-row md:items-center hover:bg-white/5 md:hover:bg-transparent rounded-xl md:rounded-none md:px-0"
                        >

                            <div className="w-full md:w-[280px] h-[200px] flex-shrink-0 relative rounded-lg overflow-hidden bg-brand-card border border-white/10">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-sm border border-white/20">
                                    {event.category}
                                </div>
                            </div>

                            <div className="flex flex-col justify-center flex-1 md:px-8">
                                <h3 className="mb-3 text-2xl font-bold leading-tight transition-all duration-300 md:text-3xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient">
                                    {event.title}
                                </h3>
                                <div className="flex items-start gap-2 text-sm text-gray-400">
                                    <MapPin size={18} className="text-brand-pink mt-0.5 flex-shrink-0" />
                                    <span>{event.location}</span>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center w-full space-y-5 md:w-56 md:border-l border-white/10 md:pl-8">
                                <div>
                                    <p className="flex items-center gap-2 mb-1 text-xs tracking-wider text-gray-500 uppercase">
                                        <Calendar size={14} /> Date
                                    </p>
                                    <p className="font-mono text-xl font-bold tracking-tight text-white uppercase">
                                        {event.date}
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">Time</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
                                        <p className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                                            {event.time}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/events"
                        className="px-10 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 border rounded-full border-brand-purple hover:bg-brand-gradient hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    >
                        Load More Events
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FutureEvents;