'use client';
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linkedin text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Name and Tagline */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-bold">Oladayo Akinmokun</h3>
          <p className="text-sm text-white/70">
            Lawyer · Data Privacy · Brand Strategist
          </p>
        </div>

        {/* Center: Social + Email */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@oladayoakinmokun.com"
            className="hover:text-[#A6D1E6] transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/oladayoakinmokun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A6D1E6] transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Legal */}
        <div className="text-center md:text-right text-sm text-white/50">
          &copy; {new Date().getFullYear()} Oladayo Akinmokun. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
