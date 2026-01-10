"use client";

import React from 'react';
import { Radio, Cpu, Network, BarChart3, AlertTriangle, CheckCircle2, Workflow } from 'lucide-react';
import { ScrollReveal, RevealChildren, TextReveal } from '@/components/ui/scroll-reveal';

const operations = [
  {
    title: "Signal Capture",
    description: "Sensors capture sound, vibration, and gas-related signals during machine operation.",
    icon: <Radio className="w-6 h-6 text-white" />,
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    title: "Local Processing",
    description: "ESP32 performs local sampling and basic signal conditioning for real-time analysis.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    title: "Data Transmission",
    description: "Sensor data is transmitted securely to a centralized backend system.",
    icon: <Network className="w-6 h-6 text-white" />,
    gradient: "from-cyan-500/10 to-transparent"
  },
  {
    title: "Baseline Establishment",
    description: "Normal operating baselines are established to understand machine behavior.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
    gradient: "from-green-500/10 to-transparent"
  },
  {
    title: "Anomaly Identification",
    description: "Deviations beyond defined thresholds are identified and flagged immediately.",
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    gradient: "from-orange-500/10 to-transparent"
  },
  {
    title: "Early Detection",
    description: "This process enables early identification of abnormal operating conditions.",
    icon: <CheckCircle2 className="w-6 h-6 text-white" />,
    gradient: "from-emerald-500/10 to-transparent"
  }
];

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-black py-[120px]" id="operational-flow">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col items-center text-center mb-[80px]">
          <ScrollReveal variant="blur-in" delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
              <Workflow className="w-4 h-4 text-white/60" />
              <span className="text-[14px] font-medium text-white/60 tracking-tight uppercase">SYSTEM OPERATION</span>
            </div>
          </ScrollReveal>
          
          <h2 className="text-[48px] md:text-[72px] font-bold tracking-[-0.04em] leading-[1.1] text-white">
            <TextReveal text="Operational Flow" stagger={0.1} />
          </h2>
        </div>

        <ScrollReveal 
          variant="fade" 
          staggerChildren={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {operations.map((op, idx) => (
            <RevealChildren key={idx} variant="blur-in">
              <div className="group relative h-full flex flex-col bg-white/[0.03] border border-white/5 rounded-[32px] overflow-hidden p-10 transition-all duration-700 hover:bg-white/[0.05] hover:border-white/20 hover:scale-[1.02]">
                <div className={`absolute inset-0 bg-gradient-to-br ${op.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {op.icon}
                  </div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[14px] font-bold text-white/20 tabular-nums tracking-widest">0{idx + 1}</span>
                    <h3 className="text-[24px] font-semibold text-white tracking-tight">{op.title}</h3>
                  </div>
                  
                  <p className="text-[17px] text-white/40 leading-relaxed font-light">
                    {op.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
              </div>
            </RevealChildren>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesGrid;
