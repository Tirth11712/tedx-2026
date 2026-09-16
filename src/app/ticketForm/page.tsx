"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import "./TicketForm.css";

export default function TicketFormPage() {
  const [showModal, setShowModal] = useState(false);


  // Google Form URL (customizable via env variable or updated directly)
  const defaultGoogleFormUrl =
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLSc_PLACEHOLDER_GOOGLE_FORM/viewform";

  const ticketCode = "TXSV·2026·PASS";


  return (
    <div className="tickets-page-root">
      <div className="tickets-bg-ripple" aria-hidden="true">
        <img src="/assets/fallback.webp" className="tickets-bg-ripple-canvas" alt="" />
      </div>

      <div className="wrap">
        {/* ============ CENTERED TICKET CARD ============ */}
        <div className="ticket-wrapper">
          <div className="ticket-card" id="ticketPreview">
            {/* Top line */}
            <div className="ticket-header-line">
              <span>
                <b>✕</b> TEDxSVIT
              </span>
              <span>2026</span>
            </div>

            {/* Giant theme title */}
            <div className="ticket-theme-title">The Ripple Effect</div>

            {/* Fixed Event Rows */}
            <div className="ticket-rows">
              <div className="ticket-row">
                <span className="t-k">Date</span>
                <span className="t-v">TBA</span>
              </div>
              <div className="ticket-row">
                <span className="t-k">Doors</span>
                <span className="t-v">08:00 IST</span>
              </div>
              <div className="ticket-row">
                <span className="t-k">Venue</span>
                <span className="t-v">Architecture Auditorium, SVIT Campus, Vasad</span>
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
                  <b>TBA</b>
                </div>
                <div className="gf-pass-row">
                  <span>Venue:</span>
                  <b>Architecture Auditorium, SVIT Campus, Vasad</b>
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
                    Upload your payment screenshot and submit the form with a visible Transaction Id
                  </li>
                  <li>
                    Your personalized official ticket badge with a QR Code will be verified and sent to your email !
                  </li>
                </ol>
              </div>

              <div className="gf-button-group">


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
