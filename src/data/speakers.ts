export interface Speaker {
  id: string;
  name: string;
  role: string;
  tag: string;
  talk: string;
  img: string;
  /** Tiny base64 blur placeholder shown while the real photo loads. */
  blurDataURL?: string;
  desc: string;
  meta: { label: string; val: string }[];
  /** Edition year, set only for past speakers. */
  edition?: string;
}

/** Confirmed speakers for the upcoming TEDxSVIT 2026 edition. */
export const speakers: Speaker[] = [
  {
    id: "2026-01",
    name: "Tushar Sanghavi",
    role: "Chairman, Silkflex India Limited",
    tag: "Business | Entrepreneurship",
    talk: "A Journey of Curiosity, Courage, and Conviction",
    img: "/speakers/current/tushar-sanghvi.webp",
    desc: "Tushar Sanghavi's journey is a story of curiosity, courage, and entrepreneurship. Starting from a simple sales job while managing financial challenges, he identified an opportunity to bring an international brand to India and eventually built Silkflex India Limited into a successful enterprise. After years of importing and distributing products, he is now moving toward manufacturing in Gujarat, turning an opportunity into a lasting legacy and inspiring students to look beyond conventional career paths.",
    meta: [
      { label: "Business", val: "Chairman, Silkflex India Limited" },
      { label: "Journey", val: "From Sales Professional to Entrepreneur & Industry Leader" },
      { label: "Expertise", val: "40+ years of industrial experience" },
      { label: "Key Themes", val: "Entrepreneurship • Business Expansion • Manufacturing • Strategic Growth" },
    ],
  },
  {
    id: "2026-02",
    name: "Urmi Mehta",
    role: "Author, Therapist & Counsellor",
    tag: "Wellness | Author & Therapist",
    talk: "Healing Through Words and Energy",
    img: "/speakers/current/urmi-mehta.webp",
    desc: "Urmi Mehta is an experienced energy healing practitioner and teacher specializing in hypnotherapy, graphology, numerology, and other healing modalities. With 9 years of experience, she helps people explore emotions, self-awareness, and inner transformation. She is also the author of Fatal Love – A Love Undone, a mystery exploring the complexities of human emotions. A dedicated mother and lifelong learner, Urmi believes that the intention behind every beginning shapes its outcome.",
    meta: [
      { label: "Wellness", val: "Professional Hypnotherapist & Counsellor" },
      { label: "Journey", val: "From Personal Expression to Published Author & Full-Time Mother" },
      { label: "Expertise", val: "9+ years of experience" },
      { label: "Key Themes", val: "Complex Emotions • Suspense Fiction • Emotional Healing • Graphology" },
    ],
  },
  {
    id: "2026-03",
    name: "Shahbaj Mansuri",
    role: "Strength & Conditioning Coach",
    tag: "Sports | Strength & Conditioning",
    talk: "Elevating Elite Cricketing Fitness",
    img: "/speakers/placeholder.svg",
    desc: "A professional cricket Strength & Conditioning Coach associated with BCA and CAM, with experience as a trainer for the India U-19 national cricket team. He specializes in youth athletic development, fitness testing, endurance, injury prevention, and customized training programs to enhance players' performance and durability.",
    meta: [
      { label: "Domestic Associations", val: "Baroda Cricket Association, Mizoram Cricket Association" },
      { label: "National Duty", val: "Trainer, India Under-19 Cricket Team" },
      { label: "Specialization", val: "Strength & Conditioning, Injury Prevention & Athletic Testing" },
    ],
  },
  {
    id: "2026-04",
    name: "Kabir Brahmbhatt",
    role: "Engineering Student & PR Leader",
    tag: "Student Leadership | Communications",
    talk: "Finding Your Signal Amid the Noise",
    img: "/speakers/current/kabir-brahmbhatt.webp",
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADQAQCdASoMABAAA4BaJZQAApyr2XirEAD+o3wSRwcQHhnikxpYYnuXUuMN6vIj5Fy9K3R+c/PrYJN24c6+Jy5mcy0ahFk1+kQ/xjY404YD39S9wIuUCvvHC34Q1QFFAfAAAA==",
    desc: "Engineering Student | TEDx Core Team Member | TEDx Organizer | Toastmasters PR Leader | Public Speaker | Designer | Photographer | Community Builder. Kabir's work spans leadership, public relations, event management, communication, design, photography, and community building. Through TEDx and Toastmasters, he has developed experience in leading teams, organizing events, building communities, and engaging audiences. His journey also focuses on student leadership, personal growth, navigating uncertainty, and finding direction amid competing expectations and distractions.",
    meta: [
      { label: "Role", val: "Engineering Student" },
      { label: "Journey", val: "From Academic Uncertainties to Youth Leadership & Community Building" },
      { label: "Expertise", val: "2 Consecutive Years Organizer of TEDx at SVIT" },
      {
        label: "Key Themes",
        val: "Youth Leadership • Public Relations & Communication • Community Building • Finding Purpose & Direction",
      },
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
    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADQAQCdASoMAAwAA4BaJbACdADbFPAwAAD+6lTVG6gdLdWa2cqGL3uKH1b8YNgppEIZRawNpdWaJA8rhzw1QPWB+ciG8VO9BYvLbqFwQVmRZ+51r9aF5zgM0ByRQ4lg6zAAAA==",
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
    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoMAAwAA4BaJYgC7AYs3bHtfCdAAP5P8NPXzAfv2VzRnUqFL973ZcpP1UjRQVJJ+r5D/ftpxbaPMTjzSthdOcqP8jrGo1PO1Jik0DbS8R+aHFYOtrcVpAQAAAA=",
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
    blurDataURL: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoMAAYAA4BaJaACdAECpkaZtoAA/skXSThUanW9uqa4mPkq+80crbD6KLAPCpAVUkRwNDHlDyAAAA==",
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
    blurDataURL: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAwAgCdASoMAAkAA4BaJYgCdAYpRzF3fxBoAADOPkvG20GPig5Wj2klP1ukcx39uhLhO4mNln1zlGxxpYTPtwcceyB/RgF/jz9nTDRGwWX9gAAA",
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
    blurDataURL: "data:image/webp;base64,UklGRpYAAABXRUJQVlA4IIoAAAAwBACdASoMABUAPu1iqU2ppaOiMAgBMB2JQBdgMYYcC0hDyzMX0+L4mEAA/t2h+9/DNFJ3aiAei9X0glLgCzhUrGW9QkpMPfRG4vlYUmkn8o0wtH3dXn6AwWqfQsOT2oODd6rmBOeXUoSNc3371wWRMGjz/UFu0tbH6jk+/pTAj0PdyWJNxThqMAA=",
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
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoMABAAA4BaJbACdAEOgrehQ7A4AM4/Y+kwt33A8feVhY/N5Hzg5Ng62l2utg+ySDHdzvt2AgvO1IYNDkhmuN/C7HaLNMtnMJ5rGrtNunurYccUra//zZAA",
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
    blurDataURL: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoMAAwAA4BaJQBOgBukTPOoFzAA/vSOudZRhu0kziH3Od5jqKCw/d53R4OpFjZXlZRLZEn8qNAK/GwUKIAAAA==",
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
    blurDataURL: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAQCdASoMAAsAA4BaJYgCw7DZgmngAP70tK+3ohjHKP5i6P2/0FfC9N84GMliyDMb4i7Doh/ItcpHNNRHOXK5Jpu3AIKAAAA=",
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
    blurDataURL: "data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACQAQCdASoMAAgAA4BaJZwAAl07HJAA/lQ9qVS1ojUQo6JsENg6O/jTSj99KEublKP0qlHut/X3wAAA",
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
    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4IF4AAAAQAgCdASoMAAwAA4BaJYwCdAELzE4VbR4AAP7f/0w9uKRq6VDI5T1E95JKj+1ONxjisO2VFfKkfOreBtPZrp6/it4R2Q6Vcmg4LaHcY4o+gpdIF+U+AoPcWCvG6YAA",
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
    blurDataURL: "data:image/webp;base64,UklGRogAAABXRUJQVlA4IHwAAAAwBACdASoMABMAPu1iqU2ppaQiMAgBMB2JQBOmUAS2onG0qWDK9scVuAAA/rlLpnY0NsbGlV/GEO4EPf5/45JAKxwBsrzhV3W/cLvUcIrUJbIoBai0F3DAT1o/EOuJEH6RIA4+rHjtDGndHMHdE/zfTBPBkSdUBQ/4fawA",
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
    blurDataURL: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAAAQAgCdASoMAAsAA4BaJbACdAEWmXxOp6XgAP7x3yStfEr2xpIHigdXIYGJ/yVmEPh8y2XsDP63WgvDDX2vDtImBdZvrQkpTwefSvt/sht2++sQAAA=",
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
    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAAAQAgCdASoMAA0AA4BaJZQCw7EWmDXABfHgAP7wOPIn9h/7Q7APjgPTo80bmiI3FN0BEriO8aUc1xsRtkZ/tRYb8BTFKpOyZnyDLunFJivgS+dmO7axjAAA",
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
    blurDataURL: "data:image/webp;base64,UklGRnQAAABXRUJQVlA4IGgAAABQAgCdASoMAA8AA4BaJaACdAECpX0z2WSWfCgA/gt9HzoDz73dpyItyGRS7SD8PJbcWVP12nJgxnqK+oJ6/shOMEq4CIYYByd1so41F3VNhOzjqIVHtTftVNE3zWNTo6K2+M6S0ZgAAA==",
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
    blurDataURL: "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAABwAgCdASoMAAwAA4BaJbACdAYvX2WOfPKZS5jAAP7we4WjY/zYZhi4pzCG18AvB3HeN7vwWskqTHjpSNi/tXcgWV4Fns3K8Lk4jQNOOCDkb4bJ76nxG5neAwK+caZWfhOIAAAA",
    desc: "Criminal psychologist specialising in the study of criminal behaviour, psychology, and related social factors. A professional voice in understanding the psychological dimensions of crime and human behaviour.",
    meta: [
      { label: "Specialisation", val: "Criminal Behaviour & Psychology" },
      { label: "Focus", val: "Social Factors in Crime" },
      { label: "Expertise", val: "Psychology of Human Behaviour" },
    ],
    edition: "2023",
  },
];
