"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import "@/styles/faqs.css";

export default function FAQs() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="faq-container" id="FAQ" aria-labelledby="faq-title">
      <h2 id="faq-title">Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq, index) => {
          const isOpen = expanded === index;
          return (
            <div key={faq.question} className="faq-accordion-item">
              <button
                type="button"
                id={`faq-q-${index}`}
                className={`faq-button ${isOpen ? "faq-expanded" : ""}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${index}`}
                onClick={() => setExpanded(isOpen ? null : index)}
              >
                <span className="faq-accordion-title">{faq.question}</span>
                <svg className="faq-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id={`faq-a-${index}`}
                role="region"
                aria-labelledby={`faq-q-${index}`}
                className={`faq-accordion-content ${isOpen ? "faq-open" : ""}`}
              >
                <div className="faq-accordion-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
