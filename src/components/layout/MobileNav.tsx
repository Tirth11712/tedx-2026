"use client";

import Image from "next/image";
import Link from "next/link";
import { navLinks, ticketsHref } from "@/data/site";
import { useEscapeKey, useScrollLock } from "@/hooks/overlay";
import "@/styles/mobile-nav.css";
import config from "@/config.json";

export function MobileNavTrigger({
  isOpen,
  onToggle,
}: {
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`mobile-hamburger ${isOpen ? "mobile-hamburger-active" : ""}`}
      onClick={onToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-nav"
    >
      <span className="lineHum" />
      <span className="lineHum" />
      <span className="lineHum" />
    </button>
  );
}

export default function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useScrollLock(isOpen);
  useEscapeKey(isOpen, onClose);

  return (
    <>
      {isOpen && <div className="mobile-nav-overlay" onClick={onClose} />}

      <div
        id="mobile-nav"
        className={`mobile-nav-popup ${isOpen ? "mobile-nav-popup-open" : ""}`}
        aria-hidden={!isOpen}
        inert={!isOpen}
        data-lenis-prevent
      >
        <div className="mobile-nav-header">
          <Image src={config.media.logo} alt="TEDxSVIT" width={980} height={158} className="mobile-logo" />
          <button type="button" className="mobile-close-btn" onClick={onClose} aria-label="Close menu">
            ✕
          </button>
        </div>

        <nav className="mobile-nav-content" aria-label="Mobile">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={onClose} className="nav-item">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mobile-tickets-section">
            <Link href={ticketsHref} onClick={onClose} className="mobile-tickets-button">
              Get Tickets
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
