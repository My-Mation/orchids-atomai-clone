import React from 'react';
import { Cpu, Activity, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-20 pb-10 overflow-hidden border-t border-[#1a1a1a]">
      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16 border-b border-[#1A1A1A]">
          <div className="flex flex-col gap-6 max-w-[500px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Activity size={20} className="text-white" />
              </div>
              <h2 className="text-[24px] font-semibold text-white tracking-tight">
                Smart Machine Health Monitoring System
              </h2>
            </div>
            <p className="text-[#999999] text-[16px] leading-[1.6]">
              A sensor-based monitoring system designed to identify early indicators of mechanical degradation and operational risk in industrial machines.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-[#999999] text-[14px] uppercase tracking-wider font-medium">Core Technologies</span>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#141414] border border-[#1A1A1A] text-[13px] text-white">ESP32 Controller</span>
              <span className="px-4 py-2 rounded-full bg-[#141414] border border-[#1A1A1A] text-[13px] text-white">Sound Analysis</span>
              <span className="px-4 py-2 rounded-full bg-[#141414] border border-[#1A1A1A] text-[13px] text-white">Vibration Sensing</span>
              <span className="px-4 py-2 rounded-full bg-[#141414] border border-[#1A1A1A] text-[13px] text-white">Gas Detection</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[13px] text-[#555555]">
            <ShieldCheck size={14} />
            <span>© 2024 Smart Machine Health Monitoring System. Early-stage prototype.</span>
          </div>
          
          <div className="flex items-center gap-8 text-[13px] text-[#555555]">
            <a href="#hero-section" className="hover:text-white transition-colors">Back to top</a>
            <a href="#context" className="hover:text-white transition-colors">System Context</a>
            <a href="#operational-flow" className="hover:text-white transition-colors">Operations</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
