"use client";

import Image from "next/image";
import Link from "next/link";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      {/* ============ GIANT HERO WORDMARK ============ */}
      <div className="foot-word-wrap" aria-hidden="true">
        <h2 className="foot-wordmark">
          <span className="wm-ted">TED</span>
          <span className="wm-x">x</span>
          <span className="wm-svit">SVIT</span>
        </h2>
      </div>

      <div className="footer-container">
        {/* ============ EDITORIAL COLUMNS ============ */}
        <div className="foot-cols">
          {/* Col 1: Brand & Theme */}
          <div className="fc">
            <div className="fc-head">
              <b>01</b>
              <span>Edition</span>
            </div>
            <p className="fc-brand-desc">
              TEDxSVIT — Ideas Worth Spreading. An independently organized TEDx
              event powered entirely by the student community of SVIT.
            </p>
            <div className="fc-pill-badge">
              <i></i>
              <span>Vol.05 · Unfiltered</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="fc">
            <div className="fc-head">
              <b>02</b>
              <span>Navigation</span>
            </div>
            <ul>
              <li>
                <Link href="/">
                  <sup>01</sup> Home
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <sup>02</sup> About
                </Link>
              </li>
              <li>
                <Link href="/speaker">
                  <sup>03</sup> Speakers
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <sup>04</sup> Team
                </Link>
              </li>
              <li>
                <Link href="/ticketForm">
                  <sup>05</sup> Get Tickets <span className="arrow">↗</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & FAQ */}
          <div className="fc">
            <div className="fc-head">
              <b>03</b>
              <span>Explore</span>
            </div>
            <ul>
              <li>
                <Link href="/#bento-wrapper">Gallery &amp; Moments</Link>
              </li>
              <li>
                <Link href="/#FAQ">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href="/about#manifesto">Event Manifesto</Link>
              </li>
              <li>
                <Link href="/about#timeline">Our Journey</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Venue & Social */}
          <div className="fc">
            <div className="fc-head">
              <b>04</b>
              <span>Venue &amp; Connect</span>
            </div>
            <p className="fc-copy">
              <strong>Sardar Vallabhbhai Institute of Technology</strong>
              B/h. Vasad Railway Station, NH-48, Vasad, Gujarat 388306
            </p>

            <div className="fc-social-row" aria-label="Social links">
              <a
                href="https://www.linkedin.com/company/tedxsvit-vasad/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="TEDxSVIT on LinkedIn"
              >
                <Image
                  src="/SocialIcon/LinkdinIcon.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>

              <a
                href="https://www.instagram.com/tedxsvit?igsh=MTVmczBoMXZwZW5ldA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="TEDxSVIT on Instagram"
              >
                <Image
                  src="/SocialIcon/InstaIcon.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>

              <a
                href="https://youtube.com/@tedxsvit"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="TEDxSVIT on YouTube"
              >
                <Image
                  src="/SocialIcon/YoutubeIcon.svg"
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM BAR ============ */}
        <div className="foot-bar">
          <div className="foot-bar-left">
            <span>© 2026 TEDxSVIT — All Rights Reserved</span>
            <span className="foot-license">
              *This independent TEDx event is operated under license from TED.
            </span>
          </div>

          <button
            type="button"
            className="to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

