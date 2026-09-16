"use client";

import { useEffect } from "react";
import { useLenis } from "lenis/react";

/** Pauses page scrolling while an overlay is open. Scrollable overlay content needs `data-lenis-prevent`. */
export function useScrollLock(locked: boolean) {
  const lenis = useLenis();

  useEffect(() => {
    if (!locked || !lenis) return;
    lenis.stop();
    return () => lenis.start();
  }, [locked, lenis]);
}

/** Calls `onEscape` when Escape is pressed while `active`. */
export function useEscapeKey(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onEscape();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [active, onEscape]);
}
