import Image from "next/image";
import Link from "next/link";
import BackToTopButton from "./BackToTopButton";
import { navLinks, socialLinks, ticketsHref } from "@/data/site";
import "@/styles/footer.css";
import config from "@/config.json";

const exploreLinks = [
  { href: "/#gallery", label: "Gallery & Moments" },
  { href: "/#FAQ", label: "Frequently Asked Questions" },
  { href: "/about#about-tedx", label: "About TEDx" },
  { href: "/about#about-tedxsvit", label: "Our Journey" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-word-wrap">
        <Link href="/" aria-label="TEDxSVIT home">
          <Image src={config.media.logo} alt="TEDxSVIT" width={490} height={82} className="foot-logo" />
        </Link>
      </div>

      <div className="footer-container">
        <div className="foot-cols">
          <div className="fc">
            <div className="fc-head">
              <b>01</b>
              <span>Edition</span>
            </div>
            <p className="fc-brand-desc">
              TEDxSVIT — Ideas Worth Spreading. An independently organized TEDx event powered
              entirely by the student community of SVIT.
            </p>
            <div className="fc-pill-badge">
              <i />
              <span>Vol.05 · Unfiltered</span>
            </div>
          </div>

          <nav className="fc" aria-label="Footer navigation">
            <div className="fc-head">
              <b>02</b>
              <span>Navigation</span>
            </div>
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <sup>{String(i + 1).padStart(2, "0")}</sup> {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={ticketsHref}>
                  <sup>{String(navLinks.length + 1).padStart(2, "0")}</sup> Get Tickets{" "}
                  <span className="arrow">↗</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="fc">
            <div className="fc-head">
              <b>03</b>
              <span>Explore</span>
            </div>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fc">
            <div className="fc-head">
              <b>04</b>
              <span>Venue &amp; Connect</span>
            </div>
            <p className="fc-copy">
              <strong>Sardar Vallabhbhai Patel Institute of Technology</strong>
              B/h. Vasad Railway Station, NH-48, Vasad, Gujarat 388306
            </p>

            <div className="fc-social-row">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label={`TEDxSVIT on ${social.label}`}
                >
                  <Image src={social.icon} alt="" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-bar">
          <div className="foot-bar-left">
            <span>© 2026 TEDxSVIT — All Rights Reserved</span>
            <span className="foot-license">
              *This independent TEDx event is operated under license from TED.
            </span>
          </div>
          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
}
