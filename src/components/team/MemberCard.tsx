"use client";

import { useState } from "react";
import Image from "next/image";
import type { TeamMember } from "@/data/team";

export default function MemberCard({ member, isCore }: { member: TeamMember; isCore: boolean }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article
      className={`member${isActive ? " is-active" : ""}`}
      onClick={() => setIsActive((prev) => !prev)}
    >
      <div className="m-top">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          sizes={
            isCore
              ? "(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
              : "(max-width: 420px) 100vw, (max-width: 900px) 50vw, 20vw"
          }
          className="m-photo"
        />

        <svg className="m-x" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M1 1 L11 11 M11 1 L1 11" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="m-body">
        <h3 className="m-name">{member.name}</h3>
        <p className="m-role">{member.role}</p>
      </div>
    </article>
  );
}
