import Image from "next/image";
import Link from "next/link";
import GlassSurface from "@/components/ui/GlassSurface";
import MobileNav from "./MobileNav";
import { navLinks, ticketsHref } from "@/data/site";
import "@/styles/navbar.css";

export default function Navbar() {
  return (
    <header className="NavBar">
      <MobileNav />
      <GlassSurface width="100%" height="100%" borderRadius={24} className="glassNavbarContainer">
        <nav className="navbar-content" aria-label="Main">
          <Link href="/" className="logo" aria-label="TEDxSVIT home">
            <Image src="/brand/logo.png" alt="TEDxSVIT" width={222} height={64} priority />
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
        </nav>
      </GlassSurface>
    </header>
  );
}
