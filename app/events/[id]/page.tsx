"use client";

import InquiryForm from "@/app/Components/InquiryForm";
import { eventsDatabase } from "@/lib/eventsData";
import {
    Briefcase,
    Calendar,
    CheckCircle2,
    Clock,
    Globe,
    MapPin,
    Megaphone,
    Plane
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// Data structure specifically for the Table View (Event ID 2)
const seminarSchedule = [
    { no: "01", date: "Saturday, January 3, 2026", location: "COLOMBO" },
    { no: "02", date: "Sunday, January 4, 2026", location: "GAMPAHA" },
    { no: "03", date: "Saturday, January 10, 2026", location: "VEYANGODA" },
    { no: "04", date: "Sunday, January 11, 2026", location: "KALUTHARA" },
    { no: "05", date: "Saturday, January 17, 2026", location: "GALLE" },
    { no: "06", date: "Sunday, January 18, 2026", location: "MATARA" },
    { no: "07", date: "Saturday, January 24, 2026", location: "KURUNEGALA" },
    { no: "08", date: "Sunday, January 25, 2026", location: "KANDY" },
    { no: "09", date: "Saturday, January 31, 2026", location: "COLOMBO" },
    { no: "10", date: "Sunday, February 1, 2026", location: "ANURADAPURA" },
    { no: "11", date: "Saturday, February 7, 2026", location: "VAVUNIYA" },
    { no: "12", date: "Sunday, February 8, 2026", location: "JAFFNA" },
];

const timeSlots = [
    "10.00 AM - 11.00 AM",
    "12.00 PM - 1.00 PM",
    "3.00 PM - 4.00 PM"
];

const EventDetailsPage = () => {
    const params = useParams();

    const eventId = Number(params.id);
    const event = eventsDatabase.find((e) => e.id === eventId);

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-brand-dark">
                <h1 className="text-4xl font-bold">Event Not Found</h1>
                <Link href="/events" className="mt-4 text-brand-purple hover:underline">Return to Events List</Link>
            </div>
        );
    }

    return (
        <main className="w-full min-h-screen text-white bg-brand-dark">
            <section className="relative px-6 pt-40 pb-20 text-center">
                <span className="block mb-2 text-sm font-bold tracking-[0.2em] text-brand-pink uppercase">
                    {event.subtitle}
                </span>
                <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white uppercase md:text-6xl">
                    {event.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-300 md:text-base">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-brand-purple" size={18} />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-brand-purple" size={18} />
                        <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-brand-purple" size={18} />
                        <span>{event.time}</span>
                    </div>
                </div>

                <p className="mt-6 text-sm tracking-widest text-gray-500 uppercase">
                    Organized by <span className="font-bold text-white">{event.organizer}</span> <br />
                    <span className="text-xs font-bold text-white">{event.collaboration}</span>
                </p>
            </section>

            <section className="max-w-6xl px-4 mx-auto mb-24 space-y-20 md:px-6">

                {/* Event Image */}
                <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                </div>

                {/* About Section */}
                <div className="pl-6 text-lg leading-relaxed text-gray-300 border-l-4 border-brand-purple">
                    <h3 className="mb-4 text-2xl font-bold text-white">About the Event</h3>
                    <p className="text-justify">{event.about}</p>
                </div>

                {/* Objectives & Highlights Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="p-8 border bg-brand-card rounded-2xl border-white/5">
                        <h3 className="flex items-center gap-3 mb-6 text-xl font-bold text-white">
                            <Globe className="text-brand-pink" /> Event Objectives
                        </h3>
                        <ul className="space-y-4">
                            {event.objectives?.map((obj, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-brand-pink" />
                                    {obj}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 border bg-brand-card rounded-2xl border-white/5">
                        <h3 className="flex items-center gap-3 mb-6 text-xl font-bold text-white">
                            <Megaphone className="text-brand-blue" /> Key Highlights
                        </h3>
                        <ul className="space-y-4">
                            {event.highlights?.map((high, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-brand-blue" />
                                    {high}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- CONDITIONAL SECTION START --- */}
                {event.id === 2 ? (
                    // ------------------ TABLE VIEW (MATCHING THE IMAGE) ------------------
                    <div className="relative overflow-hidden border bg-brand-card border-brand-purple/30 rounded-3xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="p-8 md:p-12">
                            <h2 className="mb-2 text-3xl font-bold text-white">Full Seminar Schedule</h2>
                            <p className="mb-8 text-gray-400">Island-wide itinerary for January & February 2026</p>

                            {/* Responsive Table Wrapper */}
                            <div className="overflow-x-auto border border-white/10 rounded-xl">
                                <table className="w-full text-sm text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="text-xs tracking-wider text-white uppercase bg-brand-purple">
                                            <th className="p-4 border-r border-white/10 text-center w-[60px]">No</th>
                                            <th className="p-4 border-r border-white/10">Date</th>
                                            <th className="p-4 border-r border-white/10">Location</th>
                                            <th className="p-4 text-center">Schedule</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        {seminarSchedule.map((row, index) => (
                                            <tr key={index} className="transition-colors bg-brand-card hover:bg-white/5">
                                                {/* No */}
                                                <td className="p-4 font-bold text-center border-r text-brand-pink border-white/10">
                                                    {row.no}
                                                </td>
                                                {/* Date */}
                                                <td className="p-4 font-medium text-white border-r border-white/10">
                                                    {row.date}
                                                </td>
                                                {/* Location */}
                                                <td className="p-4 font-bold border-r text-brand-blue border-white/10">
                                                    {row.location}
                                                </td>
                                                {/* Schedule (Stacked Times) */}
                                                <td className="p-2 text-center">
                                                    <div className="flex flex-col gap-1">
                                                        {timeSlots.map((time, tIndex) => (
                                                            <div key={tIndex} className="px-3 py-1 text-xs text-gray-300 border rounded bg-white/5 border-white/5">
                                                                {time}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : (
                    // ------------------ STANDARD PARTICIPATION PACKAGE VIEW ------------------
                    <div className="relative p-8 overflow-hidden border bg-brand-card border-brand-purple/30 rounded-3xl md:p-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <h2 className="mb-2 text-3xl font-bold text-white">Entrepreneur Participation Package</h2>
                        <p className="mb-10 text-gray-400">{event.packageDetails?.intro}</p>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div>
                                <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-brand-purple">
                                    <Plane size={20} /> Travel & Stay
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {event.packageDetails?.travel.map((item, i) => (
                                        <li key={i} className="flex gap-2"><span className="text-brand-purple">•</span> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-brand-purple">
                                    <Briefcase size={20} /> Exhibition Facilities
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {event.packageDetails?.facilities.map((item, i) => (
                                        <li key={i} className="flex gap-2"><span className="text-brand-purple">•</span> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 mb-4 text-lg font-bold text-brand-purple">
                                    <Megaphone size={20} /> Marketing
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    {event.packageDetails?.marketing.map((item, i) => (
                                        <li key={i} className="flex gap-2"><span className="text-brand-purple">•</span> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                {/* --- CONDITIONAL SECTION END --- */}

                {/* Benefits & Eligibility */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-white">Benefits to Participants</h3>
                        <ul className="space-y-4">
                            {event.benefits?.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-400">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-white">Participation Eligibility</h3>
                        <div className="p-6 border-l-4 bg-brand-card rounded-xl border-brand-pink">
                            <ul className="space-y-4">
                                {event.eligibility?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-brand-pink shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Event Summary Table */}
                <div>
                    <h3 className="mb-6 text-2xl font-bold text-white">Event Summary</h3>
                    <div className="overflow-hidden border border-white/10 rounded-xl">
                        <table className="min-w-full text-sm text-left">
                            <tbody className="divide-y divide-white/10">
                                <tr className="bg-brand-card/50">
                                    <td className="w-1/3 p-4 font-bold text-gray-400">Event Name</td>
                                    <td className="p-4 font-bold text-white">{event.title}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-400">Category</td>
                                    <td className="p-4 text-white">{event.subtitle}</td>
                                </tr>
                                <tr className="bg-brand-card/50">
                                    <td className="p-4 font-bold text-gray-400">Date</td>
                                    <td className="p-4 text-white">{event.date} ({event.days})</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-400">Venue</td>
                                    <td className="p-4 text-white">{event.venue}</td>
                                </tr>
                                <tr className="bg-brand-card/50">
                                    <td className="p-4 font-bold text-gray-400">Time</td>
                                    <td className="p-4 text-white">{event.time}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-400">Visitors</td>
                                    <td className="p-4 text-white">Open to Public – Free Entry</td>
                                </tr>
                                <tr className="bg-brand-card/50">
                                    <td className="p-4 font-bold text-gray-400">Organized by</td>
                                    <td className="p-4 text-white">{event.organizer}</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold text-gray-400">Purpose</td>
                                    <td className="p-4 text-white">To connect Sri Lankan SMEs directly with global buyers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <section className="relative w-full py-24 bg-gray-900 border-t border-white/10">
                <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
                    <span className="block mb-4 text-sm font-bold tracking-widest uppercase text-brand-purple">How to Participate</span>
                    <h2 className="mb-8 text-3xl font-bold text-white md:text-5xl">
                        {event.id === 2 ? "Reserve Your Seat" : "Reserve Your Stall Today"}

                    </h2>

                    <div className="flex flex-col justify-center gap-8 mb-12 text-left md:flex-row md:text-center">
                        <div className="w-full p-6 border bg-brand-card rounded-xl border-white/5 md:w-auto">
                            <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase">Email</p>
                            <p className="text-lg font-bold text-white">{event.contact?.email}</p>
                        </div>
                        <div className="w-full p-6 border bg-brand-card rounded-xl border-white/5 md:w-auto">
                            <p className="mb-1 text-xs tracking-widest text-gray-500 uppercase">Hotline / WhatsApp</p>
                            <p className="text-lg font-bold text-white">{event.contact?.phones}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-400">Presented by</p>
                        <p className="text-xl font-bold text-white">{event.contact?.presentedBy}</p>
                        <p className="italic font-medium text-brand-pink">{event.contact?.tagline}</p>
                    </div>
                </div>
            </section>
            <InquiryForm
                contactEmail={event.contact?.email || "megana.enrich@gmail.com"}
                contactPhone={event.contact?.phones || "+1-416-824-1228"}
            />
        </main>
    );
};

export default EventDetailsPage;