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

export const departments: Department[] = [
  {
    id: "core",
    num: "01",
    theme: "paper",
    heading: "CORE",
    headingEm: "TEAM",
    members: [
      member("core", "kabir-brahmbhatt", "Kabir Brahmbhatt", "Organiser"),
      member("core", "aditi-patel", "Aditi Patel", "Co-Organiser"),
      member("core", "vipra-dave", "Vipra Dave", "Chief Coordinator"),
      member("core", "dhyani-upadhyay", "Dhyani Upadhyay", "Chief Coordinator"),
    ],
  },
  {
    id: "website",
    num: "02",
    theme: "dark",
    heading: "WEBSITE",
    headingEm: "TEAM.",
    members: [
      member("website", "krish-prajapati", "Krish Prajapati", "Website"),
      member("website", "nakul-desai", "Nakul Desai", "Website"),
      member("website", "nitya-patel", "Nitya Patel", "Website"),
      member("website", "siddharth-panchal", "Siddharth Panchal", "Website"),
      member("website", "dhaval-patel", "Dhaval Patel", "Website"),
    ],
  },
  {
    id: "admin",
    num: "03",
    theme: "paper",
    heading: "ADMIN & LOGISTICS",
    headingEm: "TEAM.",
    members: [
      member("admin", "aadi-joshi", "Aadi Joshi", "Admin & Logistics"),
      member("admin", "miraj-mistry", "Miraj Mistry", "Admin & Logistics"),
      member("admin", "mishit-shah", "Mishit Shah", "Admin & Logistics"),
      member("admin", "netra-patel", "Netra Rakeshkumar Patel", "Admin & Logistics"),
      member("admin", "sriram-swaminathan", "Sriram Swaminathan", "Admin & Logistics"),
    ],
  },
  {
    id: "design",
    num: "04",
    theme: "dark",
    heading: "GRAPHIC DESIGN",
    headingEm: "TEAM",
    members: [
      member("design", "chaitanya-giri", "Chaitanya Giri", "Graphic Design"),
      member("design", "meher-rathod", "Meher Rathod", "Graphic Design"),
      member("design", "rudra-joshi", "Rudra Joshi", "Graphic Design"),
    ],
  },
  {
    id: "videography",
    num: "05",
    theme: "paper",
    heading: "VIDEOGRAPHY",
    headingEm: "TEAM",
    members: [
      member("videography", "akshita-vimawala", "Akshita Vimawala", "Videography"),
      member("videography", "vyom-patel", "Vyom Patel", "Videography"),
    ],
  },
  {
    id: "editing",
    num: "06",
    theme: "dark",
    heading: "VIDEO EDITING",
    headingEm: "TEAM",
    members: [
      member("editing", "deep-patoriya", "Deep Patoriya", "Video Editing"),
      member("editing", "parth-soni", "Parth Soni", "Video Editing"),
      member("editing", "sambhrant-shukla", "Sambhrant Shukla", "Video Editing"),
    ],
  },
  {
    id: "social",
    num: "07",
    theme: "paper",
    heading: "SOCIAL MEDIA",
    headingEm: "TEAM",
    members: [
      member("social", "krish-patel", "Krish Patel", "Social Media"),
      member("social", "malek-noor", "Malek Noor", "Social Media"),
      member("social", "rajat-haathi", "Rajat Haathi", "Social Media"),
    ],
  },
  {
    id: "anchoring",
    num: "08",
    theme: "dark",
    heading: "ANCHORING",
    headingEm: "TEAM",
    members: [
      member("anchoring", "anjali-panchal", "Anjali Panchal", "Anchoring"),
      member("anchoring", "devanshi-chaudhary", "Devanshi Chaudhary", "Anchoring"),
      member("anchoring", "shrey-shah", "Shrey Shah", "Anchoring"),
    ],
  },
  {
    id: "dance",
    num: "09",
    theme: "paper",
    heading: "DANCE",
    headingEm: "TEAM",
    members: [
      member("dance", "kavya-thakkar", "Kavya Thakkar", "Dance"),
      member("dance", "kritika-panchal", "Kritika Panchal", "Dance"),
      member("dance", "sakhi-bhagat", "Sakhi Bhagat", "Dance"),
    ],
  },
  {
    id: "music",
    num: "10",
    theme: "dark",
    heading: "MUSIC",
    headingEm: "TEAM",
    members: [
      member("music", "meet-barot", "Meet Barot", "Music"),
      member("music", "ishmael-ruzungunde", "Ishmael Tinodiwanaishe Ruzungunde", "Music"),
      member("music", "nisarg-rana", "Nisarg Vimalkumar Rana", "Music"),
      member("music", "manan-sutariya", "Manan Sutariya", "Music"),
      member("music", "mahek-doshi", "Mahek Doshi", "Music"),
      member("music", "dhruva-shah", "Dhruva Pratik Shah", "Music"),
      member("music", "harshil-dharmik", "Harshil Dharmik", "Music"),
      member("music", "yug-patel", "Yug Kalpesh Patel", "Music"),
      member("music", "samhita-gandhi", "Samhita Gandhi", "Music"),
      member("music", "shubham-panchal", "Shubhamkumar Harshadkumar Panchal", "Music"),
    ],
  },
];
