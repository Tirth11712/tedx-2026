export interface Speaker {
  id: string;
  name: string;
  role: string;
  tag: string;
  talk: string;
  img: string;
  desc: string;
  meta: { label: string; val: string }[];
  /** Edition year, set only for past speakers. */
  edition?: string;
}

/** Confirmed speakers for the upcoming TEDxSVIT 2026 edition. */
export const speakers: Speaker[] = [
  {
    id: "2026-01",
    name: "Tushar Sanghvi",
    role: "Chairman, Silkflex India Limited",
    tag: "Business | Entrepreneurship",
    talk: "A Journey of Curiosity, Courage, and Conviction",
    img: "/speakers/placeholder.svg",
    desc: "Even while navigating financial debts and working a simple sales job, Tushar Sanghvi's curious mind led him to see an opportunity where others might have seen just another job. What began as a sales career soon transformed into a journey of bringing an international brand and its franchise to India, eventually building Silkflex India Limited into a successful enterprise. His journey is one of curiosity, courage, and conviction—of taking an opportunity, believing in its potential, and turning it into a legacy. Today, having built a business around importing and distributing products, Tushar is taking the next leap by moving towards manufacturing them within Gujarat itself. His story offers students a perspective on entrepreneurship beyond conventional startup success: sometimes, the biggest opportunities begin with a curious mind, a willingness to take risks, and the determination to build something that lasts.",
    meta: [
      { label: "Business", val: "Chairman, Silkflex India Limited" },
      { label: "Journey", val: "From Sales Professional to Entrepreneur & Industry Leader" },
      { label: "Expertise", val: "20+ years of industrial experience" },
      { label: "Key Themes", val: "Entrepreneurship • Business Expansion • Manufacturing • Strategic Growth" },
    ],
  },
  {
    id: "2026-02",
    name: "Urmi Mehta",
    role: "Psychologist",
    tag: "Psychology",
    talk: "Psychologist",
    img: "/speakers/placeholder.svg",
    desc: "A psychologist joining the TEDxSVIT 2026 stage to share insights from their field.",
    meta: [
      { label: "Focus", val: "Psychology" },
      { label: "Edition", val: "TEDxSVIT 2026" },
      { label: "Bio", val: "Full Details Coming Soon" },
    ],
  },
  {
    id: "2026-03",
    name: "Shahbaj Mansuri",
    role: "U19 Indian Cricket Coach",
    tag: "Sports",
    talk: "U19 Indian Cricket Coach",
    img: "/speakers/placeholder.svg",
    desc: "Coach of the U19 Indian cricket team, joining the TEDxSVIT 2026 stage to share insights from the sport.",
    meta: [
      { label: "Role", val: "U19 Indian Cricket Coach" },
      { label: "Edition", val: "TEDxSVIT 2026" },
      { label: "Bio", val: "Full Details Coming Soon" },
    ],
  },
  {
    id: "2026-04",
    name: "Kabir Brahmbhatt",
    role: "TEDxSVIT Organiser",
    tag: "College Life",
    talk: "College Life",
    img: "/team/core/kabir-brahmbhatt.webp",
    desc: "TEDxSVIT's own Organiser, taking the stage to share his perspective on college life.",
    meta: [
      { label: "Topic", val: "College Life" },
      { label: "Role", val: "TEDxSVIT Organiser" },
      { label: "Edition", val: "TEDxSVIT 2026" },
    ],
  },
];

export const pastSpeakers: Speaker[] = [
  // ---- TEDxSVIT 2025 ----
  {
    id: "2025-01",
    name: "Nisha Kumari",
    role: "Mountaineer & Cyclist",
    tag: "Exploration",
    talk: "Pedaling Through Continents & Peaks",
    img: "/speakers/past/nisha-kumari.webp",
    desc: "First woman from Vadodara to summit Mount Everest. Nisha Kumari rode approximately 16,697 km, crossing 15 countries over the course of 210 days. Cycled through India, Nepal, China, Kyrgyzstan, Uzbekistan, Kazakhstan, Russia, Latvia, Lithuania, Poland, Czech Republic, Germany, Netherlands, Belgium and France. Along the way, Nisha and her coach planted more than 1050 trees emphasising their message on environmental conservation and sustainability.",
    meta: [
      { label: "Everest Record", val: "1st Woman from Vadodara on Summit" },
      { label: "Expedition", val: "16,697 km across 15 Countries" },
      { label: "Sustainability", val: "1,050+ Native Trees Planted" },
    ],
    edition: "2025",
  },
  {
    id: "2025-02",
    name: "Bhargsetu Sharma",
    role: "Animal Rescuer & Social Activist",
    tag: "Social Welfare",
    talk: "Voices For The Voiceless",
    img: "/speakers/past/bhargsetu-sharma.webp",
    desc: "Has rescued more than 5000 stray animals and birds. Awarded the Raksha Mantri Padak from the Defence Ministry in 2019 and the Governor's Medal at just age 20. Invited to MTV Roadies 2019 as a Real Hero.",
    meta: [
      { label: "Recognition", val: "Raksha Mantri Padak (2019)" },
      { label: "Milestone", val: "Governor's Medal at Age 20" },
      { label: "Impact", val: "5,000+ Stray Animal Rescues" },
    ],
    edition: "2025",
  },
  {
    id: "2025-03",
    name: "Vikrem Rajagopal",
    role: "Corporate Leader & Public Speaker",
    tag: "Leadership",
    talk: "The Power of Purposeful Speech",
    img: "/speakers/past/vikrem-rajagopal.webp",
    desc: "17+ years of experience in Oil and Gas sector with industry giant L&T. 5x Winner of International Speech Contest at Club level in Toastmasters International, Winner of Evaluation Speech Contest at Division Level. Awarded Rising Star Award in Toastmasters (2021). Currently serving as President of Vadodara Toastmasters. Pursues his passion in public speaking despite a busy corporate life. Known for his impactful speeches with thought-provoking ideas.",
    meta: [
      { label: "Corporate", val: "17+ Years Leadership at L&T" },
      { label: "Toastmasters", val: "President, Vadodara Toastmasters" },
      { label: "Accolades", val: "Rising Star Award & 5x Contest Winner" },
    ],
    edition: "2025",
  },
  {
    id: "2025-04",
    name: "Tarun Barot",
    role: "Former Dy. SP & Social Worker",
    tag: "Public Service",
    talk: "Duty, Law & Humanitarian Care",
    img: "/speakers/past/tarun-barot.webp",
    desc: "Known as “encounter specialist”, Tarun is Gujarat Police's most talked-about officers for his high-profile cases that made national headlines. He played a major role in the arrest and encounter of underworld don and Dawood Ibrahim associate Abdul Latif - who later inspired Shah Rukh Khan’s movie Raees (2017). He led various high-profile encounters to bring down underworld gangs. Post retirement, Barot is deeply involved in social work and welfare of people. In COVID, he organised meals for 5000+ needy people for 75 consecutive days and distributed 1000+ ration kits. He has facilitated marriages of 10+ underprivileged women.",
    meta: [
      { label: "Service", val: "Dy. SP, Gujarat Police (Retd.)" },
      { label: "COVID Relief", val: "5,000+ Daily Meals for 75 Days" },
      { label: "Initiatives", val: "Community Welfare & Support" },
    ],
    edition: "2025",
  },

  // ---- TEDxSVIT 2024 ----
  {
    id: "2024-01",
    name: "Ishika Thite",
    role: "Founder, The Dojo MMA & Fitness Gym",
    tag: "Sports",
    talk: "Gujarat's First Professional MMA Fighter",
    img: "/speakers/past/ishika-thite.webp",
    desc: "Gujarat's first professional MMA fighter and former national champion. Founder of The Dojo MMA & Fitness Gym, dedicated to training and empowering aspiring athletes.",
    meta: [
      { label: "Milestone", val: "Gujarat's First Professional MMA Fighter" },
      { label: "Title", val: "Former National Champion" },
      { label: "Founder", val: "The Dojo MMA & Fitness Gym" },
    ],
    edition: "2024",
  },
  {
    id: "2024-02",
    name: "Saakshar Duggal",
    role: "Multiple-Time TEDx Speaker",
    tag: "Technology & Law",
    talk: "Cybersecurity & AI Law Expert",
    img: "/speakers/past/saakshar-duggal.webp",
    desc: "A cybersecurity and AI law expert with expertise at the intersection of technology, law, and digital security. A multiple-time TEDx speaker, sharing insights on emerging technologies and their impact on society.",
    meta: [
      { label: "Expertise", val: "Cybersecurity & AI Law" },
      { label: "Focus", val: "Technology, Law & Digital Security" },
      { label: "Speaking", val: "Multiple-Time TEDx Speaker" },
    ],
    edition: "2024",
  },
  {
    id: "2024-03",
    name: "Sanjay Raval",
    role: "Entrepreneur & Philanthropist",
    tag: "Personal Development",
    talk: "Motivational Speaker & Author",
    img: "/speakers/past/sanjay-raval.webp",
    desc: "A renowned Gujarati motivational speaker, author, entrepreneur, and philanthropist known for his work in personality development and fearless living.",
    meta: [
      { label: "Recognition", val: "Renowned Gujarati Motivational Speaker" },
      { label: "Roles", val: "Author, Entrepreneur & Philanthropist" },
      { label: "Focus", val: "Personality Development & Fearless Living" },
    ],
    edition: "2024",
  },
  {
    id: "2024-04",
    name: "Shrenik Shah",
    role: "Patient Ambassador, Indian Cancer Society",
    tag: "Health & Resilience",
    talk: "Cancer Survivor & Global Speaker",
    img: "/speakers/past/shrenik-shah.webp",
    desc: "A stage IV vocal-cord cancer survivor, global speaker, and leadership voice. A Patient Ambassador with the Indian Cancer Society, he has delivered talks and worked extensively with cancer support communities worldwide.",
    meta: [
      { label: "Journey", val: "Stage IV Vocal-Cord Cancer Survivor" },
      { label: "Role", val: "Patient Ambassador, Indian Cancer Society" },
      { label: "Impact", val: "Cancer Support Communities Worldwide" },
    ],
    edition: "2024",
  },
  {
    id: "2024-05",
    name: "Nikhil Parmar",
    role: "Startup Strategist & Founder Advisor",
    tag: "Startups & Investment",
    talk: "Investor & Entrepreneur",
    img: "/speakers/past/nikhil-parmar.webp",
    desc: "An investor and entrepreneur with experience in startups, business strategy, and emerging ventures. Known for supporting promising ideas and working closely with founders to build and scale businesses.",
    meta: [
      { label: "Focus", val: "Startups & Business Strategy" },
      { label: "Role", val: "Investor & Entrepreneur" },
      { label: "Approach", val: "Working Closely with Founders to Scale" },
    ],
    edition: "2024",
  },
  {
    id: "2024-06",
    name: "Krunal Brahmbhatt",
    role: "Siemens Energy — 25+ Years in Sales & Strategy",
    tag: "Business Leadership",
    talk: "Senior Business Leader",
    img: "/speakers/past/krunal-brahmbhatt.webp",
    desc: "A senior business leader at Siemens Energy with over 25 years of professional experience in sales, business development, and strategic leadership.",
    meta: [
      { label: "Position", val: "Senior Leader, Siemens Energy" },
      { label: "Experience", val: "25+ Years in Sales & Strategy" },
      { label: "Focus", val: "Business Development & Leadership" },
    ],
    edition: "2024",
  },

  // ---- TEDxSVIT 2023 ----
  {
    id: "2023-01",
    name: "Manvendra Singh Gohil",
    role: "Former Maharaja of Rajpipla",
    tag: "Social Advocacy",
    talk: "LGBTQ+ Rights Activist",
    img: "/speakers/past/manvendra-singh-gohil.webp",
    desc: "Former Maharaja of Rajpipla and prominent LGBT activist advocating for LGBTQ+ rights and social acceptance. A public figure known for using personal experiences and public platforms to address inclusion and equality.",
    meta: [
      { label: "Heritage", val: "Former Maharaja of Rajpipla" },
      { label: "Advocacy", val: "LGBTQ+ Rights & Social Acceptance" },
      { label: "Platform", val: "International Public Figure on Inclusion" },
    ],
    edition: "2023",
  },
  {
    id: "2023-02",
    name: "Aniket Pandya",
    role: "Founder, Aniradichita Films",
    tag: "Performing Arts",
    talk: "Theatre Artist & Filmmaker",
    img: "/speakers/past/aniket-pandya.webp",
    desc: "Theatre artist and founder of Aniradichita Films, working across theatre and independent filmmaking. Known for creative storytelling and contributions to the performing arts and film space.",
    meta: [
      { label: "Founder", val: "Aniradichita Films" },
      { label: "Craft", val: "Theatre & Independent Filmmaking" },
      { label: "Focus", val: "Creative Storytelling" },
    ],
    edition: "2023",
  },
  {
    id: "2023-03",
    name: "Saurabh Mangrulkar",
    role: "Founder, EventBeep",
    tag: "Entrepreneurship",
    talk: "Entrepreneur & Shark Tank India Founder",
    img: "/speakers/past/saurabh-mangrulkar.webp",
    desc: "Entrepreneur and founder of EventBeep, a platform focused on student communities, events, and opportunities. Featured on Shark Tank India for the EventBeep venture.",
    meta: [
      { label: "Founder", val: "EventBeep" },
      { label: "Focus", val: "Student Communities & Opportunities" },
      { label: "Recognition", val: "Featured on Shark Tank India" },
    ],
    edition: "2023",
  },
  {
    id: "2023-04",
    name: "RJ Mohini",
    role: "On-Air Entertainer & Broadcaster",
    tag: "Media & Entertainment",
    talk: "Radio Jockey",
    img: "/speakers/past/rj-mohini.webp",
    desc: "Radio Jockey, known for engaging audiences through radio entertainment, conversations, and on-air content. A familiar voice in radio with a career centred around communication and audience engagement.",
    meta: [
      { label: "Craft", val: "Radio Jockey" },
      { label: "Focus", val: "On-Air Entertainment & Conversation" },
      { label: "Career", val: "Communication & Audience Engagement" },
    ],
    edition: "2023",
  },
  {
    id: "2023-05",
    name: "Dr. Mahesh Tripathi",
    role: "Specialist in Criminal Behaviour & Psychology",
    tag: "Psychology",
    talk: "Criminal Psychologist",
    img: "/speakers/past/mahesh-tripathi.webp",
    desc: "Criminal psychologist specialising in the study of criminal behaviour, psychology, and related social factors. A professional voice in understanding the psychological dimensions of crime and human behaviour.",
    meta: [
      { label: "Specialisation", val: "Criminal Behaviour & Psychology" },
      { label: "Focus", val: "Social Factors in Crime" },
      { label: "Expertise", val: "Psychology of Human Behaviour" },
    ],
    edition: "2023",
  },
];
