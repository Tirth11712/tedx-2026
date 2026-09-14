"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import "./TicketForm.css";

export default function TicketFormPage() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  // Google Form URL (customizable via env variable or updated directly)
  const defaultGoogleFormUrl =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSc_PLACEHOLDER_GOOGLE_FORM/viewform";

  const ticketCode = "TXSV·05·2026·PASS";

  const handleCopyCode = () => {
    navigator.clipboard.writeText(ticketCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="tickets-page-root">
      <div className="wrap">
        {/* Section Header */}
        <div className="tickets-sec-head">
          <span className="tickets-kicker">
            <b>05</b>Tickets — VOL.05
          </span>
          <span className="tickets-sec-line"></span>
          <span className="tickets-sec-note">Limited to 500 seats</span>
        </div>

        {/* Two Column Grid */}
        <div className="tickets-grid">
          {/* ============ LEFT COLUMN: COPY ============ */}
          <div className="tickets-copy">
            <h1>
              Be in<br />
              the <em>room.</em>
            </h1>
            <p className="tickets-desc">
              Talks hit different in person. No pause button, no comment section
              — just you, eight bold speakers, and five hundred strangers leaning
              forward at the same moment.
            </p>

            <ul className="tickets-perks">
              <li>
                <i>✕</i> 8 live unscripted talks — zero edits
              </li>
              <li>
                <i>✕</i> Open stage Q&amp;A sessions with speakers
              </li>
              <li>
                <i>✕</i> Official delegate credentials &amp; welcome kit
              </li>
              <li>
                <i>✕</i> Networking lunch &amp; refreshments included
              </li>
            </ul>

            {/* Quick Action CTA */}
            <div className="tickets-cta-actions">
              <a
                href={defaultGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-direct-buy-btn"
              >
                <span>Buy Ticket via Official Form</span>
                <span aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                className="ticket-steps-btn"
                onClick={() => setShowModal(true)}
              >
                View Payment &amp; Registration Steps
              </button>

              <p className="tickets-cta-helper">
                Complete your details and payment on the Google Form. Your personalized ticket badge will be emailed directly to you once confirmed.
              </p>
            </div>
          </div>

          {/* ============ RIGHT COLUMN: DYNAMIC TICKET CARD ============ */}
          <div className="ticket-wrapper">
            <div className="ticket-card" id="ticketPreview">
              {/* Top line */}
              <div className="ticket-header-line">
                <span>
                  <b>✕</b> TEDxSVIT — VOL.05
                </span>
                <span>Admit One</span>
              </div>

              {/* Giant theme title */}
              <div className="ticket-theme-title">Unfiltered</div>

              {/* Fixed Event Rows */}
              <div className="ticket-rows">
                <div className="ticket-row">
                  <span className="t-k">Date</span>
                  <span className="t-v">Sat — 21·02·2026</span>
                </div>
                <div className="ticket-row">
                  <span className="t-k">Doors</span>
                  <span className="t-v">08:00 IST</span>
                </div>
                <div className="ticket-row">
                  <span className="t-k">Venue</span>
                  <span className="t-v">Main Auditorium, SVIT Campus, Vasad</span>
                </div>
              </div>

              {/* Perforation line with edge notches */}
              <div className="ticket-perforation" aria-hidden="true"></div>

              {/* Pass Holder Placeholder on Ticket */}
              <div className="ticket-row ticket-row--holder">
                <span className="t-k">Pass Holder</span>
                <span className="t-v ticket-holder-placeholder">[ YOUR NAME HERE ]</span>
              </div>


              <div className="ticket-row">
                <span className="t-k">Delivery</span>
                <span className="t-v ticket-delivery-note">Emailed After Payment</span>
              </div>

              {/* Barcode matching screenshot */}
              <div className="ticket-barcode" aria-hidden="true"></div>
              <div className="ticket-barcode-code">{ticketCode}</div>

              {/* Action Button on Ticket Card */}
              <a
                href={defaultGoogleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-action-btn"
              >
                <span>Register Now</span>
                <span aria-hidden="true">→</span>
              </a>

              <button
                type="button"
                className="ticket-helper-link"
                onClick={() => setShowModal(true)}
              >
                Need payment steps? Click here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============ GOOGLE FORM MODAL ============ */}
      {showModal && (
        <div className="gf-modal" role="dialog" aria-modal="true">
          <div className="gf-modal-card">
            <div className="gf-modal-head">
              <span>Complete Ticket Registration</span>
              <button
                type="button"
                className="gf-modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="gf-modal-body">
              <div className="gf-pass-summary">
                <h4>Your Ticket Summary</h4>
                <div className="gf-pass-row">
                  <span>Pass Type:</span>
                  <b>Full-Day Delegate Pass (All Sessions)</b>
                </div>
                <div className="gf-pass-row">
                  <span>Date:</span>
                  <b>Saturday, 21 February 2026</b>
                </div>
                <div className="gf-pass-row">
                  <span>Venue:</span>
                  <b>Main Auditorium, SVIT Campus, Vasad</b>
                </div>
                <div className="gf-pass-code">{ticketCode}</div>
              </div>

              <div className="gf-instructions">
                <strong>How to Buy &amp; Receive Your Ticket:</strong>
                <ol>
                  <li>
                    Click the button below to open the official TEDxSVIT Google Form.
                  </li>
                  <li>
                    Fill in your attendee name, email address, and phone number.
                  </li>
                  <li>
                    Complete the UPI payment to the account details provided in the form.
                  </li>
                  <li>
                    Upload your payment screenshot and submit the form.
                  </li>
                  <li>
                    Your personalized official ticket badge will be verified and sent to your email!
                  </li>
                </ol>
              </div>

              <div className="gf-button-group">
                <button
                  type="button"
                  className="gf-secondary-btn"
                  onClick={handleCopyCode}
                >
                  {copied ? "✓ Code Copied to Clipboard!" : "Copy Reference Pass Code"}
                </button>

                <a
                  href={defaultGoogleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gf-primary-btn"
                >
                  <span>Open Google Form to Pay &amp; Buy Ticket</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
