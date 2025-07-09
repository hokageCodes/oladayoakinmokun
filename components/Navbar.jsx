'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Me' },
    { href: '#offerings', label: 'What I Do' },
    { href: '#why', label: 'Speaking Engagements' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Me' },
  ];

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = scrolled ? 'text-white' : 'text-white';
  const linkHover = scrolled ? 'hover:text-white' : 'hover:text-[#005f91]';

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0077B5] border-b border-white/10' : 'bg-transparent'
        } backdrop-blur-xl`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center h-full">
              <span className={`text-4xl font-bold ${textColor}`}>O.A</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden text-white lg:flex items-center gap-10 text-lg">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition duration-200 ${textColor} ${linkHover}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#apply"
                className="bg-[#0077B5] text-white px-6 py-2.5 rounded-full font-medium hover:bg-blue-700 transition hover:scale-105 flex items-center gap-2"
              >
                Let's Work Together
                <ArrowUpRight size={16} />
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition ${textColor} hover:bg-black/5`}
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0077B5] transition-all duration-500 ease-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col h-full px-6 pt-6">
          {/* Mobile Header */}
          <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-bold">O.A</div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col justify-center flex-1 space-y-8 mt-12">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white/80 font-light tracking-tight hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-3 bg-white text-[#0077B5] px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-100 hover:scale-105 transition"
            >
              Let's Work Together
              <ArrowUpRight size={20} />
            </Link>
          </nav>

          <div className="pb-6 border-t border-white/10 text-white/40 text-sm pt-4">
            © 2025 Oladayo Akinmokun. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
