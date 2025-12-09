"use client";

import { ArrowRight, Clock, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ContactPage = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <main className="w-full pt-32 pb-20 text-white bg-brand-dark">
            <section className="px-6 mx-auto mb-20 text-center md:px-12 lg:px-20 max-w-7xl">
                <span className="text-sm font-bold tracking-widest uppercase text-brand-purple">
                    24/7 Support
                </span>
                <h1 className="mt-4 mb-6 text-5xl font-bold md:text-7xl">
                    Get in <span className="text-transparent bg-clip-text bg-brand-gradient">Touch</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-gray-400">
                    Ready to organize a world-class exhibition? Or have questions about our upcoming trade fairs? We are here to help you every step of the way.
                </p>
            </section>

            <section className="px-6 mx-auto mb-24 md:px-12 lg:px-20 max-w-7xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
                    <div className="space-y-12">
                        <div className="grid gap-8">
                            <div className="flex items-start gap-4 p-6 transition-colors border rounded-2xl bg-brand-card border-white/5 hover:border-brand-purple/50 group">
                                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple group-hover:text-white shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Headquarters</h3>
                                    <p className="leading-relaxed text-gray-400">
                                        612-7 Roanoke Rd, Toronto,<br />
                                        ON M3A 1E3, Canada
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 transition-colors border rounded-2xl bg-brand-card border-white/5 hover:border-brand-pink/50 group">
                                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-brand-pink/10 text-brand-pink group-hover:bg-brand-pink group-hover:text-white shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Contact Info</h3>
                                    <p className="mb-1 text-gray-400">Phone: +1-416-824-1228</p>
                                    <p className="text-gray-400">Email: info@daevnt.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 transition-colors border rounded-2xl bg-brand-card border-white/5 hover:border-brand-blue/50 group">
                                <div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold">Office Hours</h3>
                                    <p className="mb-1 text-gray-400">Mon - Fri: 09:00 AM - 06:00 PM</p>
                                    <p className="text-gray-400">Sat - Sun: Closed</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative hidden w-full h-64 overflow-hidden rounded-2xl lg:block">
                            <Image
                                src="/Images/img1.jpg"
                                alt="Support Team"
                                fill
                                className="object-cover transition-all duration-500 opacity-60 grayscale hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay"></div>
                        </div>
                    </div>


                    {/* RIGHT COLUMN: Form */}
                    <div className="relative">
                        {/* Background Glow */}
                        <div className="absolute top-10 right-10 w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative p-8 border shadow-2xl bg-brand-card border-white/10 md:p-10 rounded-3xl">
                            <h3 className="mb-6 text-2xl font-bold">Send us a Message</h3>

                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center text-center h-96 animate-in fade-in">
                                    <div className="flex items-center justify-center w-20 h-20 mb-6 text-green-500 rounded-full bg-green-500/20">
                                        <Send size={32} />
                                    </div>
                                    <h4 className="mb-2 text-2xl font-bold text-white">Message Sent!</h4>
                                    <p className="text-gray-400">Thank you for contacting us. We will get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-8 text-sm font-bold tracking-widest uppercase transition-colors text-brand-purple hover:text-white"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">First Name</label>
                                            <input required type="text" placeholder="John" className="w-full px-4 py-3 transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Last Name</label>
                                            <input required type="text" placeholder="Doe" className="w-full px-4 py-3 transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                                        <input required type="email" placeholder="john@company.com" className="w-full px-4 py-3 transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Subject</label>
                                        <select className="w-full px-4 py-3 text-gray-400 transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none">
                                            <option>General Inquiry</option>
                                            <option>Sponsorship Opportunities</option>
                                            <option>Book an Exhibition Booth</option>
                                            <option>Media & Press</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                                        <textarea required rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 transition-colors border rounded-lg resize-none bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="flex items-center justify-center w-full gap-2 py-4 font-bold tracking-widest text-white uppercase transition-all rounded-lg bg-brand-purple hover:bg-brand-pink hover:-translate-y-1"
                                    >
                                        {status === "submitting" ? (
                                            <span className="animate-pulse">Sending...</span>
                                        ) : (
                                            <>Send Message <ArrowRight size={18} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. MAP SECTION (Grayscale for style) */}
            <section className="w-full h-[400px] bg-gray-900 relative">
                {/* Placeholder for Map - In production use Google Maps Embed API */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.3856543204786!2d-79.33396602353386!3d43.74412097109794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d2e1b1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2s612-7%20Roanoke%20Rd%2C%20North%20York%2C%20ON%20M3A%201E3%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(85%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-opacity opacity-80 hover:opacity-100"
                ></iframe>

                {/* Map Overlay Card */}
                <div className="absolute hidden max-w-xs p-6 text-black bg-white shadow-xl bottom-8 left-8 rounded-xl md:block">
                    <h4 className="mb-1 text-lg font-bold">Visit our HQ</h4>
                    <p className="text-sm text-gray-600">Come say hello! We are located in the heart of the business district.</p>
                </div>
            </section>

        </main>
    );
};

export default ContactPage;