export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export interface Department {
  id: string;
  num: string;
  theme: "paper" | "dark";
  heading: string;
  headingEm: string;
  members: TeamMember[];
}

const member = (dept: string, slug: string, name: string, role: string): TeamMember => ({
  name,
  role,
  photo: `/team/${dept}/${slug}.webp`,
});

// Shown until a member's photo is added to public/team/core/<slug>.webp
const CORE_PLACEHOLDER = "/team/core/placeholder.svg";

export const departments: Department[] = [
  {
    id: "core-team",
    num: "01",
    theme: "dark",
    heading: "CORE",
    headingEm: "TEAM.",
    members: [
      member("core", "vipra-dave", "Vipra Dave", "Organiser"),
      member("core", "krish-patel", "Krish Patel", "Co-organiser"),
      { name: "Miraj Mistry", role: "Chief Coordinator", photo: CORE_PLACEHOLDER },
      { name: "Khushi Patel", role: "Chief Coordinator", photo: CORE_PLACEHOLDER },
    ],
  },
  {
    id: "website",
    num: "02",
    theme: "paper",
    heading: "WEBSITE",
    headingEm: "TEAM.",
    members: [
      member("website", "jwalin-patel", "Jwalin Patel", "Website"),
      member("website", "tirth", "Tirth", "Website"),
      member("website", "param", "Param", "Website"),
    ],
  },
  {
    id: "admin-logistics",
    num: "03",
    theme: "dark",
    heading: "ADMIN & LOGISTICS",
    headingEm: "TEAM.",
    members: [
      member("admin", "yug", "Yug", "Admin"),
      member("logistics", "samarth", "Samarth", "Logistics"),
      member("logistics", "apurva", "Apurva", "Logistics"),
      member("logistics", "aryan", "Aryan", "Logistics"),
      member("logistics", "hetvi", "Hetvi", "Logistics"),
      member("logistics", "tithi", "Tithi", "Logistics"),
      member("logistics", "keshvee", "Keshvee", "Logistics"),
      member("logistics", "krish-panchal", "Krish Panchal", "Logistics"),
    ],
  },
  {
    id: "design",
    num: "04",
    theme: "paper",
    heading: "GRAPHIC DESIGN",
    headingEm: "TEAM",
    members: [
      member("graphics", "meet-shah", "Meet Shah", "Graphic Design"),
      member("graphics", "shreya-deshmukh", "Shreya Deshmukh", "Graphic Design"),
      member("graphics", "agneloze", "Agneloze", "Graphic Design"),
      member("graphics", "nand", "Nand", "Graphic Design"),
    ],
  },
  {
    id: "videography",
    num: "05",
    theme: "dark",
    heading: "VIDEOGRAPHY",
    headingEm: "TEAM",
    members: [
      member("videography", "naisarg", "Naisarg", "Videography"),
      member("videography", "vishwam", "Vishwam", "Videography"),
      member("videography", "manav", "Manav", "Videography"),
      member("videography", "heer", "Heer", "Videography"),
    ],
  },
  {
    id: "editing",
    num: "06",
    theme: "paper",
    heading: "VIDEO EDITING",
    headingEm: "TEAM",
    members: [
      member("editing", "neel", "Neel", "Video Editing"),
      member("editing", "meet-makvana", "Meet Makvana", "Video Editing"),
      member("editing", "thirth", "Thirth", "Video Editing"),
    ],
  },
  {
    id: "anchoring",
    num: "07",
    theme: "dark",
    heading: "ANCHORING",
    headingEm: "TEAM",
    members: [
      member("anchoring", "avi-thakkar", "Avi Thakkar", "Anchoring"),
      member("anchoring", "krisha", "Krisha", "Anchoring"),
      member("anchoring", "freya", "Freya", "Anchoring"),
    ],
  },
  {
    id: "dance",
    num: "08",
    theme: "paper",
    heading: "DANCE",
    headingEm: "TEAM",
    members: [
      member("dance", "tejshree", "Tejshree", "Dance"),
      member("dance", "kritika", "Kritika", "Dance"),
      member("dance", "riddhi", "Riddhi", "Dance"),
    ],
  },
  {
    id: "music",
    num: "09",
    theme: "dark",
    heading: "MUSIC",
    headingEm: "TEAM",
    members: [
      member("music", "yakshit", "Yakshit", "Music"),
      member("music", "kashish", "Kashish", "Music"),
      member("music", "abdul", "Abdul", "Music"),
      member("music", "meet-barot", "Meet Barot", "Music"),
      member("music", "zinkal", "Zinkal", "Music"),
      member("music", "mahek", "Mahek", "Music"),
      member("music", "vrushabh", "Vrushabh", "Music"),
      member("music", "aarya", "Aarya", "Music"),
    ],
  },
];
