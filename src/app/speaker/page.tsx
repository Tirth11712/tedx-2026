"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import "./speaker.css";

interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  tag: string;
  talk: string;
  img: string;
  desc: string;
  meta: { label: string; val: string }[];
}

const speakers: SpeakerItem[] = [
  {
    id: "01",
    name: "Bhargsetu Sharma",
    role: "Animal Rescuer & Social Activist",
    tag: "Social Welfare",
    talk: "Voices For The Voiceless",
    img: "/Speakers/Bhargsetu.png",
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
    img: "/Speakers/Nisha.jpg",
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
    img: "/Speakers/Tarun.png",
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
    img: "/Speakers/Vikrem.jpg",
    desc: "17+ years of experience in Oil and Gas sector with industry giant L&T. 5x Winner of International Speech Contest at Club level in Toastmasters International, Winner of Evaluation Speech Contest at Division Level. Awarded Rising Star Award in Toastmasters (2021). Currently serving as President of Vadodara Toastmasters. Pursues his passion in public speaking despite a busy corporate life. Known for his impactful speeches with thought-provoking ideas.",
    meta: [
      { label: "Corporate", val: "17+ Years Leadership at L&T" },
      { label: "Toastmasters", val: "President, Vadodara Toastmasters" },
      { label: "Accolades", val: "Rising Star Award & 5x Contest Winner" },
    ],
  },
];

export default function SpeakerPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleSpeaker = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="speaker-page-root">
      <section className="sec sec--paper" id="speakers" aria-labelledby="spTitle">
        <div className="wrap">
          {/* Section Header */}
          <div className="sec-head">
            <span className="kicker">
              <b>03</b>Speakers
            </span>
            <span className="sec-line"></span>
            <span className="sec-note">04 talks — hover a row, click + to open</span>
          </div>

          {/* Page Heading */}
          <div className="speaker-title-block">
            <h1 id="spTitle">
              The <em>Lineup</em>
            </h1>
            <p className="speaker-subtitle">
              Four minds taking the stage to challenge conventions, spark dialogue, and share ideas unfiltered.
            </p>
          </div>

          {/* Speakers Accordion List */}
          <ul className="sp-list">
            {speakers.map((s, idx) => {
              const isOpen = openIdx === idx;
              return (
                <li className={`speaker ${isOpen ? "open" : ""}`} key={s.id}>
                  <button
                    type="button"
                    className="speaker-row"
                    id={`spBtn-${s.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`spPanel-${s.id}`}
                    onClick={() => toggleSpeaker(idx)}
                  >
                    <span className="s-no">{s.id}</span>
                    <span className="s-name">{s.name}</span>
                    <span className="s-info">
                      <span className="s-role">{s.role}</span>
                      <span className="s-tag">{s.tag}</span>
                    </span>
                    <span className="s-plus" aria-hidden="true">
                      +
                    </span>
                  </button>

                  <div
                    className="speaker-panel"
                    id={`spPanel-${s.id}`}
                    role="region"
                    aria-labelledby={`spBtn-${s.id}`}
                  >
                    <div className="panel-in">
                      {/* Speaker Photo */}
                      <div className="panel-photo-col">
                        <div className="panel-photo-frame">
                          <Image
                            src={s.img}
                            alt={s.name}
                            width={400}
                            height={533}
                            className="speaker-photo"
                            priority={idx === 0}
                          />
                        </div>
                      </div>

                      {/* Speaker Description and Talk Meta */}
                      <div className="panel-content-col">
                        <span className="panel-talk-badge">Talk Spotlight</span>
                        <h3 className="p-talk">{s.talk}</h3>

                        <div className="p-speaker-badge">
                          {s.name} <span>— {s.role}</span>
                        </div>

                        <p className="p-desc">{s.desc}</p>

                        <div className="p-meta">
                          {s.meta.map((m, mIdx) => (
                            <div className="p-meta-item" key={mIdx}>
                              <span className="meta-label">{m.label}</span>
                              <b>{m.val}</b>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="sp-foot">
            <i>✕</i> Talks are live, unscripted, and followed by open Q&amp;A on stage.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
