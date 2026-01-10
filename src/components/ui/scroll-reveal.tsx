"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "blur-in";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  staggerChildren?: number;
  threshold?: number;
}

const variants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-down": {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

export function ScrollReveal({
  children,
  className = "",
  variant = "slide-up",
  delay = 0,
  duration = 0.8,
  distance = 40,
  once = true,
  staggerChildren = 0,
  threshold = 0.1,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const selectedVariant = variants[variant];

  // Adjust distance if it's a slide variant
  if (variant.startsWith("slide") && distance !== 40) {
    if (variant === "slide-up") selectedVariant.hidden.y = distance;
    if (variant === "slide-down") selectedVariant.hidden.y = -distance;
    if (variant === "slide-left") selectedVariant.hidden.x = distance;
    if (variant === "slide-right") selectedVariant.hidden.x = -distance;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: [0.21, 0.47, 0.32, 0.98],
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const RevealChildren: React.FC<{ children: React.ReactNode; variant?: string }> = ({ 
  children,
  variant = "slide-up"
}) => {
  const selectedVariant = variants[variant] || variants["slide-up"];
  
  return (
    <motion.div variants={selectedVariant}>
      {children}
    </motion.div>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.5 });
  
  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] pb-[0.1em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
