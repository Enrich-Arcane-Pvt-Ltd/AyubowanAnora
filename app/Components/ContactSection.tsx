import React from "react";
import { Mail, Phone, Globe } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section text-center">
    <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Us</h2>
    <p className="text-gray-700 mb-4">For registrations and sponsorships, reach out to us:</p>
    <div className="space-y-2 text-gray-600">
      <p className="flex justify-center items-center gap-2"><Mail /> anorajanaka@gmail.com</p>
      <p className="flex justify-center items-center gap-2"><Phone /> +94 777 193 834 / +971 52 938 3422</p>
      <p className="flex justify-center items-center gap-2"><Globe /> www.ayubowan-anora.com</p>
    </div>
  </section>
);

export default ContactSection;
