"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Navbar component for VibraSense.
 * Features:
 * - Glassmorphism effect (backdrop-blur)
 * - Sticky positioning
 * - Centered menu links with hover effects
 * - Custom "Demo" CTA button
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Technology', href: '#outbound-systems' },
    { name: 'Case Studies', href: '#success-story' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-[#1a1a1a] bg-black/50 backdrop-blur-[12px]">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-6 md:px-10">
        
        {/* LOGO SECTION */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
              <div className="h-4 w-4 rounded-sm bg-black" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">VibraSense</span>
          </a>
        </div>

        {/* NAVIGATION LINKS (Desktop) */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-[14px] font-medium text-[#999999] transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON SECTION */}
        <div className="flex items-center gap-4">
          <a
            href="#cta-banner"
            className="group relative hidden sm:flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white px-6 py-2.5 text-[14px] font-bold text-black transition-all hover:bg-white/90"
          >
            <span className="relative z-10">Demo</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 lg:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-50 bg-black lg:hidden">
          <nav className="flex flex-col p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-b border-white/5 py-4 text-lg font-medium text-[#999999] transition-colors active:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-8">
              <a
                href="#cta-banner"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-white py-4 text-[16px] font-bold text-black"
              >
                Demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;