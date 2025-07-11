'use client';
import React from 'react';
import { testimonials } from '@/lib/constants';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-linkedin">
            What People Say About Me
          </h2>
          <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
            A few kind words from those I've worked with, mentored, or spoken to.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg p-6 flex flex-col justify-between h-full"
            >
              <Quote className="w-8 h-8 text-[#7F5283] mb-4" />
              <p className="text-gray-800 text-base font-medium italic leading-relaxed">
                “{item.text}”
              </p>
              <p className="mt-6 text-sm text-[#3D3C42] font-semibold">
                – {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
