export interface Speaker {
  id: string;
  name: string;
  role: string;
  tag: string;
  talk: string;
  img: string;
  desc: string;
  meta: { label: string; val: string }[];
}

export const speakers: Speaker[] = [
  {
    id: "01",
    name: "Bhargsetu Sharma",
    role: "Animal Rescuer & Social Activist",
    tag: "Social Welfare",
    talk: "Voices For The Voiceless",
    img: "/speakers/bhargsetu-sharma.webp",
    desc: "Has rescued more than 5000 stray animals and birds. Awarded the Raksha Mantri Padak from the Defence Ministry in 2019 and the Governor's Medal at just age 20. Invited to MTV Roadies 2019 as a Real Hero.",
    meta: [
      { label: "Recognition", val: "Raksha Mantri Padak (2019)" },
      { label: "Milestone", val: "Governor's Medal at Age 20" },
      { label: "Impact", val: "5,000+ Stray Animal Rescues" },
    ],
  },
  {
    id: "02",
    name: "Nisha Kumari",
    role: "Mountaineer & Cyclist",
    tag: "Exploration",
    talk: "Pedaling Through Continents & Peaks",
    img: "/speakers/nisha-kumari.webp",
    desc: "First woman from Vadodara to summit Mount Everest. Nisha Kumari rode approximately 16,697 km, crossing 15 countries over the course of 210 days. Cycled through India, Nepal, China, Kyrgyzstan, Uzbekistan, Kazakhstan, Russia, Latvia, Lithuania, Poland, Czech Republic, Germany, Netherlands, Belgium and France. Along the way, Nisha and her coach planted more than 1050 trees emphasising their message on environmental conservation and sustainability.",
    meta: [
      { label: "Everest Record", val: "1st Woman from Vadodara on Summit" },
      { label: "Expedition", val: "16,697 km across 15 Countries" },
      { label: "Sustainability", val: "1,050+ Native Trees Planted" },
    ],
  },
  {
    id: "03",
    name: "Tarun Barot",
    role: "Former Dy. SP & Social Worker",
    tag: "Public Service",
    talk: "Duty, Law & Humanitarian Care",
    img: "/speakers/tarun-barot.webp",
    desc: "Known as “encounter specialist”, Tarun is Gujarat Police's most talked-about officers for his high-profile cases that made national headlines. He played a major role in the arrest and encounter of underworld don and Dawood Ibrahim associate Abdul Latif - who later inspired Shah Rukh Khan’s movie Raees (2017). He led various high-profile encounters to bring down underworld gangs. Post retirement, Barot is deeply involved in social work and welfare of people. In COVID, he organised meals for 5000+ needy people for 75 consecutive days and distributed 1000+ ration kits. He has facilitated marriages of 10+ underprivileged women.",
    meta: [
      { label: "Service", val: "Dy. SP, Gujarat Police (Retd.)" },
      { label: "COVID Relief", val: "5,000+ Daily Meals for 75 Days" },
      { label: "Initiatives", val: "Community Welfare & Support" },
    ],
  },
  {
    id: "04",
    name: "Vikrem Rajgopal",
    role: "Corporate Leader & Public Speaker",
    tag: "Leadership",
    talk: "The Power of Purposeful Speech",
    img: "/speakers/vikrem-rajgopal.webp",
    desc: "17+ years of experience in Oil and Gas sector with industry giant L&T. 5x Winner of International Speech Contest at Club level in Toastmasters International, Winner of Evaluation Speech Contest at Division Level. Awarded Rising Star Award in Toastmasters (2021). Currently serving as President of Vadodara Toastmasters. Pursues his passion in public speaking despite a busy corporate life. Known for his impactful speeches with thought-provoking ideas.",
    meta: [
      { label: "Corporate", val: "17+ Years Leadership at L&T" },
      { label: "Toastmasters", val: "President, Vadodara Toastmasters" },
      { label: "Accolades", val: "Rising Star Award & 5x Contest Winner" },
    ],
  },
];
