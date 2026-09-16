"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import "./team.css";

interface TeamMember {
  idx: string;
  name: string;
  role: string;
  mono: string;
  photo?: string;
}

interface Department {
  id: string;
  num: string;
  title: string;
  theme: "paper" | "dark";
  kickerNote: string;
  headingText: string;
  headingEm: string;
  desc: string;
  countText: string;
  members: TeamMember[];
}

const departments: Department[] = [
  {
    id: "core",
    num: "01",
    title: "Core Team",
    theme: "paper",
    kickerNote: "",
    headingText: "CORE",
    headingEm: "TEAM",
    desc: "",
    countText: "",
    members: [
      {
        idx: "C·01",
        name: "Kabir Brahmbhatt",
        role: "Organiser",
        mono: "KB",
        photo: "/CoreAndWeb/Kabir.JPG",
      },
      {
        idx: "C·02",
        name: "Aditi Patel",
        role: "Co-Organiser",
        mono: "AP",
        photo: "/CoreAndWeb/Aditi.JPG",
      },
      {
        idx: "C·03",
        name: "Vipra Dave",
        role: "Chief Coordinator",
        mono: "VD",
        photo: "/CoreAndWeb/Vipra.png",
      },
      {
        idx: "C·04",
        name: "Dhyani Upadhyay",
        role: "Chief Coordinator",
        mono: "DU",
        photo: "/CoreAndWeb/Dhyani.png",
      },
    ],
  },
  {
    id: "website",
    num: "02",
    title: "Website Team",
    theme: "dark",
    kickerNote: "",
    headingText: "WEBSITE",
    headingEm: "TEAM.",
    desc: "",
    countText: "",
    members: [
      {
        idx: "W·01",
        name: "Krish Prajapati",
        role: "Website",
        mono: "KP",
        photo: "/CoreAndWeb/Krish.jpeg",
      },
      {
        idx: "W·02",
        name: "Nakul Desai",
        role: "Website",
        mono: "ND",
        photo: "/CoreAndWeb/Nakul2.jpg",
      },
      {
        idx: "W·03",
        name: "Nitya Patel",
        role: "Website",
        mono: "NP",
        photo: "/CoreAndWeb/Nitya.jpeg",
      },
      {
        idx: "W·04",
        name: "Siddharth Panchal",
        role: "Website",
        mono: "SP",
        photo: "/CoreAndWeb/Siddharth Panchal.jpeg",
      },
      {
        idx: "W·05",
        name: "Dhaval Patel",
        role: "Website",
        mono: "DP",
        photo: "/CoreAndWeb/Dhaval.jpeg",
      },
    ],
  },
  {
    id: "admin",
    num: "03",
    title: "Admin & Logistics",
    theme: "paper",
    kickerNote: "",
    headingText: "ADMIN & LOGISTICS",
    headingEm: "TEAM.",
    desc: "",
    countText: "",
    members: [
      {
        idx: "A·01",
        name: "Aadi Joshi",
        role: "Admin & Logistics",
        mono: "AJ",
        photo: "/AdminAndLogistics/AadiJoshi.jpeg",
      },
      {
        idx: "A·02",
        name: "Miraj Mistry",
        role: "Admin & Logistics",
        mono: "MM",
        photo: "/AdminAndLogistics/Miraj Mistry.jpg",
      },
      {
        idx: "A·03",
        name: "Mishit Shah",
        role: "Admin & Logistics",
        mono: "MS",
        photo: "/AdminAndLogistics/Mishit2.jpg",
      },
      {
        idx: "A·04",
        name: "Netra Rakeshkumar Patel",
        role: "Admin & Logistics",
        mono: "NP",
        photo: "/AdminAndLogistics/Netra Patel.jpg",
      },
      {
        idx: "A·05",
        name: "Sriram Swaminathan",
        role: "Admin & Logistics",
        mono: "SS",
        photo: "/AdminAndLogistics/Sriram Swaminathan.jpg",
      },
    ],
  },
  {
    id: "design",
    num: "04",
    title: "Graphic Design",
    theme: "dark",
    kickerNote: "",
    headingText: "GRAPHIC DESIGN",
    headingEm: "TEAM",
    desc: "",
    countText: "3 members",
    members: [
      {
        idx: "G·01",
        name: "Chaitanya Giri",
        role: "Graphic Design",
        mono: "CG",
        photo: "/GraphicDesignImages/chaitanya.JPG",
      },
      {
        idx: "G·02",
        name: "Meher Rathod",
        role: "Graphic Design",
        mono: "MR",
        photo: "/GraphicDesignImages/Meher Rathod.jpg",
      },
      {
        idx: "G·03",
        name: "Rudra Joshi",
        role: "Graphic Design",
        mono: "RJ",
        photo: "/GraphicDesignImages/Rudra Joshi Ashutosh.JPG",
      },
    ],
  },
  {
    id: "videography",
    num: "05",
    title: "Videography",
    theme: "paper",
    kickerNote: "On the day, behind the lens",
    headingText: "VIDEOGRAPHY",
    headingEm: "TEAM",
    desc: "Multiple angles, zero second takes — the videography crew captures every talk so the ideas outlive the auditorium.",
    countText: "2 members",
    members: [
      {
        idx: "V·01",
        name: "Akshita Vimawala",
        role: "Videography",
        mono: "AV",
        photo: "/VideographyImages/Akshita.jpeg",
      },
      {
        idx: "V·02",
        name: "Vyom Patel",
        role: "Videography",
        mono: "VP",
        photo: "/VideographyImages/Vyom Patel.jpeg",
      },
    ],
  },
  {
    id: "editing",
    num: "06",
    title: "Video Editing",
    theme: "dark",
    kickerNote: "Timeline surgeons",
    headingText: "VIDEO EDITING",
    headingEm: "TEAM",
    desc: "Hours of footage in, eighteen clean minutes out — the editing team turns raw talks into the videos that live on after the curtain.",
    countText: "3 members",
    members: [
      {
        idx: "E·01",
        name: "Deep Patoriya",
        role: "Video Editing",
        mono: "DP",
        photo: "/VideoEditing/Deep Patoriya.jpg",
      },
      {
        idx: "E·02",
        name: "Parth Soni",
        role: "Video Editing",
        mono: "PS",
        photo: "/VideoEditing/Parth Soni.jpeg",
      },
      {
        idx: "E·03",
        name: "Sambhrant Shukla",
        role: "Video Editing",
        mono: "SS",
        photo: "/VideoEditing/Sambhrant Shukla.jpg",
      },
    ],
  },
  {
    id: "social",
    num: "07",
    title: "Social Media",
    theme: "paper",
    kickerNote: "The loudspeakers",
    headingText: "SOCIAL MEDIA",
    headingEm: "TEAM",
    desc: "Teasers, countdowns, speaker reveals, live coverage — if you heard about VOL.05 before buying a ticket, this is who to thank.",
    countText: "3 members",
    members: [
      {
        idx: "S·01",
        name: "Krish Patel",
        role: "Social Media",
        mono: "KP",
        photo: "/SocialMedia/Krish Patel.jpeg",
      },
      {
        idx: "S·02",
        name: "Malek Noor",
        role: "Social Media",
        mono: "MN",
        photo: "/SocialMedia/Malek Noor.jpeg",
      },
      {
        idx: "S·03",
        name: "Rajat Haathi",
        role: "Social Media",
        mono: "RH",
        photo: "/SocialMedia/Rajat Haathi.jpg",
      },
    ],
  },
  {
    id: "anchoring",
    num: "08",
    title: "Anchoring",
    theme: "dark",
    kickerNote: "The voices of the day",
    headingText: "ANCHORING",
    headingEm: "TEAM",
    desc: "Between every talk, someone has to keep five hundred people leaning forward — these three keep the energy up and the transitions seamless.",
    countText: "3 members",
    members: [
      {
        idx: "N·01",
        name: "Anjali Panchal",
        role: "Anchoring",
        mono: "AP",
        photo: "/Anchoring/Anjali Panchal.jpg",
      },
      {
        idx: "N·02",
        name: "Devanshi Chaudhary",
        role: "Anchoring",
        mono: "DC",
        photo: "/Anchoring/Devanshi.jpeg",
      },
      {
        idx: "N·03",
        name: "Shrey Shah",
        role: "Anchoring",
        mono: "SS",
        photo: "/Anchoring/shrey pic.png",
      },
    ],
  },
  {
    id: "dance",
    num: "09",
    title: "Dance",
    theme: "paper",
    kickerNote: "The opening statement",
    headingText: "DANCE",
    headingEm: "TEAM",
    desc: "The performance that opens VOL.05 — rehearsed in corridors, perfected in mirror rooms, delivered under the lights.",
    countText: "3 members",
    members: [
      {
        idx: "D·01",
        name: "Kavya Thakkar",
        role: "Dance",
        mono: "KT",
        photo: "/Dance/Kavya Gaurav Thakkar.jpg",
      },
      {
        idx: "D·02",
        name: "Kritika Panchal",
        role: "Dance",
        mono: "KP",
        photo: "/Dance/Kritika Panchal.jpg",
      },
      {
        idx: "D·03",
        name: "Sakhi Bhagat",
        role: "Dance",
        mono: "SB",
        photo: "/Dance/Sakhi Bhagat.jpeg",
      },
    ],
  },
  {
    id: "music",
    num: "10",
    title: "Music",
    theme: "dark",
    kickerNote: "The biggest crew",
    headingText: "MUSIC",
    headingEm: "TEAM",
    desc: "Ten people strong — the music team scores the day, from walk-on stings to the closing act that sends everyone home humming.",
    countText: "10 members",
    members: [
      {
        idx: "M·01",
        name: "Meet Barot",
        role: "Music",
        mono: "MB",
        photo: "/Music/Meet Barot.jpg",
      },
      {
        idx: "M·02",
        name: "Ishmael Tinodiwanaishe Ruzungunde",
        role: "Music",
        mono: "IR",
        photo: "/Music/Ishmael Tynoe.jpeg",
      },
      {
        idx: "M·03",
        name: "Nisarg Vimalkumar Rana",
        role: "Music",
        mono: "NR",
        photo: "/Music/Nisarg Rana.jpg",
      },
      {
        idx: "M·04",
        name: "Manan Sutariya",
        role: "Music",
        mono: "MS",
        photo: "/Music/Manan Sutariya.jpg",
      },
      {
        idx: "M·05",
        name: "Mahek Doshi",
        role: "Music",
        mono: "MD",
        photo: "/Music/Mahek Doshi.jpg",
      },
      {
        idx: "M·06",
        name: "Dhruva Pratik Shah",
        role: "Music",
        mono: "DS",
        photo: "/Music/Dhruva.jpeg",
      },
      {
        idx: "M·07",
        name: "Harshil Dharmik",
        role: "Music",
        mono: "HD",
        photo: "/Music/Harshil Dharmik.jpg",
      },
      {
        idx: "M·08",
        name: "Yug Kalpesh Patel",
        role: "Music",
        mono: "YP",
        photo: "/Music/Yug Patel.jpeg",
      },
      {
        idx: "M·09",
        name: "Samhita Gandhi",
        role: "Music",
        mono: "SG",
        photo: "/Music/samhita.jpg",
      },
      {
        idx: "M·10",
        name: "Shubhamkumar Harshadkumar Panchal",
        role: "Music",
        mono: "SP",
        photo: "/Music/Shubham Panchal.JPG",
      },
    ],
  },
];

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState<string>("core");

  useEffect(() => {
    const handleScroll = () => {
      const deptElements = departments.map((d) => document.getElementById(d.id));
      const scrollPos = window.scrollY + 200;

      for (let i = deptElements.length - 1; i >= 0; i--) {
        const el = deptElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveDept(departments[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDept = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="team-page-root">
      {/* ============ HERO ============ */}
      <section className="team-hero" aria-label="Team introduction">
        <div className="team-hero-ripple" aria-hidden="true">
          <img src="/assets/fallback.png" className="team-hero-ripple-canvas" alt="" />
        </div>

        <div className="team-hero-lines" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {/* Hero Section thing */}
        <div className="wrap team-hero-in">
          <h1>
            <span className="team-hline">Meet the team </span>
            {/*<span className="team-hline">team behind</span>*/}
            <span className="team-hline team-hline--red">behind this event.</span>
          </h1>
        </div>

      </section>


      {/* ============ DEPARTMENTS ============ */}
      <main id="main">
        {departments.map((dept) => {
          const isPaper = dept.theme === "paper";
          const isCore = dept.id === "core";

          return (
            <section
              key={dept.id}
              className={`dept ${isPaper ? "dept--paper" : "dept--dark"}`}
              id={dept.id}
            >
              <div className="wrap">
                <div className="dept-head">
                  <span className="dept-kicker">
                    <b>{dept.num}</b>
                    {/*{dept.title}*/}
                  </span>
                  <span className="dept-line"></span>
                  {/*<span className="dept-note">{dept.kickerNote}</span>*/}
                </div>

                <h2>
                  {dept.headingText} <em>{dept.headingEm}</em>
                </h2>
                {/*<p className="dept-desc">{dept.desc}</p>*/}
                <p className="dept-count"></p>

                <div className={isCore ? "core-grid" : "m-grid"}>
                  {dept.members.map((member) => (
                    <article
                      className={`member ${member.photo ? "has-photo" : ""}`}
                      key={member.idx}
                    >
                      <div className="m-top">
                        <span className="m-idx"></span>

                        {member.photo && (
                          <div
                            className="m-photo"
                            role="img"
                            aria-label={member.name}
                            style={{ backgroundImage: `url("${member.photo}")` }}
                          />
                        )}

                        <span className="m-mono" aria-hidden="true">
                          
                        </span>

                        <svg
                          className="m-x"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 1 L11 11 M11 1 L1 11"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>

                      <div className="m-body">
                        <h3 className="m-name">{member.name}</h3>
                        <p className="m-role">{member.role}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ============ CTA STRIP ============ */}
        <section className="team-cta" aria-label="Join the audience">
          <div className="wrap">
            <div>
              <h2>Now meet the audience — that&apos;s you.</h2>
              <p>43 of us built it. The last piece is you in a seat.</p>
            </div>
            <Link className="team-cta-btn" href="/ticketForm">
              Get tickets <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
