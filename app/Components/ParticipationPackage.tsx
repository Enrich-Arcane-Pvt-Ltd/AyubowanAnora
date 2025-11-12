"use client";

import React from "react";
import { Plane, Building2, Globe2, Mail, Phone, Globe } from "lucide-react";

const ParticipationPackage: React.FC = () => {
  const highlights = [
    <>
      Over <strong>60 exhibitors</strong> representing diverse industries.
    </>,
    <>
      <strong>Book Fair Pavilion</strong> featuring Sri Lankan authors and
      publishers.
    </>,
    <>
      <strong>B2B networking sessions</strong> with international buyers and
      distributors.
    </>,
    <>
      <strong>Cultural Showcases</strong> celebrating Sri Lankan heritage.
    </>,
    <>
      <strong>Free admission</strong> for all visitors and buyers.
    </>,
  ];
  const Divider = () => <hr className="border-t border-white/30 my-10 sm:my-12" />;

  return (
    <section className="min-h-screen bg-gradient-to-b from-purple-700 to-blue-600 text-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-24 font-[Exhibition]">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">

       
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Key Highlights</h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg leading-relaxed">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <Divider />

        
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Entrepreneur Participation Package
          </h2>
          <p className="mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
            Each confirmed participant will enjoy a{" "}
            <strong>comprehensive business and travel package</strong> designed to
            ensure maximum exposure and convenience.
          </p>

        
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mb-3">
              <Plane className="w-5 h-5 text-yellow-300" /> Travel & Accommodation
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg">
              <li>
                <strong>UAE Visa</strong> valid for <strong>one (1) month</strong>
              </li>
              <li>
                <strong>Round-trip air tickets</strong> (Sri Lanka ↔ UAE)
              </li>
              <li>
                <strong>3-star hotel accommodation</strong> for{" "}
                <strong>4 days / 3 nights</strong> (with breakfast)
              </li>
            </ul>
          </div>

         
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mb-3">
              <Building2 className="w-5 h-5 text-yellow-300" /> Exhibition Facilities
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg">
              <li>
                <strong>One exhibition stall (3m × 3m)</strong> with company
                branding{" "}
                <em>(Artwork to be submitted by the participating company)</em>
              </li>
              <li>Standard furniture, lighting, and power supply included</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 mb-3">
              <Globe2 className="w-5 h-5 text-yellow-300" /> Marketing & Promotions
            </h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg">
              <li>
                <strong>Digital marketing campaigns</strong> in both the UAE and
                Sri Lanka
              </li>
              <li>
                <strong>Traditional marketing exposure</strong> through press,
                media, and print channels
              </li>
              <li>
                Featured coverage on{" "}
                <strong>event website, social media, and media releases</strong>
              </li>
            </ul>
          </div>
        </div>

        <Divider />

       
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Benefits to Participants
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              Direct access to <strong>buyers and distributors</strong> across the
              UAE and GCC.
            </li>
            <li>
              Opportunity to{" "}
              <strong>secure export orders and business collaborations.</strong>
            </li>
            <li>
              Extensive <strong>brand visibility and media exposure.</strong>
            </li>
            <li>
              A chance to experience the{" "}
              <strong>UAE’s vibrant trade environment</strong> and cultural
              diversity.
            </li>
          </ul>
        </div>

        <Divider />

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Participation Eligibility
          </h3>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              Open to{" "}
              <strong>
                registered Sri Lankan SMEs, manufacturers, exporters, and service
                providers
              </strong>
              .
            </li>
            <li>
              Products and services must comply with{" "}
              <strong>UAE import standards</strong> and quality guidelines.
            </li>
          </ul>
        </div>

        <Divider />

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Event Summary</h3>
          <div className="overflow-x-auto rounded-lg border border-white/30">
            <table className="w-full text-sm sm:text-base text-left border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="font-bold text-white py-2 px-3 w-1/3">Category</th>
                  <th className="font-bold text-white py-2 px-3">Details</th>
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
                  [
                    "Purpose",
                    "To connect Sri Lankan SMEs directly with global buyers",
                  ],
                ].map(([label, value], i) => (
                  <tr key={i} className="odd:bg-white/5 even:bg-transparent">
                    <td className="font-semibold py-2 px-3">{label}</td>
                    <td className="py-2 px-3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Divider />

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            How to Participate
          </h3>
          <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
            For stall reservations, registration details, and sponsorship
            opportunities, please contact:
          </p>
          <ul className="space-y-2 text-sm sm:text-base md:text-lg">
            <li className="flex flex-wrap items-start gap-3">
              <Mail className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Email:</strong> anorajanka@gmail.com
              </span>
            </li>
            <li className="flex flex-wrap items-start gap-3">
              <Phone className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Hotline / WhatsApp:</strong> +94 777 193 834 / +971 52 938 3422
              </span>
            </li>
            <li className="flex flex-wrap items-start gap-3">
              <Globe className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.ayubowan-anora.com"
                  className="underline text-white hover:text-yellow-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ayubowan-anora.com
                </a>
              </span>
            </li>
          </ul>
        </div>

        <Divider />

        
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Presented by</h3>
          <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg">
            <Building2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
            <strong>Anora Entertainment UAE & Sri Lanka</strong>
          </p>
          <p className="italic mt-1 text-sm sm:text-base">
            Empowering Sri Lankan Entrepreneurs for Global Success
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParticipationPackage;