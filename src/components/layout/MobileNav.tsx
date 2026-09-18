"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, ticketsHref } from "@/data/site";
import { useEscapeKey, useScrollLock } from "@/hooks/overlay";
import "@/styles/mobile-nav.css";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  useScrollLock(isOpen);
  useEscapeKey(isOpen, close);

  return (
    <>
      <button
        type="button"
        className={`mobile-hamburger ${isOpen ? "mobile-hamburger-active" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
      >
        <span className="lineHum" />
        <span className="lineHum" />
        <span className="lineHum" />
      </button>

      {isOpen && <div className="mobile-nav-overlay" onClick={close} />}

      <div
        id="mobile-nav"
        className={`mobile-nav-popup ${isOpen ? "mobile-nav-popup-open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        data-lenis-prevent
      >
        <div className="mobile-nav-header">
          <Image src="/brand/logo.svg" alt="TEDxSVIT" width={171} height={29} className="mobile-logo" />
          <button type="button" className="mobile-close-btn" onClick={close} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="mobile-nav-content" aria-label="Mobile">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={close} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mobile-tickets-section">
            <Link href={ticketsHref} onClick={close} className="mobile-tickets-button">
              Get Tickets
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
