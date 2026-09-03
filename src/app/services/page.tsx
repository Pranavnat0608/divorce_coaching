import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { assetPath } from "@/lib/assetPath";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Discovery Session, Decision Readiness Package, Ongoing Coaching Support, and optional add-ons with Insightful Divorce Coaching™.",
};

const offerings = [
  {
    name: "Discovery Session",
    tagline: "A gentle, grounded beginning.",
    price: "$200",
    paymentNote:
      "Payment is collected at the time of scheduling to reserve your session.",
    description:
      "Your Discovery Session is a safe, supportive space to pause, breathe, and get clear. We talk through what's happening, what decisions may be ahead, and what kind of support will help you feel more steady and prepared.",
    included: [
      "Initial decision-pathway mapping to help you see your next steps",
      "Space to name what feels overwhelming or unclear",
      "Emotional steadiness and grounding",
      "A simple explanation of mediation vs. attorney pathways",
      "Clear recommendations for what to do next",
      "Optional follow-up summary email so you don't have to remember everything",
    ],
    closing:
      "This session helps you feel less alone, more organized, and more ready to move forward.",
    cta: "Schedule a Discovery Session",
    href: "/contact",
    image: "/service-1.jpg",
    imageAlt: "Woman in a focused coaching conversation",
    imageLeft: true,
  },
  {
    name: "Decision Readiness Package",
    tagline: "Support that helps you feel prepared, steady, and clear.",
    price: "$995",
    paymentNote:
      "Payment is collected upfront at the time of scheduling.",
    description:
      "This package is designed to help you feel emotionally steady and practically prepared for the conversations that shape your divorce — mediation, attorney meetings, financial discussions, and major decisions. You'll gain structure, confidence, and a sense of control during a time that often feels unpredictable.",
    included: [
      "Four 60-minute sessions",
      "Governance-forward decision pathways that bring clarity to complex choices",
      "Mediation readiness so you feel calm and prepared walking into the room",
      "Attorney engagement preparation to help you communicate clearly and confidently",
      "Communication planning that reduces anxiety and increases clarity",
      "Gentle guidance for organizing documents and information",
      "Emotional steadiness woven throughout every session",
      "Light email support between sessions",
      "A personalized Decision Readiness Plan you can rely on",
    ],
    closing:
      "Most clients begin here and then continue with ongoing support as decisions evolve.",
    cta: "Begin the Decision Readiness Package",
    href: "/contact",
    image: "/service-2.jpg",
    imageAlt: "Parent reviewing thoughtful planning materials",
    imageLeft: false,
  },
  {
    name: "Ongoing Coaching Support",
    tagline: "Steady, compassionate support as your divorce unfolds.",
    price: "$995/month",
    paymentNote:
      "Monthly payment is collected at the time of scheduling to reserve your session times.",
    description:
      "Divorce is not a single moment — it's a process. Ongoing Coaching Support gives you a consistent place to land, breathe, and think clearly as new decisions arise. This is ideal for clients who want continued emotional steadiness and structured guidance throughout the journey.",
    included: [
      "Two 60-minute sessions per month",
      "Supportive email check-ins between sessions",
      "Light document review when you need help organizing or preparing",
      "Updated decision pathways as circumstances change",
      "Communication planning for mediation or attorney meetings",
      "Emotional grounding and reassurance",
      "Priority scheduling",
    ],
    closing:
      "Most clients transition into Ongoing Coaching Support after completing the Decision Readiness Package, ensuring they remain supported, steady, and clear throughout the process.",
    cta: "Start Ongoing Coaching Support",
    href: "/contact",
    image: "/service-3.jpg",
    imageAlt: "Organized tools and resources for divorce planning",
    imageLeft: true,
  },
];

const addOns = [
  {
    name: "Emergency Clarity Call",
    price: "$150",
    description:
      "A focused 45-minute session designed to help you stabilize quickly during unexpected developments. This call provides immediate grounding and support so you can respond thoughtfully rather than react from stress.",
    details:
      "Emergency Clarity Calls are scheduled during regular business hours and are typically available within 24–48 hours. This service is booked in advance and is not a 24/7 on-call offering. Payment is collected at the time of scheduling.",
    cta: "Request an Emergency Clarity Call",
  },
  {
    name: "Document Review",
    price: "$95",
    description:
      "Support reviewing communication drafts, co-parenting messages, mediation preparation materials, or other written documents related to your divorce process. This service helps you communicate clearly, calmly, and effectively — especially in situations where tone and wording matter.",
    details:
      "Document Review includes one round of feedback on documents up to 500 words. Turnaround time is typically 2–3 business days. This service focuses on tone, clarity, and communication strategy and does not include legal review or multiple revisions. Payment is collected at the time of submission.",
    cta: "Request Document Review",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-[75rem] px-6 py-10 text-center md:px-[5rem] md:py-12">
          <p className="font-label text-[1rem] font-normal uppercase tracking-[0.6px] text-plum">
            Services &amp; Pricing
          </p>
          <h1 className="mx-auto mt-3 max-w-[75rem] font-display text-[1.85rem] font-normal leading-[1.2] tracking-normal text-plum md:text-[2.75rem] md:leading-[1.2]">
            You don&apos;t have to navigate this alone.
          </h1>
          <p className="mx-auto mt-3 max-w-[48rem] font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
            Divorce can feel overwhelming, disorienting, and heavy. My role is
            to bring calm, clarity, and steady support so you can move through
            this transition with confidence and emotional grounding.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-14 pt-10 md:px-[5rem] md:pb-[5rem] md:pt-12">
        <div className="mx-auto max-w-[75rem] space-y-8 md:space-y-10">
          {offerings.map((item) => (
            <article
              key={item.name}
              className="overflow-hidden rounded-[2.5rem] bg-pink-soft md:rounded-[5rem]"
            >
              <div className="grid md:grid-cols-2">
                <div
                  className={`relative min-h-[14rem] md:min-h-[28rem] ${
                    item.imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={assetPath(item.image)}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16 ${
                    item.imageLeft ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h2 className="font-display text-[1.85rem] font-normal leading-[1.15] text-plum md:text-[2.5rem]">
                    {item.name}
                  </h2>
                  <p className="mt-2 font-body text-[1.05rem] font-medium leading-snug text-plum md:text-[1.15rem]">
                    {item.tagline}
                  </p>
                  <p className="mt-3 font-label text-sm font-normal uppercase tracking-[0.6px] text-gold md:text-base">
                    {item.price}
                  </p>
                  <p className="mt-2 font-body text-[0.95rem] font-light leading-relaxed text-ink-soft md:text-[1rem]">
                    {item.paymentNote}
                  </p>
                  <p className="mt-4 font-body text-[1rem] font-light leading-[1.65] text-ink md:text-[1.05rem]">
                    {item.description}
                  </p>
                  <p className="mt-5 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
                    What&apos;s Included
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {item.included.map((point) => (
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
                  <p className="mt-5 font-body text-[1rem] font-light leading-[1.65] text-ink md:text-[1.05rem]">
                    {item.closing}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={item.href}
                      className="inline-flex rounded-[4px] bg-gold px-5 py-2.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep md:text-base"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white px-6 pb-14 md:px-[5rem] md:pb-16">
        <div className="mx-auto max-w-[75rem]">
          <h2 className="text-center font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.65rem]">
            Optional Add&#8209;On Services
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {addOns.map((item) => (
              <article
                key={item.name}
                className="flex flex-col rounded-[2rem] bg-pink-soft px-8 py-10 md:rounded-[3rem] md:px-10 md:py-12"
              >
                <h3 className="font-display text-[1.5rem] font-normal leading-snug text-plum md:text-[1.85rem]">
                  {item.name}
                </h3>
                <p className="mt-2 font-label text-sm font-normal uppercase tracking-[0.6px] text-gold md:text-base">
                  {item.price}
                </p>
                <p className="mt-4 flex-1 font-body text-[1rem] font-light leading-[1.65] text-ink">
                  {item.description}
                </p>
                <p className="mt-4 font-body text-[0.95rem] font-light leading-relaxed text-ink-soft">
                  {item.details}
                </p>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-[4px] bg-gold px-5 py-2.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
                  >
                    {item.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-16" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display text-[1.85rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
            Payment &amp; Scheduling
          </h2>
          <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.1rem]">
            Payment for all services is collected upfront at the time of
            scheduling. This helps create a clear, steady structure for our work
            together and ensures your session time is reserved just for you.
          </p>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-14 md:py-16"
        style={katePinkBg}
      >
        <HeroPattern />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="font-display font-normal text-4xl leading-none text-plum">
            &ldquo;
          </p>
          <h2 className="mt-1 font-display text-xl font-normal tracking-tight text-plum md:text-3xl">
            Thank goodness for structured support.
          </h2>
          <p className="mt-4 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem]">
            &ldquo;I walked into mediation feeling prepared for the first time.
            She helped me understand what I actually wanted — and how to ask for
            it.&rdquo;
          </p>
          <p className="mt-5 font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
            — Client, Arlington, VA
          </p>
        </div>
      </section>
    </>
  );
}
