import Link from "next/link";
import Footer from "@/components/Footer";
import "@/styles/about.css";

export const metadata = {
  title: "About — TEDxSVIT",
  description: "The story, manifesto, and legacy behind TEDxSVIT — an independently organized TED event run by students.",
};

export default function About() {
  return (
    <div className="about-page-root">
      {/* ============ HERO SECTION ============ */}
      <section className="about-hero" aria-label="About TEDxSVIT Hero">
        <div className="about-hero-lines" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* Decorative rotating ✕ */}
        <div className="about-hero-x" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <g fill="none" stroke="#E62B1F" strokeWidth="1.6">
              <rect
                x="45"
                y="-14"
                width="10"
                height="128"
                transform="rotate(45 50 50)"
              />
              <rect
                x="45"
                y="-14"
                width="10"
                height="128"
                transform="rotate(-45 50 50)"
              />
            </g>
          </svg>
        </div>

        <div className="wrap about-hero-in">
          <p className="about-eyebrow">
            <b>✕</b> The story behind the stage — TEDxSVIT
          </p>
          <h1>
            <span className="about-hline">The story</span>
            <span className="about-hline about-hline--stroke">behind</span>
            <span className="about-hline about-hline--red">the ✕</span>
          </h1>
          <p className="about-hero-sub">
            An independently organized TED event hosted by Sardar Vallabhbhai
            Patel Institute of Technology (SVIT), Vasad. We stage ideas the way
            they arrive — unedited, fearless, and worth arguing about long after
            the curtain falls.
          </p>
        </div>

        <div className="wrap" style={{ paddingInline: 0 }}>
          <div className="about-hero-meta">
            <div className="about-hm">
              <span className="about-hm-label">Founded</span>
              <span className="about-hm-value">2023</span>
            </div>
            <div className="about-hm">
              <span className="about-hm-label">Edition</span>
              <span className="about-hm-value">Vol.05</span>
            </div>
            <div className="about-hm">
              <span className="about-hm-label">Crew</span>
              <span className="about-hm-value">43 Students</span>
            </div>
            <div className="about-hm about-hm--vol">
              <span className="about-hm-label">Location</span>
              <span className="about-hm-value">Vasad, GJ</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 01 MANIFESTO ============ */}
      <section className="about-sec about-sec--paper" id="manifesto">
        <div className="wrap">
          <div className="about-sec-head">
            <span className="about-kicker">
              <b>01</b>Manifesto
            </span>
            <span className="about-sec-line"></span>
            <span className="about-sec-note">SVIT Vasad · Gujarat</span>
          </div>

          <h2 className="mani-statement">
            We stage ideas the way they arrive — <span className="hl">unedited</span>,
            a little uncomfortable, and worth <span className="hl">arguing about</span>{" "}
            long after the chai runs out.
          </h2>

          <div className="mani-cols">
            <div>
              <h3 className="col-label">What is TEDx?</h3>
              <p className="col-body">
                TED is a global community welcoming people from every discipline and
                culture who seek a deeper understanding of the world. The &ldquo;x&rdquo;
                marks an independent event — licensed by TED, built by local passion,
                and bound by TED&apos;s rulebook: short talks, no commercial selling,
                no dogma, evidence first.
              </p>
            </div>
            <div>
              <h3 className="col-label">What is TEDxSVIT?</h3>
              <p className="col-body">
                Hosted at SVIT Vasad, TEDxSVIT is an annual gathering of bold thinkers,
                innovators, artists, and changemakers. Run entirely by a passionate
                student team, it bridges academic curiosity with real-world impact
                on a stage built for ideas that matter.
              </p>
            </div>
          </div>

          <div className="mani-grid2">
            <div>
              <h3 className="col-label">The house rules — straight from TED</h3>
              <ul className="house-rules">
                <li>
                  <i>✕</i> Talks capped at 18 minutes max
                </li>
                <li>
                  <i>✕</i> No commercial selling or sponsor pitches from the stage
                </li>
                <li>
                  <i>✕</i> No political or religious agendas
                </li>
                <li>
                  <i>✕</i> Rigorous evidence and authentic human stories only
                </li>
              </ul>
            </div>
            <div>
              <blockquote className="about-pull">
                We don&apos;t just host talks.<br />
                <em>We build legacies.</em>
              </blockquote>
              <p className="about-pull-foot">— The TEDxSVIT Curation Ethos</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 THE JOURNEY ============ */}
      <section className="about-sec about-sec--dark" id="journey">
        <div className="wrap">
          <div className="about-sec-head">
            <span className="about-kicker">
              <b>02</b>The Journey
            </span>
            <span className="about-sec-line"></span>
            <span className="about-sec-note">2023 — Present</span>
          </div>

          <h2 className="about-sec-title">
            Built on <em>conviction.</em>
          </h2>
          <p className="about-sec-sub">
            From a vision championed in campus corridors to an enduring platform
            celebrating curiosity and dialogue across Gujarat.
          </p>

          <div className="timeline-grid">
            <div className="timeline-card">
              <div className="timeline-year">2023</div>
              <div className="timeline-edition">The Pioneers · Inaugural Edition</div>
              <p className="timeline-desc">
                Launched by a visionary student founding crew — Shofiya Bootwala,
                Yesha Vyas, Harshil Bhatt, and Devanshi Patel — who laid the groundwork,
                secured the first license, and put SVIT on the global TEDx map.
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">First License</span>
                <span className="timeline-tag">Groundwork</span>
                <span className="timeline-tag">Founders</span>
              </div>
            </div>

            <div className="timeline-card">
              <div className="timeline-year">2024</div>
              <div className="timeline-edition">Growth &amp; Continuity</div>
              <p className="timeline-desc">
                Carried forward by a new set of changemakers: Devanshiraje Jadeja,
                Jasmin Kansagra, and Kabir Brahmbhatt, who expanded the vision,
                multiplied community collaborations, and deepened campus dialogue.
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">Expanded Vision</span>
                <span className="timeline-tag">Fresh Voices</span>
                <span className="timeline-tag">Momentum</span>
              </div>
            </div>

            <div className="timeline-card">
              <div className="timeline-year">2026</div>
              <div className="timeline-edition">Vol.05 · Unfiltered</div>
              <p className="timeline-desc">
                Now forty-three students spanning ten departments, staging eight
                unscripted voices across four sessions. Dedicated to raw signal,
                unfiltered ideas, and honest conversations that refuse to fade.
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">Vol.05</span>
                <span className="timeline-tag">10 Departments</span>
                <span className="timeline-tag">43 Students</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 CORE PILLARS ============ */}
      <section className="about-sec about-sec--paper" id="values">
        <div className="wrap">
          <div className="about-sec-head">
            <span className="about-kicker">
              <b>03</b>Pillars
            </span>
            <span className="about-sec-line"></span>
            <span className="about-sec-note">Our Core DNA</span>
          </div>

          <h2 className="about-sec-title">
            How we <em>operate.</em>
          </h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-num">01 / Authenticity</div>
              <h3 className="value-title">Signal over Hype</h3>
              <p className="value-text">
                No scripted buzzwords or rehearsals designed to please crowds. We
                respect speaker authenticity, radical transparency, and evidence
                that stands up to scrutiny.
              </p>
            </div>

            <div className="value-card">
              <div className="value-num">02 / Ownership</div>
              <h3 className="value-title">100% Student-Built</h3>
              <p className="value-text">
                Every single discipline — speaker curation, set design, sound
                engineering, custom web development, videography, stage production —
                is built with relentless craft by students.
              </p>
            </div>

            <div className="value-card">
              <div className="value-num">03 / Legacy</div>
              <h3 className="value-title">Beyond the Stage</h3>
              <p className="value-text">
                The eighteen-minute talk is just the spark. We build experiences
                that spark lasting debate in classrooms, hostels, and careers
                long after the lights go down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA STRIP ============ */}
      <section className="about-cta" aria-label="Join the experience">
        <div className="wrap">
          <div>
            <h2>Now meet the audience — that&apos;s you.</h2>
            <p>43 of us built it. The last piece is you in a seat.</p>
          </div>
          <div className="about-cta-actions">
            <Link className="about-cta-btn" href="/ticketForm">
              Get tickets <span aria-hidden="true">→</span>
            </Link>
            <Link className="about-cta-btn about-cta-btn--ghost" href="/team">
              Meet the crew <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}