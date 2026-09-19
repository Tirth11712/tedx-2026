export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/speaker", label: "Speakers" },
  { href: "/about", label: "About" },
] as const;

export const ticketsHref = "/ticketForm";

export const socialLinks = [
  {
    href: "https://www.linkedin.com/company/tedxsvit-vasad/",
    label: "LinkedIn",
    icon: "/icons/linkedin.svg",
  },
  {
    href: "https://www.instagram.com/tedxsvit",
    label: "Instagram",
    icon: "/icons/instagram.svg",
  },
  {
    href: "https://youtube.com/@tedxsvit",
    label: "YouTube",
    icon: "/icons/youtube.svg",
  },
] as const;

/** CSS variable name for the caption's handwritten font, set per photo in layout.tsx. */
export type CaptionFont =
  | "--font-caption"
  | "--font-patrick-hand"
  | "--font-rock-salt"
  | "--font-permanent-marker"
  | "--font-kalam"
  | "--font-caveat"
  | "--font-gloria-hallelujah"
  | "--font-schoolbell"
  | "--font-just-another-hand";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  captionFont?: CaptionFont;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/event-01.webp",
    alt: "A speaker mid-talk with their title slide projected behind them",
    caption: "A thought worth pausing for",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-02.webp",
    alt: "The audience seated for a talk at a past TEDxSVIT edition",
    caption: "Every idea needs someone to hear it",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-03.webp",
    alt: "The house band performing on stage beside the TEDxSVIT marquee",
    caption: "Perfect Interval",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-04.webp",
    alt: "A speaker presenting beside their title slide and photo",
    caption: "Stories that deserve the spotlight",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-05.webp",
    alt: "A speaker addressing the audience under a spotlight",
    caption: "Ideas take shape when shared",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-06.webp",
    alt: "A certificate of appreciation being presented to a guest",
    caption: "More than words on a stage",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-07.webp",
    alt: "Three dancers performing beside the illuminated TEDxSVIT sign",
    caption: "Graceful Begining",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-08.webp",
    alt: "A speaker addressing the audience under a spotlight",
    caption: "Some conversations stay with you",
    captionFont: "--font-caveat",
  },
  {
    src: "/gallery/event-09.webp",
    alt: "The full TEDxSVIT team and attendees gathered for a group photo outside the venue",
    caption: "What makes Tedx worth it",
    captionFont: "--font-caveat",
  },
];
