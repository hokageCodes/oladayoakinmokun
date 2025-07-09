'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Split Background - Desktop: side by side, Mobile: stacked */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Law Side */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
          <Image
            src="/law.webp"
            alt="Law Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center pl-6 md:pl-8 lg:pl-16 space-y-1 md:space-y-2 lg:space-y-4">
            <span className="text-white text-lg md:text-2xl lg:text-3xl font-light opacity-70">
              Legal Advisory
            </span>
            <span className="text-white text-base md:text-xl lg:text-2xl font-light opacity-60">
              Advocacy
            </span>
            <span className="text-white text-sm md:text-lg lg:text-xl font-light opacity-50">
              Due Process
            </span>
          </div>
        </div>

        {/* Cybersecurity Side */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative">
          <Image
            src="/cyber.webp"
            alt="Cybersecurity Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-start md:items-end justify-center pl-6 md:pr-8 lg:pr-16 space-y-1 md:space-y-2 lg:space-y-4 text-left md:text-right">
            <span className="text-white text-lg md:text-2xl lg:text-5xl font-light opacity-70">
              Governance
            </span>
            <span className="text-white text-base md:text-xl lg:text-3xl font-light opacity-60">
              Risk
            </span>
            <span className="text-white text-sm md:text-lg lg:text-2xl font-light opacity-50">
              Compliance
            </span>
          </div>
        </div>
      </div>

      {/* Centered Full Name */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-center px-4 sm:px-6 md:px-12">
          Oladayo Akinmokun
        </h1>
      </div>
    </section>
  );
}