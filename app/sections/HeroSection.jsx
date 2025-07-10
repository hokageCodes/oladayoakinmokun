'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Globe, Zap, Shield } from 'lucide-react';

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Lawyer', 'Cybersecurity & Data Privacy Specialist', 'Personal Branding Advocate'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-[#0077B5] via-[#005885] to-[#003d5c] overflow-hidden pt-4">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 py-20 min-h-screen flex flex-col lg:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            <Zap size={16} />
            Available for Consultation
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            The Cyber Lawyer
          </h1>

          <div className="text-2xl md:text-3xl text-white/90">
            <span className="font-semibold text-white underline decoration-white/40">
              {words[currentWord]}
            </span>
            <span className="animate-pulse text-white"> |</span>
          </div>

          <p className="text-white/80 max-w-xl mx-auto lg:mx-0 text-base md:text-lg">
            Helping businesses and professionals navigate cybersecurity, data privacy, and personal branding with expert legal guidance.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-white text-[#0077B5] px-8 py-3 rounded-full font-medium hover:scale-105 transition flex items-center gap-2">
              Book Consultation <ArrowUpRight size={18} />
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition">
              View My Work
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-70">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-70">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-70">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-lg w-full">
          <div className="relative rounded-2xl overflow-hidden border border-white/20">
            <img
              src="/assets/oladayo-akinmokun.webp"
              alt="Oladayo Akinmokun"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-0 bg-black/60 backdrop-blur-md p-4 space-y-3 w-full">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Shield size={16} className="text-white" /></div>
                <span className="text-white font-medium">Cybersecurity Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Globe size={16} className="text-white" /></div>
                <span className="text-white font-medium">Data Privacy Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full"><Zap size={16} className="text-white" /></div>
                <span className="text-white font-medium">Personal Branding Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
