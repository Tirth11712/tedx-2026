import type { Metadata, Viewport } from "next";
import {
  Host_Grotesk,
  Covered_By_Your_Grace,
  Patrick_Hand_SC,
  Rock_Salt,
  Permanent_Marker,
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
      className={`${hostGrotesk.variable} ${coveredByYourGrace.variable} ${patrickHandSC.variable} ${rockSalt.variable} ${permanentMarker.variable}`}
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
