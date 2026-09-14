import Link from "next/link";
import GlassSurface from "../../Reactbits/GlassSurface/GlassSurface";
import MobileNavPopup from "./MobilePopup";
import "../styles/page.css";

export default function Navbar() {
  return (
    <>
      <div className="NavBar">
        <MobileNavPopup />
        <GlassSurface
          width="100%"
          height="100%"
          borderRadius={24}
          className="glassNavbarContainer"
        >
          <div className="navbar-content">
            <div className="logo">
              <Link href="/">
                <img src="/logoNav.png" alt="NavLogo" style={{ cursor: "pointer" }} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              <Link href="/">Home</Link>
              <Link href="/team">Team</Link>
              <Link href="/speaker">Speakers</Link>
              <Link href="/about">About</Link>
            </div>

            {/* Desktop Get Tickets Button */}
            <div className="get-tickets desktop-nav">
              <Link href="/ticketForm">
                <button className="tickets-button">Get Tickets</button>
              </Link>
            </div>
          </div>
        </GlassSurface>
      </div>
    </>
  );
}