"use client";

import React, { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import GSAPMagnetic from "@/components/ui/Magnetic";

/**
 * HeroSection Component
 * Enhanced with Apple-style cinematic animations.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": any;
    }
  }
}

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Dynamically load the dotlottie web component script (module)
    const id = "dotlottie-wc-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.type = "module";
      s.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js";
      document.head.appendChild(s);
      return () => {
        // optional cleanup: remove script on unmount
        const existing = document.getElementById(id);
        if (existing) existing.remove();
      };
    }
  }, []);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-[120px] pb-[160px] px-6 overflow-hidden bg-black"
    >
      {/* Cinematic Background Elements */}
      {/* Lottie background */}

      <motion.div
        style={{ y: y1, opacity, scale }}
        className="absolute inset-0 z-1"
      >
        <div className=" z-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] z-1" />
        <div className="absolute bottom-[20%] right-[20%] w-[400px] h-[400px] bg-purple-500/[0.02] rounded-full blur-[100px]" />

        {/* dotlottie visual (centered) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <dotlottie-wc
            src="https://lottie.host/e47da734-9af7-453e-9594-23c7ebb16f68/hNyPIXG4bS.lottie"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "4000px",
              maxHeight: "4000px",
            }}
            autoplay
            loop
          />
        </div>
      </motion.div>

      {/* Subtle Grain Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-1"
        style={{
          backgroundImage: `url("https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f32743c0-7a80-4c14-8637-ca071f395a98-atomai-framer-website/assets/images/fFmTGTpM2qh8kadPmXP0STbpw-1.png")`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />

      <div className="container max-w-[1200px] mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <ScrollReveal variant="blur-in" delay={0.1}>
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-[14px] font-medium text-white/60 tracking-tight uppercase">
              Innovation in Industrial Monitoring
            </span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <h1 className="max-w-[1000px] mb-8 text-[56px] md:text-[92px] font-bold leading-[1.05] tracking-[-0.05em] text-white ">
          <TextReveal
            text="Smart Machine Health Monitoring"
            className="block"
            stagger={0.08}
          />
        </h1>

        {/* Subtext */}
        <ScrollReveal variant="blur-in" delay={0.6} duration={1}>
          <p className="max-w-[700px] mb-12 text-[18px] md:text-[22px] font-light leading-[1.6] text-white/50">
            Advanced sensor fusion for early mechanical degradation detection.{" "}
            <br className="hidden md:block" />
            VibraSense identifies operational risks before they become failures.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal variant="blur-in" delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <GSAPMagnetic strength={0.6}>
              <a
                href="#operational-flow"
                className="group relative flex items-center justify-center gap-2 h-16 px-10 rounded-full bg-white text-black font-semibold text-[16px] transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform duration-500" />
                <span>Explore the System</span>
              </a>
            </GSAPMagnetic>

            <GSAPMagnetic strength={0.45}>
              <a
                href="#success-story"
                className="text-white/60 hover:text-white font-medium transition-colors flex items-center gap-2 h-16 px-6"
              >
                <span>Watch Case Study</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
                  <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-current border-b-[4px] border-b-transparent ml-1" />
                </div>
              </a>
            </GSAPMagnetic>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
