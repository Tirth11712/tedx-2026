"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GlassSurface from "@/components/ui/GlassSurface";
import MobileNav, { MobileNavTrigger } from "./MobileNav";
import { navLinks, ticketsHref } from "@/data/site";
import "@/styles/navbar.css";
import config from "@/config.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <header className="NavBar">
      <GlassSurface width="100%" height="100%" borderRadius={24} className="glassNavbarContainer">
        <nav className="navbar-content" aria-label="Main">
          <Link href="/" className="logo" aria-label="TEDxSVIT home">
            <Image src={config.media.logo} alt="TEDxSVIT" width={980} height={158} priority />
          </Link>

          <div className="nav-links desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <Link href={ticketsHref} className="tickets-button desktop-nav">
            Get Tickets
          </Link>

          <MobileNavTrigger isOpen={isOpen} onToggle={toggle} />
        </nav>
      </GlassSurface>

      <MobileNav isOpen={isOpen} onClose={close} />
    </header>
  );
}
