import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Tickets",
  description: "Register for TEDxSVIT 2026.",
};

export default function TicketsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
