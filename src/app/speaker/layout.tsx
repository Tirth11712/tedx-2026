import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speakers",
  description: "Meet the speakers taking the TEDxSVIT stage.",
};

export default function SpeakerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
