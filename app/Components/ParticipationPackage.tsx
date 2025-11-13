"use client";

import React from "react";
import { Plane, Building2, Globe2, Mail, Phone, Globe } from "lucide-react";

const ParticipationPackage: React.FC = () => {
  const highlights = [
    <>Over <strong>60 exhibitors</strong> representing diverse industries.</>,
    <><strong>Book Fair Pavilion</strong> featuring Sri Lankan authors and publishers.</>,
    <><strong>B2B networking sessions</strong> with international buyers and distributors.</>,
    <><strong>Cultural Showcases</strong> celebrating Sri Lankan heritage.</>,
    <><strong>Free admission</strong> for all visitors and buyers.</>,
  ];

  const Divider = () => <hr className="border-t border-white/30 my-8" />;

  const GradientIconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
                 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400 shadow-lg 
                 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <div className="text-white">{children}</div>
    </div>
  );

  const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl 
                 bg-white/20 backdrop-blur-md border border-white/30 shadow-md 
                 hover:bg-white/30 hover:shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
    >
      <div className="text-white">{children}</div>
    </div>
  );

  const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className="bg-white/10 backdrop-blur-md rounded-3xl p-10 sm:p-12 shadow-xl border border-white/20 
                 hover:shadow-2xl hover:border-white/40 transition-all duration-300 transform hover:scale-[1.01]"
    >
      {children}
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-700 via-indigo-700 to-blue-600 text-white py-20 px-6 sm:px-10 md:px-20 lg:px-32 font-[Exhibition]">
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20">

        
        <Card>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
            <GradientIconWrapper><Globe2 className="w-8 h-8" /></GradientIconWrapper>
            Key Highlights
          </h3>
          <ul className="list-disc pl-8 sm:pl-10 space-y-3 text-lg sm:text-xl md:text-2xl leading-relaxed">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Card>

     
        <Card>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Entrepreneur Participation Package
          </h2>
          <p className="mb-8 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Each confirmed participant will enjoy a{" "}
            <strong>comprehensive business and travel package</strong> designed to ensure maximum exposure and convenience.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold flex items-center gap-4 mb-4">
                <IconWrapper><Plane className="w-8 h-8" /></IconWrapper>
                Travel & Accommodation
              </h3>
              <ul className="list-disc pl-8 sm:pl-10 space-y-3 text-lg sm:text-xl md:text-2xl">
                <li><strong>UAE Visa</strong> valid for <strong>one (1) month</strong></li>
                <li><strong>Round-trip air tickets</strong> (Sri Lanka ↔ UAE)</li>
                <li><strong>3-star hotel accommodation</strong> for <strong>4 days / 3 nights</strong> (with breakfast)</li>
              </ul>
            </div>

            <Divider />

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold flex items-center gap-4 mb-4">
                <IconWrapper><Building2 className="w-8 h-8" /></IconWrapper>
                Exhibition Facilities
              </h3>
              <ul className="list-disc pl-8 sm:pl-10 space-y-3 text-lg sm:text-xl md:text-2xl">
                <li><strong>One exhibition stall (3m × 3m)</strong> with company branding <em>(Artwork to be submitted)</em></li>
                <li>Standard furniture, lighting, and power supply included</li>
              </ul>
            </div>

            <Divider />

            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold flex items-center gap-4 mb-4">
                <IconWrapper><Globe2 className="w-8 h-8" /></IconWrapper>
                Marketing & Promotions
              </h3>
              <ul className="list-disc pl-8 sm:pl-10 space-y-3 text-lg sm:text-xl md:text-2xl">
                <li><strong>Digital marketing campaigns</strong> in both the UAE and Sri Lanka</li>
                <li><strong>Traditional media coverage</strong> including press, radio, and print</li>
                <li>Featured on <strong>event website, social media, and promotional materials</strong></li>
              </ul>
            </div>
          </div>
        </Card>

      
        <Card>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-4">
            <GradientIconWrapper><Globe className="w-8 h-8" /></GradientIconWrapper>
            Event Summary
          </h3>
          <div className="overflow-x-auto rounded-lg border border-white/30">
            <table className="w-full text-lg sm:text-xl md:text-2xl text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="font-bold py-3 px-4 w-1/3">Category</th>
                  <th className="font-bold py-3 px-4">Details</th>
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
                    <td className="font-semibold py-3 px-4">{label}</td>
                    <td className="py-3 px-4">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        
        <Card>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 flex items-center gap-4">
            <GradientIconWrapper><Mail className="w-8 h-8" /></GradientIconWrapper>
            How to Participate
          </h3>
          <p className="mb-6 text-lg sm:text-xl md:text-2xl">
            For stall reservations, registration details, and sponsorship opportunities, please contact:
          </p>
          <ul className="space-y-5 text-lg sm:text-xl md:text-2xl">
            <li className="flex items-center gap-4">
              <IconWrapper><Mail className="w-7 h-7" /></IconWrapper>
              <span><strong>Email:</strong> <span className="text-yellow-300 font-semibold">anorajanka@gmail.com</span></span>
            </li>
            <li className="flex items-center gap-4">
              <IconWrapper><Phone className="w-7 h-7" /></IconWrapper>
              <span><strong>Hotline / WhatsApp:</strong> <span className="text-yellow-300 font-semibold">+94 777 193 834 / +971 52 938 3422</span></span>
            </li>
            <li className="flex items-center gap-4">
              <IconWrapper><Globe className="w-7 h-7" /></IconWrapper>
              <span>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.ayubowan-anora.com"
                  className="text-yellow-300 font-semibold underline hover:text-yellow-400"
                >
                  www.ayubowan-anora.com
                </a>
              </span>
            </li>
          </ul>
        </Card>

        
       
<Card>
  <h3 className="text-2xl sm:text-3xl font-semibold mb-4">Presented by</h3>
  <div className="flex items-center gap-4">
    <div
      className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                 bg-gradient-to-br from-purple-500 to-blue-500 
                 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Building2 className="w-7 h-7 text-white" />
    </div>
    <strong className="text-xl sm:text-2xl md:text-3xl">
      Anora Entertainment UAE & Sri Lanka
    </strong>
  </div>
  <p className="italic mt-2 text-lg sm:text-xl md:text-2xl text-gray-200">
    Empowering Sri Lankan Entrepreneurs for Global Success
  </p>
</Card>


      </div>
    </section>
  );
};

export default ParticipationPackage;