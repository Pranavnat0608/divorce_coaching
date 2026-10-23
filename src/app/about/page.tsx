import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { assetPath } from "@/lib/assetPath";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alecia Pazant, Certified Divorce Coach® — structured, steady, attorney-aligned divorce support serving clients nationwide, with focused support in Northern Virginia and Beaufort, SC.",
};

const clientsReceive = [
  "decision-support tools that clarify options",
  "emotional-regulation strategies that reduce reactivity",
  "structured communication support that prevents escalation",
  "mediation and attorney-meeting preparation that improves efficiency",
  "stability during transitions that supports children and co-parenting",
];

const regions = [
  {
    name: "Northern Virginia",
    paragraphs: [
      "Northern Virginia’s family-law ecosystem is uniquely suited to structured, attorney-aligned divorce coaching. High-stakes cases, complex family dynamics, and attorney-driven processes benefit from clients who are prepared, steady, and able to make informed decisions.",
      "Clients in Loudoun, Fairfax, Arlington, Alexandria, and Prince William counties consistently benefit from this practice’s executive-caliber approach.",
    ],
  },
  {
    name: "Beaufort, South Carolina",
    paragraphs: [
      "The Beaufort region — including military families and long-standing community networks — often faces transitions that require clarity, steadiness, and trauma-informed support. My work in this region reflects both professional alignment and personal heritage, offering clients a grounded partner during periods of change.",
    ],
  },
];

const approachTraits = [
  "steady",
  "structured",
  "clarifying",
  "non-reactive",
  "deeply supportive",
  "aligned with attorney strategy",
];

const howISupport = [
  "prepare for mediation",
  "organize documents and priorities",
  "clarify questions before attorney meetings",
  "reduce conflict escalation",
  "communicate with structure",
  "make decisions aligned with long-term goals",
  "stay emotionally steady during difficult moments",
];

const regionalExpertise = [
  {
    name: "Northern Virginia",
    detail:
      "where attorney ecosystems and case complexity benefit most from structured decision support",
  },
  {
    name: "Beaufort, South Carolina",
    detail:
      "where trauma-informed stability and heritage-aligned trust strengthen client outcomes",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 font-body text-base font-light leading-relaxed text-ink md:text-lg">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-plum"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* About hero */}
      <section
        className="relative flex min-h-[62svh] items-center overflow-x-hidden py-10 md:min-h-[68svh] md:py-12"
        style={katePinkBg}
      >
        <HeroPattern />
        <div className="relative mx-auto grid w-full max-w-[75rem] items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-12 md:px-[5rem] md:py-12 lg:gap-14">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-[2rem] sm:max-w-[20rem] md:mx-0 md:max-w-[22rem] lg:max-w-[24rem]">
            <Image
              src={assetPath("/about-hero-v3.jpg")}
              alt="Calm shoreline at dusk"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 80vw, 384px"
            />
          </div>
          <div>
            <h1 className="font-display text-[2.1rem] font-normal leading-[1.2] tracking-normal text-plum md:text-[3.25rem]">
              About Insightful Divorce Coaching™
            </h1>
            <p className="mt-5 font-body text-[1.05rem] font-medium leading-[1.6] text-plum md:text-[1.15rem]">
              A Structured, Steady, Attorney-Aligned Approach to Divorce Support
            </p>
            <p className="mt-4 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
              Divorce is one of the most complex transitions a person can face.
              It demands clarity, emotional steadiness, and informed
              decision-making — especially when the stakes are high. Insightful
              Divorce Coaching™ provides the structured, trauma-informed support
              clients need to navigate the process with intention rather than
              reactivity.
            </p>
          </div>
        </div>
      </section>

      {/* Practice intro */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <p className="font-body text-base font-light leading-relaxed text-ink md:text-lg">
            I serve clients virtually across the United States, with focused
            support in Northern Virginia and the Beaufort, South Carolina
            region, where attorney ecosystems and client needs align most
            strongly with this practice’s executive-caliber approach.
          </p>
        </div>
      </section>

      {/* My Role */}
      <section className="grid md:grid-cols-2">
        <div className="bg-white px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-xl md:ml-auto md:mr-0 md:max-w-lg lg:max-w-xl">
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              My Role
            </h2>
            <p className="mt-2 font-display text-2xl font-normal text-plum md:text-3xl">
              Alecia Pazant
            </p>
            <p className="mt-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Certified Divorce Coach® · Structured Decision Support ·
              Mediation &amp; Attorney Preparation
            </p>
            <div className="mt-6 space-y-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
              <p>
                I am a Certified Divorce Coach® who specializes in helping
                clients stay grounded, organized, and decision-ready throughout
                the divorce process. My work strengthens the entire professional
                team — especially attorneys — by reducing conflict, improving
                communication, and preparing clients to participate effectively
                in mediation and legal discussions.
              </p>
              <p>
                I do not provide legal advice, therapy, or mediation. Instead, I
                provide the structured preparation and emotional steadiness that
                make legal guidance easier to follow and legal outcomes easier
                to achieve.
              </p>
            </div>
            <Image
              src={assetPath("/cdc-logo.jpg")}
              alt="CDC Certified Divorce Coach® — The Professional Standard for Personal Divorce Coaching®"
              width={220}
              height={122}
              className="mt-8 h-auto w-[12rem] rounded-md bg-white object-contain p-3 shadow-sm md:w-[14rem]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center bg-pink px-6 py-10 md:px-10 md:py-16">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <Image
              src={assetPath("/alecia-headshot.jpg")}
              alt="Alecia Pazant"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* Why This Practice Exists */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:max-w-4xl md:px-10">
          <h2 className="text-center font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Why This Practice Exists
          </h2>
          <p className="mt-5 text-center font-body text-base font-light leading-relaxed text-ink md:text-lg">
            Divorce often overwhelms even the most capable individuals.
            High-stress moments can derail communication, delay decisions, and
            increase conflict. Attorneys frequently report that the greatest
            barriers to progress are not legal issues — but emotional
            reactivity, disorganization, and decision fatigue.
          </p>
          <p className="mt-4 text-center font-display text-xl font-normal tracking-tight text-plum md:text-2xl">
            Insightful Divorce Coaching™ exists to close that gap.
          </p>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white px-6 py-8 md:px-10">
            <p className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Clients receive:
            </p>
            <BulletList items={clientsReceive} />
          </div>
          <p className="mt-8 text-center font-body text-base font-medium leading-relaxed text-plum md:text-lg">
            This is the work that strengthens legal outcomes.
          </p>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-center font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Regional Focus: Where This Work Has the Greatest Impact
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {regions.map((region) => (
              <div
                key={region.name}
                className="rounded-2xl bg-pink-soft px-7 py-8"
              >
                <h3 className="font-display font-normal text-xl leading-snug text-plum md:text-2xl">
                  {region.name}
                </h3>
                <div className="mt-4 space-y-3 font-body text-base font-light leading-relaxed text-ink">
                  {region.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Background */}
      <section className="relative bg-white">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-[28%] bg-pink md:block"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-10 md:py-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] md:mx-0 md:max-w-none">
            <Image
              src={assetPath("/about-value.jpg")}
              alt="Organized planning and clear next steps"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 35vw"
            />
          </div>
          <div>
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              My Background
            </h2>
            <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
              My professional foundation is in organizational effectiveness,
              structured decision-making, and communication systems —
              disciplines that translate directly into divorce coaching. I bring
              a calm operational presence, a clarity-driven mindset, and the
              ability to help clients think clearly during high-stakes moments.
            </p>
            <p className="mt-5 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Clients describe my approach as:
            </p>
            <BulletList items={approachTraits} />
            <p className="mt-6 font-body text-base font-medium leading-relaxed text-plum md:text-lg">
              This is executive-caliber coaching designed for one of life’s most
              consequential transitions.
            </p>
          </div>
        </div>
      </section>

      {/* How I Support You */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="text-center font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            How I Support You
          </h2>
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-white px-6 py-8 md:px-10">
            <p className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Clients work with me to:
            </p>
            <BulletList items={howISupport} />
          </div>
          <p className="mt-8 text-center font-body text-base font-light leading-relaxed text-ink md:text-lg">
            The result is a more efficient legal process, clearer
            communication, and decisions made with confidence rather than
            pressure.
          </p>
        </div>
      </section>

      {/* Serving Clients Nationwide */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Serving Clients Nationwide — With Intentional Regional Expertise
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            While I serve clients virtually across the United States, my
            practice is intentionally focused on:
          </p>
          <div className="mt-8 grid gap-5 text-left sm:grid-cols-2">
            {regionalExpertise.map((item) => (
              <div key={item.name} className="rounded-2xl bg-pink-soft px-6 py-6">
                <h3 className="font-display font-normal text-lg leading-snug text-plum md:text-xl">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-base">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            This dual-market strategy ensures depth, credibility, and
            meaningful impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Ready to Move Forward with Clarity?
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            If you are navigating divorce and want structured, trauma-informed
            support that strengthens your legal process, I invite you to begin
            with a Discovery Session.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
            >
              Request a Discovery Session
            </Link>
            <Link
              href="/services"
              className="border border-plum/25 bg-white px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-plum transition-colors hover:bg-white/80"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
