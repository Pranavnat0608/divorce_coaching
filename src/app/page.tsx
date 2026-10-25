import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { katePinkBg } from "@/lib/katePinkBg";

const attorneyReasons = [
  "clients become more organized and prepared",
  "legal-process decisions become clearer",
  "conflict decreases and communication stabilizes",
  "mediation participation improves",
  "attorney time is used more efficiently",
];

const regions = [
  {
    name: "Northern Virginia",
    label: "Primary Market",
    body: "Supporting clients in Loudoun, Fairfax, Arlington, Alexandria, and Prince William — where high-stakes cases and attorney-driven processes benefit from structured decision support.",
  },
  {
    name: "Beaufort, South Carolina",
    label: "Secondary Market",
    body: "Providing trauma-informed, stability-focused support for families navigating transition, including military families and clients seeking grounded guidance during periods of change.",
  },
];

const services = [
  {
    title: "Legal-Process Clarity & Pathway Selection",
    body: "Helping clients understand their divorce process options — mediation, collaborative divorce, or litigation — and choose the path aligned with their long-term goals.",
  },
  {
    title: "Mediation Readiness",
    body: "Preparing clients to enter mediation with clarity, emotional steadiness, and a structured plan.",
  },
  {
    title: "Attorney Engagement Preparation",
    body: "Organizing documents, clarifying questions, and strengthening communication so attorney time is used effectively.",
  },
  {
    title: "Conflict De-Escalation & Communication Structure",
    body: "Reducing reactivity and strengthening constructive communication during high-stress moments.",
  },
  {
    title: "Transition Stability & Post-Divorce Adjustment",
    body: "Supporting clients as they establish new routines, communication patterns, and stability after divorce.",
  },
];

const testimonials = [
  "I walked into mediation feeling prepared for the first time. She helped me understand what I actually wanted — and how to ask for it.",
  "I used to leave every attorney meeting confused. Alecia helped me get organized and advocate for myself.",
  "She helped me think clearly when everything felt impossible.",
];

export default function Home() {
  return (
    <>
      <section
        className="home-hero relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center overflow-x-hidden py-10 md:h-[calc(100dvh-5.9rem)] md:min-h-0 md:overflow-hidden md:py-0"
        style={katePinkBg}
      >
        <HeroPattern />
        <div className="relative mx-auto flex w-full max-w-[75rem] flex-col items-center px-6 text-center md:px-[5rem]">
          <p className="home-hero__brand animate-fade-up font-display font-normal leading-[1.08] tracking-tight text-plum">
            Insightful Divorce Coaching™
          </p>
          <p className="home-hero__tag animate-fade-up-delay font-body font-medium tracking-[0.04em] text-plum">
            Structured. Steady. Attorney-Aligned.
          </p>
          <div
            aria-hidden
            className="home-hero__rule animate-reveal-line mx-auto h-px bg-plum/35"
          />
          <h1 className="home-hero__headline animate-fade-up-delay mx-auto max-w-4xl font-display font-normal leading-[1.15] tracking-tight text-plum">
            The executive-caliber, trauma-informed, decision-support partner
            attorneys trust to stabilize clients, reduce conflict, and improve
            legal outcomes.
          </h1>
          <p className="home-hero__body animate-fade-up-delay-2 mx-auto max-w-2xl font-body font-light leading-relaxed text-ink">
            Serving clients virtually across the U.S., with focused support in
            Northern Virginia and the Beaufort, SC region.
          </p>
          <div className="home-hero__actions animate-fade-up-delay-2 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <Link
              href="/contact"
              className="rounded-[4px] bg-gold px-6 py-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep md:px-7 md:py-3.5 md:text-sm"
            >
              Request a Discovery Session
            </Link>
            <Link
              href="/services"
              className="border border-plum/25 px-6 py-3 font-body text-sm font-medium text-plum transition-colors hover:border-plum/45 hover:bg-plum/5 md:px-7 md:py-3.5"
            >
              View Services
            </Link>
          </div>
          <p className="home-hero__creds animate-fade-up-delay-2 max-w-lg font-label font-normal uppercase leading-relaxed tracking-[0.6px] text-plum/75">
            Certified Divorce Coach® · Structured Decision Support · Mediation
            Readiness
          </p>
        </div>
      </section>

      <section className="border-y border-pink/40 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10 lg:max-w-5xl">
          <h2 className="font-display text-3xl font-normal tracking-tight text-plum md:text-4xl">
            What I Do
          </h2>
          <p className="mt-5 font-body text-sm font-light leading-relaxed text-ink md:text-base">
            Divorce requires clarity, emotional steadiness, and informed
            decision-making — especially when navigating mediation,
            collaborative divorce, or litigation. I help clients understand
            their legal-process options, prepare for high-stakes conversations,
            and communicate with structure so they can participate effectively
            and make decisions they can stand behind.
          </p>
          <p className="mt-3 font-body text-sm font-light leading-relaxed text-ink md:mt-4 md:text-base">
            My work strengthens the entire professional team — especially
            attorneys — by reducing reactivity, improving communication, and
            supporting client readiness at every stage of the legal process.
          </p>
        </div>
      </section>

      <section className="bg-pink-soft py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <h2 className="text-center font-display text-3xl font-normal tracking-tight text-plum md:text-4xl">
            Why Attorneys Trust This Practice
          </h2>
          <p className="mt-5 text-center font-body text-sm font-light leading-relaxed text-ink md:text-base">
            Attorneys refer clients to Insightful Divorce Coaching™ because:
          </p>
          <ul className="mx-auto mt-6 max-w-xl space-y-3 font-body text-sm font-light leading-relaxed text-ink md:text-base">
            {attorneyReasons.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center font-display text-lg font-normal tracking-tight text-plum md:text-xl">
            This is not therapy, legal advice, or mediation. It is
            executive-caliber decision support designed to improve legal
            outcomes.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <h2 className="text-center font-display text-3xl font-normal tracking-tight text-plum md:text-4xl">
            Focused Regional Support
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center font-body text-sm font-light leading-relaxed text-ink md:text-base">
            Although services are delivered virtually nationwide, this practice
            is intentionally focused on two regions where structured,
            attorney-aligned support has the greatest impact:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-3xl bg-pink-soft px-7 py-8 text-center"
              >
                <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-tight text-plum md:text-[1.6rem]">
                  {region.name}
                </h3>
                <p className="mt-1 font-label text-xs font-normal uppercase tracking-[0.6px] text-gold">
                  {region.label}
                </p>
                <p className="mt-4 font-body text-[0.9375rem] font-light leading-relaxed text-ink">
                  {region.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-14" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-[75rem] px-6 md:px-[5rem]">
          <h2 className="text-center font-display text-[2.1rem] font-normal tracking-tight text-plum md:text-[2.65rem]">
            Core Services
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-6 md:gap-7">
            {services.map((item) => (
              <div
                key={item.title}
                className="flex w-full flex-col rounded-3xl bg-white px-7 py-8 text-center md:w-[calc((100%-3.5rem)/3)]"
              >
                <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-tight text-plum md:text-[1.5rem]">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 font-body text-[0.9375rem] font-light leading-relaxed text-ink">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-[4px] bg-gold px-6 py-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep md:text-sm"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Client Feedback
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {testimonials.map((quote) => (
              <blockquote key={quote}>
                <p className="text-base leading-relaxed text-ink-soft">
                  &ldquo;{quote}&rdquo;
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-soft py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="font-display text-[2.1rem] font-normal leading-[1.2] text-plum md:text-[3.25rem]">
            Ready to Move Forward with{" "}
            <em className="italic">Clarity</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.15rem]">
            If you are navigating divorce and want structured, trauma-informed
            support that strengthens your legal process, I invite you to begin
            with a Discovery Session.
          </p>
          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-[4px] bg-gold px-8 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
            >
              Request a Discovery Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
