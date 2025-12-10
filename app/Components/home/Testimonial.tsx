"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

// Mock Data: Tailored for an Event/Exhibition Company
const testimonials = [
    {
        id: 1,
        name: "Jonathan Reeves",
        role: "Head of Marketing",
        company: "TechFlow Systems",
        avatar: "/Images/avatar.png",
        rating: 5,
        quote: "The organization of the Global Trade Expo was flawless. We generated over 400 qualified leads in just two days. The footfall management and booth support were world-class.",
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Best-Selling Author",
        company: "Independent",
        avatar: "/Images/avatar.png",
        rating: 5,
        quote: "As an author, the Frankfurt Book Fair setup was a dream. The signing zones were intimate yet accessible, and the crowd control allowed for meaningful interactions with every reader.",
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Director of Innovation",
        company: "AutoFuture Inc.",
        avatar: "/Images/avatar.png",
        rating: 4,
        quote: "An immersive experience like no other. The lighting, acoustics, and stage design for the keynote sessions really elevated our product launch. Highly recommended for premium events.",
    },
];

const brands = [
    "Google", "Microsoft", "Penguin Books", "Tesla", "Adobe", "Samsung", "Bloomberg"
];

const Testimonials = () => {
    return (
        <section className="relative py-24 overflow-hidden text-white bg-brand-dark sm:py-32">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="px-6 mx-auto max-w-7xl lg:px-8">

                {/* Header */}
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h2 className="text-base font-bold tracking-wide uppercase text-brand-pink">
                        Client Stories
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                        Trusted by Global <br />
                        <span className="text-transparent bg-clip-text bg-brand-gradient">
                            Industry Leaders
                        </span>
                    </p>
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 gap-8 mx-auto mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col justify-between p-8 transition-all duration-300 border rounded-2xl bg-brand-card border-white/5 hover:border-brand-purple/30 group hover:-translate-y-2"
                        >
                            {/* Giant Quote Icon Background */}
                            <Quote className="absolute w-16 h-16 transition-colors top-6 right-6 text-white/5 rotate-12 group-hover:text-brand-purple/10" />

                            <div>
                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={18}
                                            className={`${i < item.rating ? "text-brand-purple fill-brand-purple" : "text-gray-700"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <blockquote className="text-lg leading-relaxed text-gray-300">
                                    &ldquo;{item.quote}&rdquo;
                                </blockquote>
                            </div>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 pt-6 mt-8 border-t border-white/10">
                                <div className="relative w-12 h-12 overflow-hidden border-2 rounded-full border-brand-purple/20">
                                    {/* Fallback color if image is missing */}
                                    <div className="absolute inset-0 bg-gray-700"></div>
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.name}</div>
                                    <div className="text-sm text-gray-500">{item.role}, {item.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="pt-10 mt-24 border-t border-white/10">
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

            </div>
        </section>
    );
};

export default Testimonials;