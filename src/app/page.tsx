import Link from "next/link";
import PicturePlaceholder from "@/components/PicturePlaceholder";
import { katePinkBg } from "@/lib/katePinkBg";

const pillars = [
  {
    title: "Decision Clarity",
    body: "I help you map your governance options — mediation, collaborative divorce, litigation — so you understand what each path requires of you and what you stand to gain or lose. You make informed choices, not pressured ones.",
    cta: "Explore Decision Clarity",
    href: "/services",
  },
  {
    title: "Mediation Readiness",
    body: "Showing up to mediation unprepared costs you — emotionally and financially. I help you clarify your priorities, anticipate the hard conversations, and walk in with a clear head and a grounded voice.",
    cta: "Explore Mediation Prep",
    href: "/services",
  },
  {
    title: "Attorney Engagement Preparation",
    body: "Legal time is expensive. I help you get organized, articulate your goals, and arrive at every attorney meeting ready — so you use that time wisely, reduce back-and-forth, and stay in command of your own case.",
    cta: "Explore Attorney Prep",
    href: "/services",
  },
];

const testimonials = [
  {
    quote:
      "I walked into mediation feeling prepared for the first time. She helped me understand what I actually wanted — and how to ask for it.",
    attribution: "Client, Durham, NC",
  },
  {
    quote:
      "I used to leave every attorney meeting confused. Alecia helped me get organized and advocate for myself.",
    attribution: "Client, Raleigh, NC",
  },
  {
    quote:
      "I didn't expect a coach to make this much of a difference. She helped me think clearly when everything felt impossible.",
    attribution: "Client, Charlotte, NC",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="relative overflow-hidden md:flex md:h-[calc(100dvh-5.9rem)] md:items-center"
        style={katePinkBg}
      >
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:gap-12 md:px-10 md:py-8 lg:gap-16">
          <div className="flex justify-center md:justify-start">
            <div
              className="relative overflow-hidden rounded-[2rem] bg-white/40 shadow-[0_20px_50px_-28px_rgba(74,14,46,0.35)]"
              style={{
                height: "min(34rem, calc(100dvh - 10rem))",
                aspectRatio: "2 / 3",
                maxWidth: "100%",
              }}
            >
              <PicturePlaceholder className="absolute inset-0 h-full w-full bg-white/50" />
            </div>
          </div>

          <div className="min-w-0">
            <p className="font-display text-2xl font-normal tracking-tight text-plum md:text-3xl">
              Insightful Divorce Coaching
            </p>
            <p className="mt-2 font-body text-sm font-medium tracking-wide text-plum md:text-base">
              Structured. Steady. Forward.
            </p>
            <h1 className="mt-4 font-display text-3xl font-normal leading-[1.12] tracking-tight text-plum md:text-4xl lg:text-[2.75rem]">
              Navigate Your Divorce with Structure, Clarity, and Confidence.
            </h1>
            <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-ink md:text-lg">
              I help you understand your options, prepare for every conversation
              — with your attorney, your mediator, and yourself — so you can make
              decisions you&apos;ll stand behind.
            </p>
            <p className="mt-4 font-label text-xs font-normal uppercase leading-relaxed tracking-[0.6px] text-plum/80 md:text-sm">
              Certified Divorce Coach® · Structured Decision Support · Mediation
              Readiness
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-[#2a0418] transition-colors hover:bg-gold-deep"
              >
                Request a Free Discovery Call
              </Link>
              <Link
                href="/services"
                className="border border-plum/25 px-6 py-3.5 font-body text-sm font-medium text-plum transition-colors hover:border-plum/45 hover:bg-plum/5"
              >
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-pink/40 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10 lg:max-w-5xl">
          <h2 className="font-display text-3xl font-normal tracking-tight text-plum md:text-4xl">
            I&apos;m Alecia P. Hall
          </h2>
          <p className="mt-4 font-body text-sm font-light leading-relaxed text-ink md:mt-5 md:text-base">
            I&apos;m a{" "}
            <span className="font-medium text-plum">
              Certified Divorce Coach®
            </span>{" "}
            with a background in structured decision-making and strategic
            planning. I work with individuals who want to navigate their divorce
            thoughtfully — not reactively.
          </p>
          <p className="mt-3 font-body text-sm font-light leading-relaxed text-ink md:mt-4 md:text-base">
            My coaching is not legal advice, and I am not a mediator. What I
            offer is something different: the{" "}
            <span className="font-medium text-plum">
              structured preparation
            </span>
            ,{" "}
            <span className="font-medium text-plum">
              emotional steadiness
            </span>
            , and{" "}
            <span className="font-medium text-plum">decision clarity</span>{" "}
            that makes every other professional on your team more effective.
            Whether you&apos;re at the beginning of the process or deep in the
            middle of it, I meet you where you are and help you move forward with
            intention.
          </p>
          <p className="mt-5 font-display text-lg font-normal tracking-tight text-plum md:mt-6 md:text-xl">
            Wherever you are in the process, there&apos;s a place to begin.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-14" style={katePinkBg}>
        <div className="mx-auto max-w-[75rem] px-6 md:px-[5rem]">
          <h2 className="text-center font-display text-[2.1rem] font-normal tracking-tight text-plum md:text-[2.65rem]">
            How I Help You Through
          </h2>
          <div className="mt-9 grid gap-6 md:grid-cols-3 md:gap-7">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-3xl bg-white px-7 py-8 text-center"
              >
                <h3 className="font-display text-[1.35rem] font-normal leading-snug tracking-tight text-plum md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 font-body text-[0.9375rem] font-light leading-relaxed text-ink">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-6 inline-flex items-center justify-center rounded-[4px] bg-gold px-5 py-3 font-label text-xs font-normal uppercase tracking-[0.6px] text-[#2a0418] transition-colors hover:bg-gold-deep"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            What Clients Say
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {testimonials.map((item) => (
              <blockquote key={item.attribution}>
                <p className="text-base leading-relaxed text-ink-soft">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-medium text-ink">
                  — {item.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pink-soft py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <h2 className="font-display text-[2.1rem] font-normal leading-[1.2] text-plum md:text-[3.25rem]">
            Ready to build your{" "}
            <em className="italic">roadmap</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-body text-[1.05rem] font-light leading-[1.7] text-ink md:text-[1.15rem]">
            Let&apos;s talk about where you are and how structured support can
            help you move forward — with clarity, steadiness, and decisions you
            can stand behind.
          </p>
          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-[4px] bg-gold px-8 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-[#2a0418] transition-colors hover:bg-gold-deep"
            >
              Request a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
