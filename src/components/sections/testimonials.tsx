"use client";

import React from 'react';
import { Waves, Zap, Wind, ShieldCheck, Fingerprint } from 'lucide-react';

const SENSOR_STRATEGIES = [
  {
    title: "Acoustic Sensors",
    description: "Acoustic changes may indicate friction, bearing wear, or misalignment before they become critical.",
    icon: <Waves className="w-6 h-6 text-blue-400" />,
    color: "blue"
  },
  {
    title: "Vibration Monitoring",
    description: "Vibration patterns reflect imbalance, structural issues, or looseness in rotating components.",
    icon: <Zap className="w-6 h-6 text-orange-400" />,
    color: "orange"
  },
  {
    title: "Gas Measurements",
    description: "Gas concentrations may indicate overheating, insulation breakdown, or potential leakage.",
    icon: <Wind className="w-6 h-6 text-green-400" />,
    color: "green"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#000000] py-[120px] px-6 border-t border-[#1a1a1a]">
      <div className="container max-w-[1200px] mx-auto">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1A1A1A] bg-[#080808] mb-6">
            <Fingerprint className="w-4 h-4 text-[#999999]" />
            <span className="text-[14px] font-medium text-[#999999]">SENSOR STRATEGY — Multi-Signal Rationale</span>
          </div>
          
          <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-[-0.02em] text-white mb-8">
            Why Multiple Sensors Are Used
          </h2>
          
          <p className="max-w-[800px] text-[18px] text-[#999999] leading-[1.6]">
            Different failure modes manifest through different physical signals. 
            Evaluating these signals together reduces ambiguity and improves fault confidence.
          </p>
        </div>

        {/* Strategy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {SENSOR_STRATEGIES.map((item, idx) => (
            <div 
              key={idx} 
              className="group bg-[#080808] border border-[#1a1a1a] rounded-[32px] p-10 relative flex flex-col gap-6 transition-all duration-300 hover:border-white/10 hover:translate-y-[-4px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-[24px] tracking-tight">{item.title}</h3>

              <p className="text-[#999999] text-[16px] leading-[1.7]">
                {item.description}
              </p>

              {/* Decorative Accent */}
              <div className={`absolute bottom-8 right-8 w-12 h-12 bg-${item.color}-500 opacity-[0.03] blur-[20px] pointer-events-none group-hover:opacity-[0.1] transition-opacity`} />
            </div>
          ))}
        </div>

        {/* Confidence Banner */}
        <div className="relative max-w-[1000px] mx-auto bg-[#080808] border border-[#1a1a1a] rounded-[40px] p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-green-500 font-medium text-[14px] uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Reliability Focused</span>
              </div>
              <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.3] text-white">
                "Evaluating multiple signals together reduces ambiguity and improves fault confidence in industrial environments."
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
