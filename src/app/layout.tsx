import type { Metadata, Viewport } from "next";
import {
  Host_Grotesk,
  Covered_By_Your_Grace,
  Patrick_Hand_SC,
  Rock_Salt,
  Permanent_Marker,
  Kalam,
  Caveat,
  Gloria_Hallelujah,
  Schoolbell,
  Just_Another_Hand,
  Playfair_Display,
  Fraunces,
} from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-host-grotesk",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-caption",
});

const patrickHandSC = Patrick_Hand_SC({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-patrick-hand",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-rock-salt",
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-permanent-marker",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-kalam",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-caveat",
});

const gloriaHallelujah = Gloria_Hallelujah({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-gloria-hallelujah",
});

const schoolbell = Schoolbell({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-schoolbell",
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-just-another-hand",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  display: "swap",
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: {
    default: "TEDxSVIT",
    template: "%s — TEDxSVIT",
  },
  description: "Official website for TEDxSVIT, an independently organized TEDx event at SVIT, Vasad.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${coveredByYourGrace.variable} ${patrickHandSC.variable} ${rockSalt.variable} ${permanentMarker.variable} ${kalam.variable} ${caveat.variable} ${gloriaHallelujah.variable} ${schoolbell.variable} ${justAnotherHand.variable} ${playfairDisplay.variable} ${fraunces.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <Navbar />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
