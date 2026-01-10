"use client";

import React from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const OutboundSystems = () => {
  return (
    <section className="relative w-full bg-[#000000] py-[100px] overflow-hidden border-t border-[#1A1A1A]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1A1A1A] bg-[#080808] mb-6">
            <Activity className="w-4 h-4 text-[#999999]" />
            <span className="text-[14px] font-medium text-[#999999]">SYSTEM OVERVIEW — High-Level Solution</span>
          </div>
          
          <h2 className="text-[48px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.1] text-white mb-6">
            Continuous Machine Monitoring
          </h2>
          
          <p className="max-w-[800px] text-[18px] text-[#999999] leading-[1.6]">
            The system continuously monitors multiple physical signals from a machine and evaluates deviations from normal operating behavior. 
            Combining multiple sensor inputs improves reliability compared to single-sensor approaches.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[100px]">
          <div className="p-8 rounded-[24px] border border-[#1A1A1A] bg-[#080808] hover:border-[#333] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Simplicity</h3>
            <p className="text-[#999999] leading-relaxed">
              Designed for ease of use and straightforward installation in any industrial environment.
            </p>
          </div>

          <div className="p-8 rounded-[24px] border border-[#1A1A1A] bg-[#080808] hover:border-[#333] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Scalability</h3>
            <p className="text-[#999999] leading-relaxed">
              Easily expand the system across multiple machines and facilities with centralized monitoring.
            </p>
          </div>

          <div className="p-8 rounded-[24px] border border-[#1A1A1A] bg-[#080808] hover:border-[#333] transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Practical Deployment</h3>
            <p className="text-[#999999] leading-relaxed">
              Engineered for real-world reliability and long-term operation in demanding conditions.
            </p>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mt-12 bg-[#080808]/50 border border-[#1A1A1A] rounded-[24px] p-8 md:p-12">
          <h3 className="text-[24px] font-medium text-white text-center md:text-left max-w-[400px]">
            Ready to secure your machine&apos;s health?
          </h3>
          <a 
            href="#operational-flow" 
            className="flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold text-[15px] hover:scale-[1.02] transition-transform duration-200"
          >
            Explore System Operation
          </a>
        </div>
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default OutboundSystems;
