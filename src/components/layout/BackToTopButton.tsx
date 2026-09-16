"use client";

import { useLenis } from "lenis/react";

export default function BackToTopButton() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button type="button" className="to-top-btn" onClick={scrollToTop} aria-label="Back to top">
      Back to top <span aria-hidden="true">↑</span>
    </button>
  );
}
