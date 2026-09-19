"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { Speaker } from "@/data/speakers";
import Footer from "@/components/layout/Footer";
import { pastSpeakers, speakers } from "@/data/speakers";
import { useEscapeKey, useScrollLock } from "@/hooks/overlay";
import "@/styles/speaker.css";

const SWIPE_THRESHOLD = 50;

function SpeakerGrid({
  items,
  offset,
  cardRefs,
  onOpen,
}: {
  items: Speaker[];
  offset: number;
  cardRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  onOpen: (idx: number) => void;
}) {
  return (
    <ul className="sp-grid">
      {items.map((s, i) => {
        const idx = offset + i;
        return (
          <li key={s.id}>
            <button
              type="button"
              className="sp-card"
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              aria-haspopup="dialog"
              aria-label={`View details for ${s.name}`}
              onClick={() => onOpen(idx)}
            >
              <span className="sp-card-photo-frame">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(min-width: 961px) 25vw, 50vw"
                  className="sp-card-photo"
                  priority={idx < 2}
                  {...(s.blurDataURL ? { placeholder: "blur", blurDataURL: s.blurDataURL } : {})}
                />
                {s.edition && <span className="sp-card-edition">{s.edition}</span>}
                <span className="sp-card-plus" aria-hidden="true">
                  +
                </span>
              </span>
              <span className="sp-card-info">
                {!s.edition && <span className="sp-card-no">{s.id}</span>}
                <span className="sp-card-name">{s.name}</span>
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default function SpeakerPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastOpenedIdx = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const list = useMemo(() => [...speakers, ...pastSpeakers], []);
  const isOpen = activeIdx !== null;

  const closeModal = useCallback(() => {
    setActiveIdx(null);
    if (lastOpenedIdx.current !== null) cardRefs.current[lastOpenedIdx.current]?.focus();
  }, []);

  const showPrev = useCallback(
    () => setActiveIdx((prev) => (prev === null ? prev : (prev - 1 + list.length) % list.length)),
    [list.length]
  );

  const showNext = useCallback(
    () => setActiveIdx((prev) => (prev === null ? prev : (prev + 1) % list.length)),
    [list.length]
  );

  useScrollLock(isOpen);
  useEscapeKey(isOpen, closeModal);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();
    const handleArrows = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleArrows);
    return () => window.removeEventListener("keydown", handleArrows);
  }, [isOpen, showPrev, showNext]);

  const openSpeaker = (idx: number) => {
    lastOpenedIdx.current = idx;
    setActiveIdx(idx);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > SWIPE_THRESHOLD) showPrev();
    else if (diff < -SWIPE_THRESHOLD) showNext();
    touchStartX.current = null;
  };

  const active = activeIdx !== null ? list[activeIdx] : null;

  return (
    <div className="speaker-page-root">
      <div className="speaker-bg-lines" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <main className="speaker-content" id="speakers" aria-labelledby="spTitle">
        <div className="wrap">
          <div className="sec-head">
            <span className="kicker">
              <b />
              Speakers
            </span>
            <span className="sec-line" />
          </div>

          <div className="speaker-title-block">
            <h1 id="spTitle">
              Meet the <em>Speakers</em>
            </h1>
          </div>

          {speakers.length > 0 && (
            <>
              <p className="sp-section-eyebrow">TEDxSVIT 2026 Lineup</p>
              <SpeakerGrid items={speakers} offset={0} cardRefs={cardRefs} onOpen={openSpeaker} />
            </>
          )}

          {pastSpeakers.length > 0 && (
            <>
              <h2 className="sp-section-heading">Past Speakers</h2>
              <SpeakerGrid
                items={pastSpeakers}
                offset={speakers.length}
                cardRefs={cardRefs}
                onOpen={openSpeaker}
              />
            </>
          )}

          <p className="sp-foot" aria-hidden="true">
            <i>✕</i>
            <i>✕</i>
            <i>✕</i>
          </p>
        </div>
      </main>

      {active && (
        <div className="sp-modal-overlay" onClick={closeModal} data-lenis-prevent>
          <button
            type="button"
            className="sp-modal-close"
            ref={closeBtnRef}
            onClick={closeModal}
            aria-label="Close speaker details"
          >
            ×
          </button>

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
              <div className="panel-photo-col">
                <div className="panel-photo-frame">
                  <Image
                    src={active.img}
                    alt={active.name}
                    fill
                    sizes="(max-width: 960px) 300px, 340px"
                    className="speaker-photo"
                    {...(active.blurDataURL ? { placeholder: "blur", blurDataURL: active.blurDataURL } : {})}
                  />

                  {list.length > 1 && (
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
                </div>
              </div>

              <div className="panel-content-col">
                <div className="panel-topline">
                  <span className="p-tag-pill">{active.tag}</span>
                  {active.edition && <span className="p-edition-pill">TEDxSVIT {active.edition}</span>}
                </div>
                <h2 className="p-talk">{active.talk}</h2>

                <div className="p-speaker-badge">
                  {active.name} <span>— {active.role}</span>
                </div>

                <p className="p-desc">{active.desc}</p>

                <div className="p-meta">
                  {active.meta.map((m) => (
                    <div className="p-meta-item" key={m.label}>
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
