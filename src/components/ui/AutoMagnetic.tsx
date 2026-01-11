"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * AutoMagnetic: attaches a GSAP-powered magnetic interaction to
 * all matching elements on the page (buttons, anchors, [role="button"]).
 * Strength is computed per-element from its size so larger elements
 * feel stronger.
 */
export default function AutoMagnetic() {
  useEffect(() => {
    const selector = 'button, a[href], [role="button"], .btn, .button';

    const attached = new WeakSet<HTMLElement>();

    function attach(el: HTMLElement) {
      if (attached.has(el)) return;
      attached.add(el);

      // compute strength from size
      let strength = 0.4;
      const compute = () => {
        const rect = el.getBoundingClientRect();
        const avg = (rect.width + rect.height) / 2;
        strength = Math.min(Math.max(avg / 200, 0.2), 1);
      };

      compute();
      const ro = new ResizeObserver(compute);
      ro.observe(el);

      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        gsap.to(el, { x, y, duration: 0.28, ease: "power3.out" });
      };

      const handleLeave = () => {
        gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      // clean up helper in dataset to allow re-attach if needed
      (el as any).__autoMagneticCleanup = () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
        ro.disconnect();
      };
    }

    function scan() {
      document.querySelectorAll(selector).forEach((n) => {
        const el = n as HTMLElement;
        // Skip if explicitly opted out or already GSAPMagnetic wrapped
        if (el.dataset?.noMagnetic !== undefined) return;
        attach(el);
      });
    }

    scan();

    // observe additions to the DOM
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      // attempt to cleanup attached listeners
      document.querySelectorAll(selector).forEach((n) => {
        const el = n as any;
        if (typeof el.__autoMagneticCleanup === "function") el.__autoMagneticCleanup();
      });
    };
  }, []);

  return null;
}
