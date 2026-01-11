"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface GSAPMagneticProps {
  children: React.ReactNode;
  /**
   * Optional explicit strength. If omitted, strength is calculated
   * automatically from the element's average size so larger buttons
   * feel stronger.
   */
  strength?: number;
}

export default function GSAPMagnetic({ children, strength }: GSAPMagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const strengthRef = useRef<number>(strength ?? 0.4);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If no explicit strength provided, compute based on element size
    const computeStrength = () => {
      if (typeof strength === "number") return;
      const rect = el.getBoundingClientRect();
      const avg = (rect.width + rect.height) / 2;
      // map avg size to a reasonable strength range [0.2, 1]
      const s = Math.min(Math.max(avg / 200, 0.2), 1);
      strengthRef.current = s;
    };

    computeStrength();
    const ro = new ResizeObserver(computeStrength);
    ro.observe(el);

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const s = strengthRef.current;
      const x = (e.clientX - rect.left - rect.width / 2) * s;
      const y = (e.clientY - rect.top - rect.height / 2) * s;

      gsap.to(el, {
        x,
        y,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      ro.disconnect();
    };
  }, [strength]);

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
  );
}
