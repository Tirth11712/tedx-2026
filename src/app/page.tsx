import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/home/FAQs";
import HeroRippleVideo from "@/components/home/HeroRippleVideo";
import Moodboard from "@/components/home/Moodboard";
import Footer from "@/components/layout/Footer";
import { galleryItems, ticketsHref } from "@/data/site";
import "@/styles/home.css";

export default function Home() {
  return (
    <>
      <div className="globalRippleBg" aria-hidden="true">
        <HeroRippleVideo
          videoClassName="globalRippleVideo"
          canvasClassName="globalRippleCanvas"
          canvasReadyClassName="globalRippleCanvasReady"
        />
        <div className="globalRippleOverlay" />
      </div>

      <main className="mainpage">
        <section className="heroSection">
          <div className="logoTextButtonContainer">
            <h1 className="logoText">
              <Image src="/brand/wordmark.svg" width={1129} height={524} alt="The Ripple Effect" priority />
            </h1>
            <p className="heroTagline">It starts with one</p>
            <div className="addressText">
              <p>October 10, 2026</p>
              <p>Architecture Auditorium SVIT Campus, Vasad</p>
            </div>
            <div className="getTicketBtn">
              <Link href={ticketsHref}>Get Tickets</Link>
            </div>
          </div>
        </section>

        <section className="gallerySection" id="gallery" aria-label="Gallery">
          <Moodboard items={galleryItems} />
        </section>

        <div className="FAQContainer">
          <FAQs />
        </div>
      </main>

      <Footer />
    </>
  );
}
