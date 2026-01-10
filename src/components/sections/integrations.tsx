"use client";

import React from 'react';
import { Settings, Cog, Zap, Activity, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const MACHINE_TYPES = [
  { name: 'Electric Motors', description: 'Monitoring heat and vibration in induction and DC motors.', icon: <Cog size={20} /> },
  { name: 'Centrifugal Pumps', description: 'Detecting cavitation, seal leaks, and bearing wear.', icon: <Cpu size={20} /> },
  { name: 'Air Compressors', description: 'Monitoring pressure variations and valve health.', icon: <Settings size={20} /> },
  { name: 'Rotating Equipment', description: 'General health tracking for gearboxes and conveyors.', icon: <Activity size={20} /> },
  { name: 'Industrial Fans', description: 'Identifying imbalance and structural resonance.', icon: <Cog size={20} /> },
  { name: 'Conveyor Systems', description: 'Tracking belt alignment and motor stress.', icon: <Cpu size={20} /> },
  { name: 'Hydraulic Units', description: 'Pressure and fluid quality monitoring.', icon: <Settings size={20} /> },
  { name: 'Gearboxes', description: 'Vibration and temperature fault detection.', icon: <Activity size={20} /> },
  { name: 'HVAC Systems', description: 'Efficiency and acoustic signature analysis.', icon: <Cog size={20} /> },
];

export default function IntegrationsSection() {
  const column1 = [...MACHINE_TYPES, ...MACHINE_TYPES];
  const column2 = [...MACHINE_TYPES.slice().reverse(), ...MACHINE_TYPES.slice().reverse()];
  const column3 = [...MACHINE_TYPES.slice(3), ...MACHINE_TYPES.slice(0, 3), ...MACHINE_TYPES.slice(3), ...MACHINE_TYPES.slice(0, 3)];

  return (
    <section className="bg-black py-[160px] relative overflow-hidden border-t border-[#1a1a1a]" id="equipment">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-2 mb-4 text-[#999999] text-sm font-medium">
              <Settings className="w-4 h-4" />
              <span>APPLICABLE EQUIPMENT — Intended Scope</span>
            </div>
            <h2 className="text-white text-[48px] md:text-[64px] font-semibold leading-[1.2] tracking-[-0.02em] mb-6">
              Applicable Machine Types
            </h2>
            <p className="text-[#999999] text-lg leading-[1.6] max-w-[600px]">
              The system is intended for machines where degradation follows observable physical patterns. 
              Our multi-sensor approach captures these patterns before they lead to failure.
            </p>
          </div>
          <div>
            <a
              href="#operational-flow"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-xl text-[15px] transition-transform hover:scale-[1.02]"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Vertical Scrolling Columns Section */}
        <div className="relative mt-20 h-[600px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Column 1 */}
            <div className="relative h-full overflow-hidden">
              <motion.div 
                className="flex flex-col gap-6"
                animate={{ translateY: [0, "-50%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {column1.map((item, idx) => (
                  <MachineCard key={`col1-${idx}`} item={item} />
                ))}
              </motion.div>
            </div>

            {/* Column 2 */}
            <div className="relative h-full overflow-hidden hidden md:block">
              <motion.div 
                className="flex flex-col gap-6"
                animate={{ translateY: ["-50%", 0] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {column2.map((item, idx) => (
                  <MachineCard key={`col2-${idx}`} item={item} />
                ))}
              </motion.div>
            </div>

            {/* Column 3 */}
            <div className="relative h-full overflow-hidden hidden md:block">
              <motion.div 
                className="flex flex-col gap-6"
                animate={{ translateY: [0, "-50%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {column3.map((item, idx) => (
                  <MachineCard key={`col3-${idx}`} item={item} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function MachineCard({ item }: { item: any }) {
  return (
    <div className="flex-shrink-0 w-full bg-[#080808] border border-[#1a1a1a] rounded-[32px] p-8 hover:border-white/20 transition-all cursor-default group/card">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover/card:scale-110 transition-transform">
        {item.icon}
      </div>
      <h3 className="text-white text-xl font-semibold mb-2">{item.name}</h3>
      <p className="text-[#999999] text-sm leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}
