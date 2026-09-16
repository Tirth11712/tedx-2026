import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/ui/PageBackdrop";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, manifesto, and legacy behind TEDxSVIT — an independently organized TED event run by students.",
};

export default function About() {
  return (
    <div className="about-page-root">
      <PageBackdrop />

      <main>
        <section className="about-sec" id="about-tedx">
          <div className="wrap">
            <h1 className="about-title">About TEDx</h1>
            <p className="about-body">
              TEDx is a program of local, self-organized events licensed by TED, designed to bring
              people together to share a TED-like experience and bring its spirit of &ldquo;Ideas
              Worth Spreading&rdquo; to local communities. TEDx events blend live speakers,
              performers, and thought-provoking videos that spark deep discussions and connections.
              The &ldquo;x&rdquo; stands for &ldquo;independently organized TED event.&rdquo;
            </p>
          </div>
        </section>

        <section className="about-sec" id="about-tedxsvit">
          <div className="wrap">
            <h2 className="about-title">About TEDxSVIT</h2>
            <p className="about-body">
              TEDxSVIT is an independently organized TEDx event hosted by Sardar Vallabhbhai Patel
              Institute of Technology (SVIT), Vasad, under the global TED initiative of &ldquo;Ideas
              Worth Spreading.&rdquo; It serves as a platform for bold thinkers, innovators, artists,
              and changemakers from diverse fields to share their stories, spark conversations, and
              inspire action within and beyond our campus community.
            </p>
            <p className="about-body">
              Launched in 2023, TEDxSVIT was founded by a visionary team of students: Shofiya
              Bootwala, Yesha Vyas, Harshil Bhatt, and Devanshi Patel — pioneers who laid the
              groundwork for what would become one of the most impactful platforms on campus.
            </p>
            <p className="about-body">
              The journey continued in 2024, carried forward by a new set of changemakers:
              Devanshiraje Jadeja, Jasmin Kansagra, and Kabir Brahmbhatt, who expanded the vision and
              upheld the TEDx spirit with fresh voices and diverse ideas. Each year, TEDxSVIT has
              evolved into a space for curiosity, dialogue, and creative expression — bridging
              students, professionals, and thought leaders on a stage built by and for ideas that
              matter. At TEDxSVIT, we don&apos;t just host talks — we build legacies, one idea at a
              time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
