"use client";

import React from 'react';
import { LayoutDashboard, AlertTriangle, Activity, Zap, ShieldCheck } from 'lucide-react';
import { ScrollReveal, RevealChildren, TextReveal } from '@/components/ui/scroll-reveal';

const SuccessStory = () => {
  return (
    <section className="relative w-full py-[120px] bg-black overflow-hidden" id="success-story">
      <div className="container max-w-[1200px] mx-auto px-6">
        <ScrollReveal variant="blur-in" duration={1.2}>
          <div className="relative flex flex-col items-center gap-[60px] px-8 md:px-20 py-24 rounded-[48px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden backdrop-blur-3xl">
            
            {/* Cinematic Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/[0.05] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/[0.05] blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col items-center text-center z-10 w-full">
              {/* Tag */}
              <ScrollReveal variant="blur-in" delay={0.2}>
                <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                  <LayoutDashboard size={14} className="text-white/60" />
                  <span className="text-[14px] font-medium text-white/60 tracking-[0.02em] uppercase">
                    SYSTEM SNAPSHOT
                  </span>
                </div>
              </ScrollReveal>

              <h2 className="text-[40px] md:text-[64px] font-bold leading-[1.1] tracking-[-0.04em] text-white mb-8">
                <TextReveal text="Real-time Operational Intelligence" stagger={0.08} />
              </h2>
              
              <p className="max-w-[700px] text-[18px] md:text-[20px] font-light text-white/40 leading-relaxed mb-16">
                Our dashboard provides high-fidelity visualization of sensor data, enabling precise diagnostics and proactive maintenance scheduling.
              </p>

              {/* Snapshot Cards */}
              <ScrollReveal 
                variant="fade" 
                staggerChildren={0.1}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
              >
                <RevealChildren variant="blur-in">
                  <div className="group flex flex-col p-8 rounded-[32px] bg-white/[0.02] border border-white/5 items-start text-left hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Activity size={24} className="text-blue-400" />
                    </div>
                    <span className="text-[14px] font-medium text-white/30 mb-2 uppercase tracking-wider">Vibration</span>
                    <span className="text-[20px] font-semibold text-white">Optimal Range</span>
                    <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[65%] h-full bg-blue-400" />
                    </div>
                  </div>
                </RevealChildren>

                <RevealChildren variant="blur-in">
                  <div className="group flex flex-col p-8 rounded-[32px] bg-white/[0.02] border border-white/5 items-start text-left hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Zap size={24} className="text-orange-400" />
                    </div>
                    <span className="text-[14px] font-medium text-white/30 mb-2 uppercase tracking-wider">Acoustics</span>
                    <span className="text-[20px] font-semibold text-white">Elevated Noise</span>
                    <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full bg-orange-400" />
                    </div>
                  </div>
                </RevealChildren>

                <RevealChildren variant="blur-in">
                  <div className="group flex flex-col p-8 rounded-[32px] bg-white/[0.02] border border-white/5 items-start text-left hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} className="text-emerald-400" />
                    </div>
                    <span className="text-[14px] font-medium text-white/30 mb-2 uppercase tracking-wider">Gas Levels</span>
                    <span className="text-[20px] font-semibold text-white">Stable</span>
                    <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[40%] h-full bg-emerald-400" />
                    </div>
                  </div>
                </RevealChildren>

                <RevealChildren variant="blur-in">
                  <div className="group flex flex-col p-8 rounded-[32px] bg-red-500/5 border border-red-500/20 items-start text-left hover:bg-red-500/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <AlertTriangle size={24} className="text-red-400" />
                    </div>
                    <span className="text-[14px] font-medium text-red-400/50 mb-2 uppercase tracking-wider">Health Score</span>
                    <span className="text-[20px] font-semibold text-red-400">Critical Attention</span>
                    <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[95%] h-full bg-red-500" />
                    </div>
                  </div>
                </RevealChildren>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SuccessStory;
