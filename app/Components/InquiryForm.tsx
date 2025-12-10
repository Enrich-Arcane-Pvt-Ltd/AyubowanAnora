"use client";

import { AlertCircle, ArrowRight, Briefcase, CheckCircle, Loader2, Users } from "lucide-react";
import { useState } from "react";

interface InquiryFormProps {
    contactEmail: string;
    contactPhone: string;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ contactEmail, contactPhone }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        eventName: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const payload = {
                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                eventTitle: formData.eventName,
                subject: formData.subject,
                message: formData.message,
                company: "N/A"
            };

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ firstName: "", lastName: "", email: "", eventName: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="inquiry" className="px-6 py-24 mx-auto max-w-7xl">
            <div className="grid items-start grid-cols-1 gap-16 lg:grid-cols-2">
                <div className="sticky top-24">
                    <span className="block mb-2 text-sm font-bold tracking-widest uppercase text-brand-purple">
                        Information Desk
                    </span>
                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Need more details <span className="text-transparent bg-clip-text bg-brand-gradient">?</span>
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-gray-400">
                        Have specific questions before you decide? Fill out this form to request the <strong>official event brochure</strong>, <strong>floor plans</strong>, or to speak with an event specialist.
                    </p>

                    <div className="pt-8 space-y-6 border-t border-white/10">
                        <h4 className="text-sm font-bold tracking-widest text-white uppercase">You can also reach us at:</h4>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-10 h-10 text-gray-400 border rounded-lg bg-brand-dark border-white/10">
                                <Users size={18} />
                            </div>
                            <div>
                                <p className="text-xs tracking-wider text-gray-500 uppercase">General Inquiries</p>
                                <p className="font-medium text-white">{contactEmail}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-10 h-10 text-gray-400 border rounded-lg bg-brand-dark border-white/10">
                                <Briefcase size={18} />
                            </div>
                            <div>
                                <p className="text-xs tracking-wider text-gray-500 uppercase">Partnerships</p>
                                <p className="font-medium text-white">{contactPhone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative p-8 overflow-hidden border shadow-2xl bg-brand-card border-white/10 md:p-10 rounded-3xl">
                    <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                        <h3 className="mb-4 text-xl font-bold text-white">Submit an Inquiry</h3>

                        {status === "success" && (
                            <div className="flex items-center gap-2 p-4 mb-4 text-green-400 border rounded-lg border-green-500/50 bg-green-500/10">
                                <CheckCircle size={20} />
                                <span className="text-sm font-bold">Request sent successfully! check your email.</span>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="flex items-center gap-2 p-4 mb-4 text-red-400 border rounded-lg border-red-500/50 bg-red-500/10">
                                <AlertCircle size={20} />
                                <span className="text-sm font-bold">Something went wrong. Please try again.</span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">First Name</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Your First Name"
                                    className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Last Name</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    placeholder="Your Last Name"
                                    className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                placeholder="email@example.com"
                                className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Event Name</label>
                            <input
                                name="eventName"
                                value={formData.eventName}
                                onChange={handleChange}
                                type="text"
                                placeholder="Event Name you need details"
                                className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Subject of Inquiry</label>
                            <input
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                type="text"
                                placeholder="Subject of your inquiry"
                                className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Your Question</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                placeholder="Please provide more details..."
                                className="w-full px-4 py-3 text-white transition-colors border rounded-lg resize-none bg-brand-dark border-white/10 focus:border-brand-purple focus:outline-none"
                            ></textarea>
                        </div>

                        <button
                            disabled={status === "loading"}
                            className="flex items-center justify-center w-full gap-2 py-4 mt-2 font-bold tracking-widest text-white uppercase transition-all rounded-lg shadow-lg bg-brand-purple hover:bg-brand-pink group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>Sending... <Loader2 className="animate-spin" size={16} /></>
                            ) : (
                                <>Request Details <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></>
                            )}
                        </button>

                        <p className="mt-4 text-xs text-center text-gray-600">
                            Our support team usually responds within 24 hours.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default InquiryForm;