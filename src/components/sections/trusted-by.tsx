"use client";

import React from 'react';
import { AlertCircle } from 'lucide-react';

const ContextSection = () => {
  return (
    <section 
      id="context" 
      className="relative w-full py-[100px] overflow-hidden bg-black flex flex-col items-center justify-center border-t border-[#1A1A1A]"
    >
      <div className="container max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1A1A1A] bg-[#080808] mb-8">
          <AlertCircle className="w-4 h-4 text-[#999999]" />
          <span className="text-[14px] font-medium text-[#999999]">CONTEXT — Operational Challenge</span>
        </div>
        
        <h2 className="text-[36px] md:text-[56px] font-semibold tracking-[-0.02em] leading-[1.1] text-white mb-8">
          Early Indicators Are Often Missed
        </h2>
        
        <div className="max-w-[800px] text-[18px] md:text-[20px] text-[#999999] leading-[1.8] space-y-6">
          <p>
            Industrial machines typically exhibit measurable changes in sound, vibration, and emissions before failure. 
            These indicators are difficult to monitor continuously in operational environments and are often detected 
            only after performance degradation or breakdown.
          </p>
          <p className="text-white font-medium">
            Delayed detection increases downtime, maintenance cost, and operational risk.
          </p>
        </div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContextSection;
