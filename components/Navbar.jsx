"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#offerings", label: "What I Do" },
    { href: "#speaking", label: "Speaking" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Shared Logo */}
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-[#0077B5] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-[#0077B5] rounded-full p-2">
                  <span className="text-white font-bold text-xl">OA</span>
                </div>
              </div>
              <span
                className={`ml-3 font-medium text-lg transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-white drop-shadow-lg"
                }`}
              >
                Oladayo Akinmokun
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-all duration-300 relative group py-2 ${
                    scrolled
                      ? "text-gray-600 hover:text-[#0077B5]"
                      : "text-white/90 hover:text-white drop-shadow-md"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0077B5] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-[#0077B5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#005885] hover:shadow-lg hover:shadow-[#0077B5]/25 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Let's Connect
                <ArrowUpRight size={16} />
              </button>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10 drop-shadow-md"
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-[#0077B5]/95 backdrop-blur-xl"></div>

        <div className="relative h-full flex flex-col">
          {/* Nav Links */}
          <nav className="flex-1 flex flex-col justify-center px-6 space-y-6">
            {navLinks.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl text-white/90 hover:text-white transition-all duration-500 py-2 transform ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 0.1}s` : "0s",
                }}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className={`bg-white text-[#0077B5] px-8 py-3 rounded-full font-medium hover:bg-gray-50 hover:shadow-lg transition-all duration-500 text-lg mt-6 self-start transform ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isOpen ? `${navLinks.length * 0.1}s` : "0s",
              }}
            >
              Let's Connect
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
