"use client";

import { useCallback, useState } from "react";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/ui/PageBackdrop";
import { useEscapeKey, useScrollLock } from "@/hooks/overlay";
import "@/styles/tickets.css";

const googleFormUrl =
  process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
  "https://docs.google.com/forms/d/e/1FAIpQLScr9i1ma0zsluz8YcHl57UCWCfW2tF1Mp0STnSNK-QmNq0-iw/viewform";

const ticketCode = "TXSV·2026·PASS";
const eventDate = "October 10, 2026";
const venue = "Architecture Auditorium, SVIT Campus, Vasad";

export default function TicketFormPage() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = useCallback(() => setShowModal(false), []);

  useScrollLock(showModal);
  useEscapeKey(showModal, closeModal);

  return (
    <div className="tickets-page-root">
      <PageBackdrop />

      <main className="wrap">
        <div className="ticket-wrapper">
          <div className="ticket-card" id="ticketPreview">
            <div className="ticket-header-line">
              <span>
                <b>✕</b> TEDxSVIT
              </span>
              <span>2026</span>
            </div>

            <h1 className="ticket-theme-title">The Ripple Effect</h1>

            <div className="ticket-rows">
              <div className="ticket-row">
                <span className="t-k">Date</span>
                <span className="t-v">{eventDate}</span>
              </div>
              <div className="ticket-row">
                <span className="t-k">Doors</span>
                <span className="t-v">08:00 IST</span>
              </div>
              <div className="ticket-row">
                <span className="t-k">Venue</span>
                <span className="t-v">{venue}</span>
              </div>
            </div>

            <div className="ticket-perforation" aria-hidden="true" />

            <div className="ticket-row ticket-row--holder">
              <span className="t-k">Pass Holder</span>
              <span className="t-v ticket-holder-placeholder">[ YOUR NAME HERE ]</span>
            </div>

            <div className="ticket-row">
              <span className="t-k">Delivery</span>
              <span className="t-v ticket-delivery-note">Emailed After Payment</span>
            </div>

            <div className="ticket-barcode" aria-hidden="true" />
            <div className="ticket-barcode-code">{ticketCode}</div>

            <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="ticket-action-btn">
              <span>Register Now</span>
              <span aria-hidden="true">→</span>
            </a>

            <button type="button" className="ticket-helper-link" onClick={() => setShowModal(true)}>
              Need payment steps? Click here
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="gf-modal" onClick={closeModal} data-lenis-prevent>
          <div
            className="gf-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gf-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gf-modal-head">
              <span id="gf-modal-title">Complete Ticket Registration</span>
              <button type="button" className="gf-modal-close" onClick={closeModal} aria-label="Close" autoFocus>
                ✕
              </button>
            </div>

            <div className="gf-modal-body">
              <div className="gf-pass-summary">
                <h2>Your Ticket Summary</h2>
                <div className="gf-pass-row">
                  <span>Pass Type:</span>
                  <b>Full-Day Delegate Pass (All Sessions)</b>
                </div>
                <div className="gf-pass-row">
                  <span>Date:</span>
                  <b>{eventDate}</b>
                </div>
                <div className="gf-pass-row">
                  <span>Venue:</span>
                  <b>{venue}</b>
                </div>
                <div className="gf-pass-code">{ticketCode}</div>
              </div>

              <div className="gf-instructions">
                <strong>How to Buy &amp; Receive Your Ticket:</strong>
                <ol>
                  <li>Click the button below to open the official TEDxSVIT Google Form.</li>
                  <li>Fill in your attendee name, email address, and phone number.</li>
                  <li>Complete the UPI payment to the account details provided in the form.</li>
                  <li>Upload your payment screenshot and submit the form with a visible Transaction Id.</li>
                  <li>Your personalized official ticket badge with a QR Code will be verified and sent to your email!</li>
                </ol>
              </div>

              <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="gf-primary-btn">
                <span>Open Google Form to Pay &amp; Buy Ticket</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
