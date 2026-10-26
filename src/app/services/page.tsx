import type { Metadata } from "next";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Executive-caliber, trauma-informed decision support: divorce decision readiness, attorney engagement preparation, mediation readiness, conflict de-escalation, and transition strategy.",
};

const legalProcessSupport = [
  "stay grounded during conflict",
  "prepare effectively for mediation",
  "communicate with structure",
  "make decisions aligned with long-term goals",
  "use attorney time efficiently",
];

const services = [
  {
    name: "Divorce Decision Readiness & Legal-Process Preparation",
    paragraphs: [
      "Helping clients bring structure to the early stages of divorce by clarifying priorities, organizing information, identifying key questions, and preparing for informed conversations with legal counsel about available process options.",
    ],
    listLabel: "Clients receive support with:",
    items: [
      "Clarifying personal, family, and financial priorities",
      "Identifying desired outcomes and areas of concern",
      "Preparing questions for attorney consultations",
      "Understanding the practical differences among common divorce pathways",
      "Organizing information needed for legal discussions",
      "Evaluating readiness for mediation, collaborative divorce, or litigation discussions",
      "Reducing uncertainty and decision paralysis",
      "Developing a structured plan for next steps",
    ],
  },
  {
    name: "Attorney Engagement Preparation",
    paragraphs: [
      "Attorney time is expensive — and often underutilized when clients arrive overwhelmed or unfocused. This service ensures clients are prepared to use legal time effectively.",
    ],
    listLabel: "Clients receive support to:",
    items: [
      "organize documents and timelines",
      "clarify questions before meetings",
      "articulate goals and concerns",
      "understand how to communicate constructively",
      "stay aligned with attorney guidance",
    ],
    closing:
      "This reduces back-and-forth, improves efficiency, and strengthens legal strategy.",
  },
  {
    name: "Mediation Readiness",
    paragraphs: [
      "Mediation is most effective when clients arrive prepared, steady, and clear about priorities. Unprepared clients escalate conflict, lose focus, and increase legal costs.",
    ],
    listLabel: "This service strengthens mediation outcomes by helping clients:",
    items: [
      "clarify goals and non-negotiables",
      "anticipate difficult conversations",
      "practice grounded communication",
      "reduce emotional reactivity",
      "enter mediation with a structured plan",
    ],
  },
  {
    name: "Conflict De-Escalation & Communication Structure",
    paragraphs: [
      "High-conflict communication derails progress and increases emotional strain. This service helps clients communicate with clarity and steadiness during difficult moments.",
    ],
    listLabel: "Clients learn how to:",
    items: [
      "identify emotional triggers",
      "pause and respond rather than react",
      "use structured communication techniques",
      "reduce escalation during co-parenting or legal discussions",
      "maintain focus during high-stress moments",
    ],
  },
  {
    name: "Divorce Transition Strategy & Stability",
    paragraphs: [
      "Major transitions — household changes, co-parenting shifts, new routines — can overwhelm even the most capable individuals. This service provides grounded support during and after the divorce process.",
    ],
    listLabel: "Clients receive guidance to:",
    items: [
      "establish stable routines",
      "support children through transitions",
      "maintain emotional steadiness",
      "build communication patterns that reduce conflict",
      "move forward with clarity and confidence",
    ],
  },
];

const feeAlignment = [
  "the legal-process path you are pursuing (mediation, collaborative divorce, or litigation)",
  "the level of preparation required for attorney meetings",
  "the communication and conflict-management support needed",
  "the stability and transition planning appropriate for your situation",
  "the attorney strategy guiding your case",
];

const whyDiscoverySession = [
  "clarify your goals and priorities",
  "understand the attorney strategy guiding your case",
  "assess the level of conflict or complexity",
  "determine the appropriate coaching structure",
  "ensure alignment with your legal-process path",
  "provide a fee recommendation that reflects your actual needs",
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
    body: "Providing trauma-informed stability and heritage-aligned support for families navigating transition, including military families.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((point) => (
        <li
          key={point}
          className="flex gap-3 font-body text-[0.95rem] font-light leading-relaxed text-ink md:text-[1rem]"
        >
          <span
            aria-hidden
            className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-plum/55"
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-[75rem] px-6 py-10 text-center md:px-[5rem] md:py-12">
          <p className="font-label text-[1rem] font-normal uppercase tracking-[0.6px] text-plum">
            Services
          </p>
          <h1 className="mx-auto mt-3 max-w-[75rem] font-display text-[1.85rem] font-normal leading-[1.2] tracking-normal text-plum md:text-[2.75rem] md:leading-[1.2]">
            Structured. Steady. Attorney-Aligned.
          </h1>
          <p className="mx-auto mt-3 max-w-[48rem] font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
            Executive-caliber, trauma-informed decision support that
            strengthens client readiness, reduces conflict, and improves legal
            outcomes.
          </p>
          <p className="mx-auto mt-3 max-w-[48rem] font-body text-[0.95rem] font-light leading-[1.6] text-ink-soft md:text-[1rem]">
            Serving clients virtually across the U.S., with focused support in
            Northern Virginia and the Beaufort, SC region.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-[5rem] md:py-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            How These Services Support the Legal Process
          </h2>
          <p className="mt-5 text-center font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            Divorce is a high-stakes process that requires clarity, emotional
            steadiness, and informed decision-making. My services are designed
            to strengthen the entire professional team — especially attorneys —
            by helping clients:
          </p>
          <div className="mx-auto mt-6 max-w-xl">
            <BulletList items={legalProcessSupport} />
          </div>
          <p className="mt-8 text-center font-display text-lg font-normal tracking-tight text-plum md:text-xl">
            This is not therapy, legal advice, or mediation. It is
            executive-caliber decision support that improves legal outcomes.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-14 md:px-[5rem] md:pb-[5rem]">
        <div className="mx-auto max-w-[75rem]">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.65rem]">
            Core Services
          </h2>
          <div className="mt-10 space-y-8 md:space-y-10">
            {services.map((item, index) => (
              <article
                key={item.name}
                className="rounded-[2.5rem] bg-pink-soft px-8 py-10 md:rounded-[4rem] md:px-14 md:py-14 lg:px-16"
              >
                <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                  <div>
                    <p className="font-label text-sm font-normal uppercase tracking-[0.6px] text-gold md:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-[1.6rem] font-normal leading-[1.15] text-plum md:text-[2.1rem]">
                      {item.name}
                    </h3>
                    {item.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 font-body text-[1rem] font-light leading-[1.65] text-ink md:text-[1.05rem]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="md:pt-9">
                    <p className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
                      {item.listLabel}
                    </p>
                    <BulletList items={item.items} />
                    {item.closing && (
                      <p className="mt-5 font-body text-[1rem] font-medium leading-[1.65] text-plum md:text-[1.05rem]">
                        {item.closing}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-16" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-3xl px-6 md:max-w-4xl md:px-10">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            Professional Fees
          </h2>
          <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            Insightful Divorce Coaching™ provides structured, trauma-informed,
            executive-caliber decision support tailored to the needs of each
            client and the complexity of their case. Because every divorce
            involves different legal-process paths, levels of conflict, and
            attorney-driven requirements, fees are discussed during the
            Discovery Session once your specific needs are understood.
          </p>
          <div className="mt-8 rounded-[2rem] bg-white px-8 py-8 md:px-10">
            <p className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              This approach ensures that your coaching plan is aligned with:
            </p>
            <BulletList items={feeAlignment} />
          </div>
          <p className="mt-8 font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            Fees are not listed publicly to maintain professional discretion,
            support attorney-aligned collaboration, and ensure that each client
            receives a plan that reflects the actual demands of their case.
          </p>
          <p className="mt-4 font-body text-[1.05rem] font-medium leading-[1.7] text-plum md:text-[1.1rem]">
            <Link
              href="/contact"
              className="underline underline-offset-4 hover:text-gold-deep"
            >
              Request a Discovery Session
            </Link>{" "}
            to receive a tailored recommendation and fee structure based on your
            goals, your legal process, and the level of support required.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:px-[5rem] md:py-16">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            Why Fees Are Discussed During the Discovery Session
          </h2>
          <p className="mt-5 text-center font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            Clients benefit from a private, structured conversation before fees
            are presented because it allows us to:
          </p>
          <div className="mx-auto mt-6 max-w-xl">
            <BulletList items={whyDiscoverySession} />
          </div>
          <p className="mt-8 text-center font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            This is the standard approach used by executive-caliber
            professional services firms and is fully aligned with the
            expectations of attorneys who refer clients to this practice.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-14 md:px-[5rem] md:pb-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            Regional Focus
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            While services are delivered virtually nationwide, this practice is
            intentionally focused on:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {regions.map((region) => (
              <article
                key={region.name}
                className="rounded-[2rem] bg-pink-soft px-8 py-10 text-center md:rounded-[3rem] md:px-10"
              >
                <h3 className="font-display text-[1.5rem] font-normal leading-snug text-plum md:text-[1.85rem]">
                  {region.name}
                </h3>
                <p className="mt-1 font-label text-xs font-normal uppercase tracking-[0.6px] text-gold md:text-sm">
                  {region.label}
                </p>
                <p className="mt-4 font-body text-[1rem] font-light leading-[1.65] text-ink">
                  {region.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-16" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            Ready to Move Forward with Clarity?
          </h2>
          <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            If you are navigating divorce and want structured, trauma-informed
            support that strengthens your legal process, I invite you to begin
            with a Discovery Session.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-[4px] bg-gold px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
            >
              Request a Discovery Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
