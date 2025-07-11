'use client';
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="text-[#3D3C42] py-20 px-2 lg:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full h-full">
          <img
            src="/assets/oladayo-cyber-lawyer.jpg"
            alt="Oladayo Akinmokun"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-linkedin">About Me</h2>
          <p className="text-lg leading-relaxed text-justify">
            Hi, I’m <strong>Oladayo Akinmokun</strong>, a corporate commercial lawyer with a large sprinkle of litigation. 
            As a corporate commercial lawyer, I focus on <strong>Cybersecurity</strong> and <strong>Data Privacy</strong>, helping businesses 
            and professionals navigate the complexities of legal compliance.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            With over three years of experience in the courtroom, I understand what it means to defend and protect the interests of my clients 
            across different cadres of court.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Let it be known that I’m big on <strong>Personal Branding</strong>, which is why I help lawyers build a strong online presence. 
            My mission is simple: <strong>Empower and protect</strong>.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            When I’m not deep in legal frameworks or content strategy, you’ll probably find me watching K-dramas, vibing to BTS 
            (<em>Jungkook, I see you! 😆</em>), or brainstorming my next big project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
