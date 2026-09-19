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

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/event-01.webp",
    alt: "A speaker mid-talk with their title slide projected behind them",
    caption: "A thought worth pausing for",
  },
  { src: "/gallery/event-02.webp", alt: "The audience seated for a talk at a past TEDxSVIT edition" },
  { src: "/gallery/event-03.webp", alt: "The house band performing on stage beside the TEDxSVIT marquee" },
  { src: "/gallery/event-04.webp", alt: "A speaker presenting beside their title slide and photo" },
  { src: "/gallery/event-05.webp", alt: "A speaker addressing the audience under a spotlight" },
  { src: "/gallery/event-06.webp", alt: "A certificate of appreciation being presented to a guest" },
  { src: "/gallery/event-07.webp", alt: "Three dancers performing beside the illuminated TEDxSVIT sign" },
  { src: "/gallery/event-08.webp", alt: "A speaker addressing the audience under a spotlight" },
  { src: "/gallery/event-09.webp", alt: "The full TEDxSVIT team and attendees gathered for a group photo outside the venue" },
];
