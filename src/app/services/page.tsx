import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroPattern from "@/components/HeroPattern";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Discovery Session, Decision Readiness Package, and Ongoing Coaching Support with Insightful Divorce Coaching™.",
};

const offerings = [
  {
    name: "Discovery Session",
    tagline: "A single focused session to map where you are",
    description:
      "A single focused session to map where you are, what you're facing, and what clarity would look like for you. No commitment required.",
    cta: "Book a Discovery Session",
    href: "/contact",
    image: "/service-1.jpg",
    imageAlt: "Woman in a focused coaching conversation",
    imageLeft: true,
  },
  {
    name: "Decision Readiness Package",
    tagline: "Structured support through the decisions that matter most",
    description:
      "A structured series of sessions that moves you through governance mapping, mediation prep, and attorney engagement preparation — step by step.",
    cta: "Explore This Package",
    href: "/contact",
    image: "/service-2.jpg",
    imageAlt: "Parent reviewing thoughtful planning materials",
    imageLeft: false,
  },
  {
    name: "Ongoing Coaching Support",
    tagline: "Continued partnership as your divorce progresses",
    description:
      "Continued partnership as your divorce progresses — helping you stay clear-headed and grounded through each new phase, conversation, and decision point.",
    cta: "Ask About Ongoing Support",
    href: "/contact",
    image: "/service-3.jpg",
    imageAlt: "Organized tools and resources for divorce planning",
    imageLeft: true,
  },
];

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
            You&apos;ve decided — or you&apos;re close. Now you need structure
            for what comes next.
          </h1>
          <p className="mx-auto mt-3 max-w-[48rem] font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
            Whether you&apos;re preparing for mediation, getting organized for
            your attorney, or looking for steady guidance through the process —
            choose the support that fits where you are right now.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-14 pt-10 md:px-[5rem] md:pb-[5rem] md:pt-12">
        <div className="mx-auto max-w-[75rem]">
          <h2 className="mx-auto max-w-[62.5rem] text-center font-display text-[1.85rem] font-normal leading-[1.2] text-plum md:text-[2.75rem] md:leading-[1.2]">
            Choose the type of support that fits what you need right now:
          </h2>

          <div className="mt-10 space-y-8 md:mt-12 md:space-y-10">
            {offerings.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-[2.5rem] bg-pink-soft md:rounded-[5rem]"
              >
                <div className="grid md:grid-cols-2">
                  <div
                    className={`relative min-h-[16rem] md:min-h-[22rem] ${
                      item.imageLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className={`flex flex-col justify-center px-8 py-10 text-center md:gap-3 md:px-20 md:py-20 ${
                      item.imageLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <h3 className="font-display text-[2rem] font-normal leading-[1.2] text-plum md:text-[3.6rem] md:leading-[1.2]">
                      {item.name}
                    </h3>
                    <p className="mt-3 font-body text-[1.15rem] font-medium leading-[1.3] text-plum md:mt-0 md:text-[1.3rem]">
                      {item.tagline}
                    </p>
                    <p className="mx-auto mt-3 max-w-[27.5rem] font-body text-[1.05rem] font-light leading-[1.6] text-ink md:mt-0 md:text-[1.1rem] md:leading-[1.75]">
                      {item.description}
                    </p>
                    <div className="mt-5 md:mt-3">
                      <Link
                        href={item.href}
                        className="inline-flex rounded-[4px] bg-gold px-5 py-2.5 font-label text-base font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
                      >
                        {item.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
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
