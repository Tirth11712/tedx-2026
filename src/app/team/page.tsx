import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/ui/PageBackdrop";
import MemberCard from "@/components/team/MemberCard";
import { ticketsHref } from "@/data/site";
import { departments } from "@/data/team";
import "@/styles/team.css";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the student team behind TEDxSVIT.",
};

export default function TeamPage() {
  return (
    <div className="team-page-root">
      <section className="team-hero" aria-label="Team introduction">
        <PageBackdrop contained />

        <div className="team-hero-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>

        <div className="wrap team-hero-in">
          <h1>
            <span className="team-hline">Meet the team </span>
            <span className="team-hline team-hline--red">behind this event.</span>
          </h1>
        </div>
      </section>

      <main id="main">
        {departments.map((dept) => {
          const isCore = dept.id === "core";

          return (
            <section key={dept.id} className={`dept dept--${dept.theme}`} id={dept.id}>
              <div className="wrap">
                <div className="dept-head" aria-hidden="true">
                  <span className="dept-kicker">
                    <b>{dept.num}</b>
                  </span>
                  <span className="dept-line" />
                </div>

                <h2>
                  {dept.heading} <em>{dept.headingEm}</em>
                </h2>

                <div className={isCore ? "core-grid" : "m-grid"}>
                  {dept.members.map((member) => (
                    <MemberCard member={member} isCore={isCore} key={member.photo} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="team-cta" aria-label="Join the audience">
          <div className="wrap">
            <div>
              <h2>Now meet the audience — that&apos;s you.</h2>
              <p>43 of us built it. The last piece is you in a seat.</p>
            </div>
            <Link className="team-cta-btn" href={ticketsHref}>
              Get tickets <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
