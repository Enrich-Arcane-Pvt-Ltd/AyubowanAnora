"use client";

import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, MoveUp, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll button only after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-10 overflow-hidden text-white border-t bg-brand-dark border-white/10">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">

        <div className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="space-y-8 lg:col-span-5">

                <Link href="/" className="block w-fit">
                  <div className="relative w-48 h-12">
                    <Image
                      src="/Images/img7.png"
                      alt="Daevnt Logo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                </Link>

                <p className="max-w-md text-sm leading-relaxed text-gray-400">
                  We orchestrate world-class exhibitions and trade fairs that connect industries and inspire innovation. Your partner in global event management.
                </p>
              </div>
            </div>

            <div className="max-w-sm pt-4">
              <p className="mb-4 text-xs font-bold tracking-widest uppercase text-brand-purple">
                Stay Updated
              </p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full py-4 pl-4 pr-12 text-sm text-white placeholder-gray-600 transition-colors border rounded-lg outline-none bg-brand-card border-white/10 focus:border-brand-purple"
                />
                <button className="absolute flex items-center justify-center text-white transition-colors rounded-md right-2 top-2 bottom-2 aspect-square bg-brand-purple hover:bg-brand-pink">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-bold text-white">Company</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Events', href: '/events' },
                { name: 'Sponsors', href: '/sponsors' },
                { name: 'Seminars', href: '/packages' },
                { name: 'Contact Support', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="flex items-center gap-2 transition-colors hover:text-brand-pink group">
                    <span className="w-0 overflow-hidden transition-all group-hover:w-2 text-brand-purple">•</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-6 text-lg font-bold text-white">Get in Touch</h3>
            <div className="space-y-6 text-sm text-gray-400">

              <div className="flex gap-4">
                <MapPin className="text-brand-purple shrink-0" size={20} />
                <p className="leading-relaxed">
                  612-7 Roanoke Rd, Toronto,<br />
                  ON M3A 1E3, Canada
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-brand-purple shrink-0" size={20} />
                <p className="font-medium text-white transition-colors cursor-pointer hover:text-brand-pink">
                  +1-416-824-1228
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-brand-purple shrink-0" size={20} />
                <a href="mailto:info@daevnt.com" className="font-medium text-white transition-colors hover:text-brand-pink">
                  info@daevnt.com
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 pt-8 border-t border-white/10 md:flex-row">
          <p className="text-xs text-center text-gray-500 md:text-left">
            © {currentYear} Enrich Arcane (Pvt) Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center justify-center text-gray-400 transition-all duration-300 rounded-full w-9 h-9 bg-brand-card hover:bg-brand-purple hover:text-white hover:-translate-y-1"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white bg-brand-purple shadow-[0_0_20px_rgba(139,92,246,0.4)] z-50 transition-all duration-500 ease-in-out hover:bg-brand-pink hover:-translate-y-1 ${showScroll ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
      >
        <MoveUp size={20} />
      </button>

    </footer>
  );
};

export default Footer;