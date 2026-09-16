'use client'
import Image from "next/image";
import "../styles/page.css";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Link from "next/link";
import FluidMosaic from "@/components/FluidMosaic";
import HeroRippleVideo from "@/components/HeroRippleVideo";


export default function Home() {
  const images = [
    '/Bento/Col1Row1.png',
    '/Bento/Col1Row2.png',
    '/Bento/Col2Row1.png',
    '/Bento/Col2Row2.png',
    '/Bento/Col3.png',
    '/Bento/Col4Row1.png',
    '/Bento/Col4Row2.png',
    '/Bento/Col5Row1.png',
  ];
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
      <div className="mainpage">
      {/* ------------------------Navbar-------------------------- */}
      {/* <Navbar /> */}

      {/* ------------------------Hero Section-------------------------- */}
      <div className="heroSection">
        <div className="logoTextButtonContainer">
          <div className="logoText">
            <Image
              src="/text2.svg"
              width={1000}
              height={600}
              alt="Picture of the author"
            />
          </div>
          <p className="heroTagline">One Thing Leads to Another</p>
          <div className="addressText">
            <p>September 10, 2026</p>
            <p>Architecture Auditorium SVIT Campus, Vasad</p>
          </div>
          <div className="getTicketBtn">
            <Link href="/ticketForm">
              <button  style={{ color: "white"}}>Get Tickets</button>
            </Link>

          </div>
        </div>
      </div>
      {/* ------------------------Samtavam Meaning Text-------------------------- */}
      <div className="samatavamMeaning">
        {/* <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={10}
          blurStrength={10}
        > */}
        <p className="DiscriptionPara">
          {/*Samatvam means equanimity - a balanced state of mind that remains calm,
          undisturbed, and impartial in success and failure, pleasure and pain,
          gain and loss.*/}
        </p>
          {/* Samatvam means equanimity a balanced state of mind that remains calm,
          undisturbed, and impartial in success and failure, pleasure and pain,
          gain and loss. */}
        {/* </ScrollReveal> */}


      </div>
      <FluidMosaic images={images}/>
      {/* ------------------------Frequently Asked Questions-------------------------- */}
      <div className="FAQContainer">
        <FAQs />
      </div>
      <Footer />
    </div>
    </>
  );
}
