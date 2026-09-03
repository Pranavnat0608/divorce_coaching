import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { assetPath } from "@/lib/assetPath";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alecia Pazant, Certified Divorce Coach® — governanceforward divorce coaching for clarity, communication, and decision-making.",
};

const whatIProvide = [
  {
    title: "Governanceforward decision pathways",
    detail:
      "Structured thinking that helps you understand options, implications, and next steps.",
  },
  {
    title: "Mediation readiness",
    detail:
      "Preparation that strengthens clarity, communication, and confidence before entering the mediation room.",
  },
  {
    title: "Attorney engagement preparation",
    detail:
      "Support that helps you prepare questions, organize information, and communicate effectively with legal professionals.",
  },
  {
    title: "Emotional steadiness",
    detail:
      "Grounded guidance woven throughout every session so you can make decisions from a place of clarity rather than crisis.",
  },
];

const clientsValue = [
  "My ability to translate complexity into clear next steps",
  "My calm operational presence during emotionally charged moments",
  "My structured preparation for mediation readiness and attorney engagement",
  "My blend of emotional steadiness and strategic decision support",
  "My commitment to helping clients feel organized, prepared, and empowered",
];

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
              Insightful Divorce Coaching™
            </h1>
            <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
              Governanceforward divorce coaching that strengthens clarity,
              communication, and decision-making during one of life&apos;s most
              complex transitions.
            </p>
            <p className="mt-4 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
              I help you get clear, organized, emotionally steady, and fully
              prepared for the conversations that shape your divorce — whether
              with a mediator or an attorney.
            </p>
          </div>
        </div>
      </section>

      {/* Practice intro */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <p className="font-body text-base font-light leading-relaxed text-ink md:text-lg">
            At Insightful Divorce Coaching™, clients receive structured, calm,
            and strategic support designed to reduce overwhelm and increase
            readiness. Divorce is not only an emotional experience — it is a
            decision-making environment. My coaching provides the frameworks,
            preparation, and steadiness needed to navigate that environment with
            confidence.
          </p>
        </div>
      </section>

      {/* What I Provide */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-center font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            What I Provide
          </h2>
          <div className="mt-8 flex justify-center">
            <Image
              src={assetPath("/cdc-logo.jpg")}
              alt="CDC Certified Divorce Coach® — The Professional Standard for Personal Divorce Coaching®"
              width={220}
              height={122}
              className="h-auto w-[12rem] rounded-md bg-white object-contain p-3 shadow-sm md:w-[14rem]"
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatIProvide.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white px-5 py-8 text-center"
              >
                <div
                  aria-hidden
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink"
                >
                  <span className="h-2 w-2 rounded-full bg-plum" />
                </div>
                <h3 className="font-display font-normal text-lg leading-snug text-plum md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            My Approach
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            Insightful Divorce Coaching™ blends structured decision support with
            compassionate guidance. Clients experience a calm, organized process
            that helps them think clearly, communicate effectively, and move
            through divorce with greater stability and confidence.
          </p>
        </div>
      </section>

      {/* About Me */}
      <section className="grid md:grid-cols-2">
        <div className="bg-white px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-xl md:ml-auto md:mr-0 md:max-w-lg lg:max-w-xl">
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              About Me
            </h2>
            <p className="mt-2 font-display text-2xl font-normal text-plum md:text-3xl">
              Alecia Pazant
            </p>
            <p className="mt-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
              Certified Divorce Coach® · GovernanceForward Decision Support ·
              Mediation &amp; Attorney Preparation
            </p>
            <div className="mt-6 space-y-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
              <p>
                I am a Certified Divorce Coach who brings a governanceforward,
                clarity-building approach to one of life&apos;s most challenging
                transitions. With more than two decades of experience in
                organizational effectiveness, decision pathways, and executive
                advisory, I help clients navigate divorce with structure,
                steadiness, and confidence.
              </p>
              <p>
                Having personally experienced divorce, I understand how
                overwhelming the decisions, conversations, and emotions can feel.
                That lived experience informs my calm, grounded, and structured
                approach to coaching — allowing me to support clients with both
                professional rigor and genuine empathy.
              </p>
              <p>
                My coaching is grounded in the belief that divorce is not only
                emotional — it is deeply operational. Clients must make
                decisions, prepare for conversations, organize information, and
                communicate under pressure. I help you do all of that with
                clarity and calm.
              </p>
            </div>
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

      {/* What Clients Value */}
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
              What Clients Value
            </h2>
            <ul className="mt-6 space-y-3 font-body text-base font-light leading-relaxed text-ink md:text-lg">
              {clientsValue.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why I Do This Work */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Why I Do This Work
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            I founded Insightful Divorce Coaching™ to give clients a place where
            emotional steadiness meets structured decision-making. Divorce can
            feel disorienting, but you do not have to navigate it alone. I help
            you think clearly, communicate effectively, and move forward with
            confidence.
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
