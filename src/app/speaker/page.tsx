"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import RippleBackground from "@/components/RippleBackground";
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
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openSpeaker = (idx: number) => setActiveIdx(idx);

  const closeModal = () => {
    setActiveIdx((prev) => {
      if (prev !== null) cardRefs.current[prev]?.focus();
      return null;
    });
  };

  const showPrev = () =>
    setActiveIdx((prev) => (prev === null ? prev : (prev - 1 + speakers.length) % speakers.length));

  const showNext = () =>
    setActiveIdx((prev) => (prev === null ? prev : (prev + 1) % speakers.length));

  // Lock background scroll while the modal is open
  useEffect(() => {
    if (activeIdx === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeIdx]);

  // Focus the close button whenever a new speaker's modal opens
  useEffect(() => {
    if (activeIdx !== null) closeBtnRef.current?.focus();
  }, [activeIdx]);

  // Keyboard controls: Escape to close, arrows to browse
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIdx]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (diff > threshold) showPrev();
    else if (diff < -threshold) showNext();
    touchStartX.current = null;
  };

  const active = activeIdx !== null ? speakers[activeIdx] : null;

  return (
    <div className="speaker-page-root">
      <div className="speaker-bg-ripple" aria-hidden="true">
        <RippleBackground className="speaker-bg-ripple-canvas" interactive={false} />
      </div>

      <div className="speaker-bg-lines" aria-hidden="true">
        <i></i><i></i><i></i><i></i><i></i>
      </div>

      <section className="sec sec--paper speaker-content" id="speakers" aria-labelledby="spTitle">
        <div className="wrap">
          {/* Section Header */}
          <div className="sec-head">
            <span className="kicker">
              <b></b>Speakers
            </span>
            <span className="sec-line"></span>
            <span className="sec-note"></span>
          </div>

          {/* Page Heading */}
          <div className="speaker-title-block">
            <h1 id="spTitle">
              Meet the <em>Speakers</em>
            </h1>
            <p className="speaker-subtitle">
            </p>
          </div>

          {/* Speakers Grid */}
          <ul className="sp-grid">
            {speakers.map((s, idx) => (
              <li key={s.id}>
                <button
                  type="button"
                  className="sp-card"
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  aria-haspopup="dialog"
                  aria-label={`View details for ${s.name}`}
                  onClick={() => openSpeaker(idx)}
                >
                  <span className="sp-card-photo-frame">
                    <Image
                      src={s.img}
                      alt=""
                      width={400}
                      height={533}
                      className="sp-card-photo"
                      priority={idx === 0}
                    />
                    <span className="sp-card-plus" aria-hidden="true">
                      +
                    </span>
                  </span>
                  <span className="sp-card-info">
                    <span className="sp-card-no">{s.id}</span>
                    <span className="sp-card-name">{s.name}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <p className="sp-foot">
            <i>✕</i> 
            <i>✕</i> 
            <i>✕</i> 
          </p>
        </div>
      </section>

      {active && (
        <div className="sp-modal-overlay" onClick={closeModal}>
          <button
            type="button"
            className="sp-modal-close"
            ref={closeBtnRef}
            onClick={closeModal}
            aria-label="Close speaker details"
          >
            ×
          </button>

          {speakers.length > 1 && (
            <>
              <button
                type="button"
                className="sp-modal-nav sp-modal-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous speaker"
              >
                ‹
              </button>
              <button
                type="button"
                className="sp-modal-nav sp-modal-next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next speaker"
              >
                ›
              </button>
            </>
          )}

          <div
            className="sp-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.name} — speaker details`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="panel-in">
              {/* Speaker Photo */}
              <div className="panel-photo-col">
                <div className="panel-photo-frame">
                  <Image
                    src={active.img}
                    alt={active.name}
                    width={400}
                    height={533}
                    className="speaker-photo"
                    priority
                  />
                </div>
              </div>

              {/* Speaker Description and Talk Meta */}
              <div className="panel-content-col">
                <div className="panel-topline">
                  <span className="p-tag-pill">{active.tag}</span>
                </div>
                <h3 className="p-talk">{active.talk}</h3>

                <div className="p-speaker-badge">
                  {active.name} <span>— {active.role}</span>
                </div>

                <p className="p-desc">{active.desc}</p>

                <div className="p-meta">
                  {active.meta.map((m, mIdx) => (
                    <div className="p-meta-item" key={mIdx}>
                      <span className="meta-label">{m.label}</span>
                      <b>{m.val}</b>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
