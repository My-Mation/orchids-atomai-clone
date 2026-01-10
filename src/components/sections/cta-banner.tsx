"use client";

import React from 'react';
import { Rocket, Sparkles, Cpu, Zap, Network } from 'lucide-react';

const ENHANCEMENTS = [
  {
    title: "Signal Processing",
    description: "Improved signal processing techniques for cleaner data extraction.",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Fault Classification",
    description: "Classification of fault patterns using data-driven methods.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    title: "Industrial Protocols",
    description: "Support for standard industrial communication protocols.",
    icon: <Network className="w-5 h-5" />
  }
];

export default function CTABanner() {
  return (
    <section className="relative w-full py-[160px] flex justify-center items-center overflow-hidden bg-black border-t border-[#1a1a1a]">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 max-w-[1200px]">
        {/* Main Banner Card */}
        <div className="relative w-full bg-[#080808] border border-[#1a1a1a] rounded-[40px] overflow-hidden flex flex-col lg:flex-row items-stretch min-h-[500px]">
          
          {/* Content Side */}
          <div className="flex-1 p-10 md:p-16 flex flex-col items-start text-left justify-center border-b lg:border-b-0 lg:border-r border-[#1a1a1a]">
            {/* Small Badge */}
            <div className="flex items-center gap-2 mb-6">
              <Rocket className="w-4 h-4 text-[#999999]" strokeWidth={2} />
              <span className="text-[14px] font-medium text-[#999999] uppercase tracking-wider">
                DEVELOPMENT DIRECTION
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] md:text-[56px] font-semibold leading-[1.1] text-white tracking-[-0.04em] mb-8">
              Planned Enhancements
            </h2>

            {/* Subtext */}
            <p className="text-[18px] text-[#999999] leading-[1.6] mb-10 max-w-[480px]">
              These enhancements aim to improve accuracy and deployment flexibility for the next generation of monitoring systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#operational-flow"
                className="px-8 py-4 bg-white text-black text-[15px] font-semibold rounded-xl hover:scale-[1.02] transition-transform duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Enhancement List Side */}
          <div className="flex-1 bg-[#050505] p-10 md:p-16 flex flex-col justify-center gap-8">
            {ENHANCEMENTS.map((item, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-[#999999] text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
