"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Building2, Globe2, Mail, Phone, Globe } from "lucide-react";

const ParticipationPackage: React.FC = () => {
  const highlights = [
    <>Over <strong>60 exhibitors</strong> representing diverse industries.</>,
    <><strong>Book Fair Pavilion</strong> featuring Sri Lankan authors and publishers.</>,
    <><strong>B2B networking sessions</strong> with international buyers and distributors.</>,
    <><strong>Cultural Showcases</strong> celebrating Sri Lankan heritage.</>,
    <><strong>Free admission</strong> for all visitors and buyers.</>,
  ];

  const Divider = () => <hr className="border-t border-white/30 my-6" />;

  
  const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md 
                 bg-white/20 backdrop-blur-md border border-white/30 shadow-md 
                 hover:bg-white/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="text-white">
        {children}
      </div>
    </motion.div>
  );

  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-white/20 
                 hover:shadow-2xl hover:border-white/40 transition-all duration-300"
    >
      {children}
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-600 text-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 font-[Exhibition]">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">

       
        <Card>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
            <IconWrapper><Globe2 className="w-6 h-6" /></IconWrapper>
            Key Highlights
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </Card>

        
        <Card>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Entrepreneur Participation Package
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Each confirmed participant will enjoy a{" "}
            <strong>comprehensive business and travel package</strong> designed to ensure maximum exposure and convenience.
          </p>

          <div className="space-y-6">
         
            <div>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 mb-3">
                <IconWrapper><Plane className="w-6 h-6" /></IconWrapper>
                Travel & Accommodation
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li><strong>UAE Visa</strong> valid for <strong>one (1) month</strong></li>
                <li><strong>Round-trip air tickets</strong> (Sri Lanka ↔ UAE)</li>
                <li><strong>3-star hotel accommodation</strong> for <strong>4 days / 3 nights</strong> (with breakfast)</li>
              </ul>
            </div>

            <Divider />

         
            <div>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 mb-3">
                <IconWrapper><Building2 className="w-6 h-6" /></IconWrapper>
                Exhibition Facilities
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li><strong>One exhibition stall (3m × 3m)</strong> with company branding <em>(Artwork to be submitted by the company)</em></li>
                <li>Standard furniture, lighting, and power supply included</li>
              </ul>
            </div>

            <Divider />

        
            <div>
              <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-3 mb-3">
                <IconWrapper><Globe2 className="w-6 h-6" /></IconWrapper>
                Marketing & Promotions
              </h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2">
                <li><strong>Digital marketing campaigns</strong> in both the UAE and Sri Lanka</li>
                <li><strong>Traditional marketing exposure</strong> through press, media, and print channels</li>
                <li>Featured coverage on <strong>event website, social media, and media releases</strong></li>
              </ul>
            </div>
          </div>
        </Card>

     
        <Card>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Benefits to Participants</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Direct access to <strong>buyers and distributors</strong> across the UAE and GCC.</li>
            <li>Opportunity to <strong>secure export orders and collaborations.</strong></li>
            <li>Extensive <strong>brand visibility</strong> and media exposure.</li>
            <li>Experience the <strong>UAE’s vibrant trade environment</strong> and cultural diversity.</li>
          </ul>
        </Card>

        
        <Card>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Participation Eligibility</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2">
            <li>Open to <strong>registered Sri Lankan SMEs, manufacturers, exporters, and service providers</strong>.</li>
            <li>Products must comply with <strong>UAE import standards</strong> and quality guidelines.</li>
          </ul>
        </Card>

        
        <Card>
          <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-3">
            <IconWrapper><Globe className="w-6 h-6" /></IconWrapper>
            Event Summary
          </h3>
          <div className="overflow-x-auto rounded-lg border border-white/20">
            <table className="w-full text-sm sm:text-base text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="font-bold py-2 px-3 w-1/3">Category</th>
                  <th className="font-bold py-2 px-3">Details</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Event Name", "AYUBOWAN–ANORA 2026"],
                  ["Dates", "March 28th & 29th, 2026 (Saturday & Sunday)"],
                  ["Venue", "Etisalat Academy, Dubai, UAE"],
                  ["Time", "10:00 AM – 10:00 PM"],
                  ["Visitors", "Open to the Public – Free Entry"],
                  ["Organized by", "Anora Entertainment"],
                  ["Purpose", "To connect Sri Lankan SMEs directly with global buyers"],
                ].map(([label, value], i) => (
                  <tr key={i} className="odd:bg-white/5 even:bg-transparent">
                    <td className="font-semibold py-2 px-3">{label}</td>
                    <td className="py-2 px-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">How to Participate</h3>
          <p className="mb-4">For stall reservations, registration details, and sponsorship opportunities, please contact:</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <IconWrapper><Mail className="w-6 h-6" /></IconWrapper>
              <span><strong>Email:</strong> anorajanka@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <IconWrapper><Phone className="w-6 h-6" /></IconWrapper>
              <span><strong>Hotline / WhatsApp:</strong> +94 777 193 834 / +971 52 938 3422</span>
            </li>
            <li className="flex items-center gap-3">
              <IconWrapper><Globe className="w-6 h-6" /></IconWrapper>
              <span><strong>Website:</strong> <a href="https://www.ayubowan-anora.com" className="underline text-white hover:text-yellow-300">www.ayubowan-anora.com</a></span>
            </li>
          </ul>
        </Card>

        
        <Card>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Presented by</h3>
          <div className="flex items-center gap-3">
            <IconWrapper><Building2 className="w-6 h-6" /></IconWrapper>
            <strong>Anora Entertainment UAE & Sri Lanka</strong>
          </div>
          <p className="italic mt-1 text-sm sm:text-base">Empowering Sri Lankan Entrepreneurs for Global Success</p>
        </Card>
      </div>
    </section>
  );
};

export default ParticipationPackage;
