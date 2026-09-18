"use client";

import { useEffect, type ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

// Keeps in-page anchor targets clear of the fixed navbar; matches scroll-margin-top in globals.css.
const ANCHOR_OFFSET = -110;

function ReducedMotionSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      lenis.options.lerp = media.matches ? 1 : 0.1;
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        syncTouch: true,
        touchMultiplier: 1.5,
        anchors: { offset: ANCHOR_OFFSET },
        autoRaf: true,
      }}
    >
      <ReducedMotionSync />
      {children}
    </ReactLenis>
  );
}
