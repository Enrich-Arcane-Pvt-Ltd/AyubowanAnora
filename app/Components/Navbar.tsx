"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Sponsors (UAE & SL)", href: "/sponsors" },
        { name: "Packages & Seminars", href: "/packages" },
        { name: "Contact Us", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b bg-brand-dark/90 backdrop-blur-xl border-white/10">
            <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <Link href="/" className="relative w-32 h-10 sm:w-40">
                    <Image
                        src="/Images/img7.png"
                        alt="Ayubowan Logo"
                        fill
                        priority
                        className="object-contain"
                    />
                </Link>

                <div className="items-center hidden space-x-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium transition-all hover:text-transparent hover:bg-brand-gradient hover:bg-clip-text"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/events"
                        className="px-6 py-2 text-sm font-bold text-white rounded-full bg-brand-gradient hover:opacity-90"
                    >
                        Explore Events
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex p-2 text-gray-200 rounded-md md:hidden hover:text-white"
                >
                    {!isOpen ? (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="border-t md:hidden bg-brand-dark/95 border-white/10 backdrop-blur-xl">
                    <div className="px-4 py-3 space-y-3">

                        {links.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-3 text-base font-medium text-gray-300 rounded-lg hover:text-white hover:bg-white/10"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link
                            href="/events"
                            onClick={() => setIsOpen(false)}
                            className="block w-full px-5 py-3 font-bold text-center text-white rounded-md bg-brand-gradient hover:opacity-90"
                        >
                            Explore Events
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
