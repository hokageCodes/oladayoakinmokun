'use client';
import React from 'react';
import { awards } from '@/lib/constants';

const AwardsSection = () => {
  return (
    <section id="awards" className="bg-linkedin py-24 px-4 text-[#3D3C42]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Awards & Recognitions
          </h2>
          <p className="text-base text-gray-300 mt-2 max-w-2xl mx-auto">
            These aren’t just honors — they’re receipts. Proof that the work has impact, visibility, and voice.
          </p>
        </div>

        {/* Award Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-[#7F5283]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Badge Stamp */}
              <div className="absolute -top-4 -left-4 bg-[#7F5283] text-white w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md border-4 border-white">
                {item.icon}
              </div>

              {/* Award Info */}
              <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
                {item.year}
              </p>
              <h3 className="text-lg font-bold text-[#3D3C42] leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mt-1 italic">
                {item.subtitle}
              </p>

              {/* Authorship Vibe */}
              <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-center gap-2">
                <div className="w-6 h-6 bg-[#A6D1E6] rounded-full flex items-center justify-center text-[10px] font-bold text-[#3D3C42]">
                  in
                </div>
                <span>
                  Featured on <strong className="text-[#7F5283]">LinkedIn / Web</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
