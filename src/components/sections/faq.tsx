"use client";

import React, { useState } from "react";
import { Plus, Info } from "lucide-react";

interface LimitationItem {
  title: string;
  description: string;
}

const limitationsData: LimitationItem[] = [
  {
    title: "Prototype-stage implementation",
    description: "The current version is a functional prototype designed for proof-of-concept validation and initial testing.",
  },
  {
    title: "Calibration required for different machine types",
    description: "System parameters and sensitivity thresholds must be manually calibrated for each specific machine type to ensure reliable detection.",
  },
  {
    title: "Sensor readings may be influenced by environment",
    description: "Ambient noise, structural vibrations from nearby equipment, and temperature fluctuations can affect sensitive sensor readings.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-[100px] md:py-[160px] border-t border-[#1a1a1a]" id="limitations">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Heading and CTA */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#999999] text-[14px] flex items-center gap-2">
                <Info size={16} />
                LIMITATIONS — Current Constraints
              </span>
            </div>
            
            <h2 className="text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white mb-6">
              Current Limitations
            </h2>
            
            <p className="text-[#999999] text-[18px] mb-8 max-w-[400px]">
              These constraints are typical for early-stage monitoring systems and are being addressed in future iterations.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="flex flex-col border-t border-[#1a1a1a]">
            {limitationsData.map((item, index) => (
              <div 
                key={index} 
                className="border-bottom border-[#1a1a1a] group"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-8 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-white text-[18px] md:text-[20px] font-medium leading-tight group-hover:text-white/80 transition-colors">
                    {item.title}
                  </span>
                  <div className={`transform transition-transform duration-300 text-white ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                    <Plus size={24} strokeWidth={1.5} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-height-[200px] opacity-100 pb-8" : "max-height-0 opacity-0"
                  }`}
                  style={{ maxHeight: openIndex === index ? "200px" : "0px" }}
                >
                  <p className="text-[#999999] text-[16px] leading-[1.6]">
                    {item.description}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-[#1a1a1a]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
