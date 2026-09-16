import Image from "next/image";
import Link from "next/link";
import FAQs from "@/components/home/FAQs";
import FluidMosaic from "@/components/home/FluidMosaic";
import HeroRippleVideo from "@/components/home/HeroRippleVideo";
import Footer from "@/components/layout/Footer";
import { galleryImages, ticketsHref } from "@/data/site";
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
              <Image src="/brand/wordmark.svg" width={1129} height={524} alt="TEDxSVIT" priority />
            </h1>
            <p className="heroTagline">One Thing Leads to Another</p>
            <div className="addressText">
              <p>September 10, 2026</p>
              <p>Architecture Auditorium SVIT Campus, Vasad</p>
            </div>
            <div className="getTicketBtn">
              <Link href={ticketsHref}>Get Tickets</Link>
            </div>
          </div>
        </section>

        <section className="gallerySection" id="gallery" aria-label="Gallery">
          <FluidMosaic images={galleryImages} />
        </section>

        <div className="FAQContainer">
          <FAQs />
        </div>
      </main>

      <Footer />
    </>
  );
}
