'use client';
import React, { useRef, useEffect } from 'react';
import { speakingEngagements } from '@/lib/constants';

const SpeakingSection = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const intervalTime = 20; // smaller = smoother scroll
    const pauseAfterFullScroll = 3000; // pause before looping

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        scrollAmount = 0;
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollAmount += scrollStep;
        container.scrollLeft = scrollAmount;
      }
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section id="speaking" className="py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-linkedin">
            Speaking Engagements
          </h2>
          <p className="text-lg text-gray-700 max-w-xl">
            From empowering young professionals on LinkedIn Live to addressing compliance for startups,
            here are some highlights from past speaking events.
          </p>
        </div>

        {/* Right Autoplay Carousel */}
        <div className="lg:w-1/2 w-full overflow-x-auto scrollbar-hide">
          <div
            ref={carouselRef}
            className="flex gap-6 snap-x snap-mandatory overflow-x-scroll pb-2 scroll-smooth"
          >
            {speakingEngagements.map((event, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[280px] bg-white rounded-xl shadow-md snap-start flex-shrink-0 overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover"
                  />
                ) : (
                  <div className="h-44 bg-gray-200 flex items-center justify-center text-sm text-gray-500">
                    No Image
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-[#3D3C42] text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-linkedin text-black hover:bg-linkedin hover:text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Want me to speak at your event?
          </a>
        </div>
    </section>
  );
};

export default SpeakingSection;
