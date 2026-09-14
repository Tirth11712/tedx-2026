"use client";

import Link from "next/link";
import { useState } from "react";
import "./MobilePopup.css";

export default function MobileNavPopup() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button - Shown only on mobile (<=768px) */}
      <button 
        type="button"
        className={`mobile-hamburger ${isMenuOpen ? 'mobile-hamburger-active' : ''}`}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Toggle menu"}
        aria-expanded={isMenuOpen}
      >
        <span className="lineHum"></span>
        <span className="lineHum"></span>
        <span className="lineHum"></span>
      </button>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={closeMenu}></div>
      )}

      {/* Mobile Navigation Popup Drawer */}
      <div 
        className={`mobile-nav-popup ${isMenuOpen ? 'mobile-nav-popup-open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav-header">
          <div className="mobile-logo">
            <img src="/logoNav.png" alt="TEDxSVIT Logo" />
          </div>
          <button 
            type="button"
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        
        <div className="mobile-nav-content">
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeMenu}>
              <span className="nav-item">Home</span>
            </Link>
            <Link href="/team" onClick={closeMenu}>
              <span className="nav-item">Team</span>
            </Link>
            <Link href="/speaker" onClick={closeMenu}>
              <span className="nav-item">Speakers</span>
            </Link>
            <Link href="/about" onClick={closeMenu}>
              <span className="nav-item">About</span>
            </Link>
          </div>
          
          <div className="mobile-tickets-section">
            <Link href="/ticketForm" onClick={closeMenu}>
              <button type="button" className="mobile-tickets-button">Get Tickets</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}