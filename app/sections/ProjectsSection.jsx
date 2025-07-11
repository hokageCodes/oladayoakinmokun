'use client';
import React from 'react';
import { projects } from '@/lib/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-linkedin">
            Projects & Collaborations
          </h2>
          <p className="text-lg max-w-3xl mx-auto mt-3 text-gray-700">
            Impactful initiatives and partnerships that advance cybersecurity awareness and professional development.
          </p>
          <div className="w-24 h-1 bg-linkedin mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Image or Fallback */}
              <div className="h-48 bg-gray-200 relative">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 text-sm uppercase tracking-wide">
                    No Image Available
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-xs font-semibold text-linkedin uppercase tracking-wider">
                  {project.type}
                </p>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-linkedin">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block border border-linkedin text-black hover:bg-linkedin hover:text-white px-6 py-2 rounded-full transition-colors duration-300"
          >
            Discuss a Collaboration
          </a>
        </div>
      </div>
    </section>
  );
}
