import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PicturePlaceholder from "@/components/PicturePlaceholder";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Alecia Pazant Hall, Certified Divorce Coach® — structured decision support, mediation readiness, and attorney prep.",
};

const credentials = [
  {
    title: "Certified Divorce Coach®",
    detail: "Professional divorce coaching certification",
  },
  {
    title: "Decision Coaching",
    detail: "Structured decision-making and strategic planning",
  },
  {
    title: "Mediation Readiness",
    detail: "Preparation for clear, grounded mediation conversations",
  },
  {
    title: "Attorney Prep",
    detail: "Organized engagement so legal time works harder for you",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hook hero */}
      <section
        className="relative flex min-h-[62svh] items-center overflow-hidden md:min-h-[68svh]"
        style={katePinkBg}
      >
        <div className="relative mx-auto grid w-full max-w-[75rem] items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-12 md:px-[5rem] md:py-12 lg:gap-14">
          <div className="relative mx-auto aspect-square w-full max-w-[18rem] overflow-hidden rounded-[2rem] sm:max-w-[20rem] md:mx-0 md:max-w-[22rem] lg:max-w-[24rem]">
            <PicturePlaceholder className="absolute inset-0 h-full w-full bg-pink-soft/80 text-plum" />
          </div>
          <div>
            <h1 className="font-display text-[2.1rem] font-normal leading-[1.2] tracking-normal text-plum md:text-[3.6rem]">
              About Alecia Pazant Hall
            </h1>
            <p className="mt-5 font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
              If you&apos;re facing one of the most complex decisions of your
              life — wondering how to protect what matters, how to prepare for
              hard conversations, or whether you&apos;re making choices you can
              stand behind — I want you to know something first: you don&apos;t
              have to figure this out alone.
            </p>
          </div>
        </div>
      </section>

      {/* I'm Alecia */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:max-w-4xl md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            I&apos;m Alecia P. Hall
          </h2>
          <p className="mt-5 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            I&apos;m a{" "}
            <span className="font-medium text-plum">
              Certified Divorce Coach®
            </span>{" "}
            with a background in structured decision-making and strategic
            planning. I work with individuals who want to navigate their divorce
            thoughtfully — not reactively.
          </p>
          <p className="mt-4 font-body text-base font-light leading-relaxed text-ink md:text-lg">
            Divorce involves legal processes, financial realities, family
            dynamics, and emotions — all at once. Most people enter it without a
            roadmap. I work with you to build that roadmap — so that when it
            matters most, you&apos;re prepared, not just present.
          </p>
        </div>
      </section>

      {/* My Background */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-center font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            My Background
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-plum/80 md:text-base">
            My coaching draws on specialized training built for structured
            support through divorce:
          </p>
          <div className="mt-8 flex justify-center">
            <Image
              src="/cdc-logo.jpg"
              alt="CDC Certified Divorce Coach® — The Professional Standard for Personal Divorce Coaching®"
              width={220}
              height={122}
              className="h-auto w-[12rem] rounded-md bg-white object-contain p-3 shadow-sm md:w-[14rem]"
            />
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((item) => (
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
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-ink md:text-base">
            My work sits alongside your attorney and mediator — not in place of
            them. I bring the{" "}
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
          </p>
        </div>
      </section>

      {/* Why I Do This Work — story to be finalized */}
      <section className="grid md:grid-cols-2">
        <div className="bg-white px-6 py-14 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto max-w-xl md:ml-auto md:mr-0 md:max-w-lg lg:max-w-xl">
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              Why I Do This Work
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink md:text-lg">
              <p>
                I didn&apos;t come to this field as a distant expert. I came
                because people navigating divorce deserve more than legal process
                alone — they deserve clarity, steadiness, and a way to prepare for
                the conversations that shape their future.
              </p>
              <p>
                Like many of the clients I support, I understand how disorienting
                it is to make consequential decisions while emotions, family
                dynamics, and practical realities collide. That is exactly where
                structured coaching belongs.
              </p>
              <p>
                This work is my answer to a simple belief: when people have the
                right information and the right support, they make thoughtful
                decisions they can stand behind — for themselves and for the
                people they love.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-pink px-6 py-10 md:px-10 md:py-16">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
            <PicturePlaceholder className="absolute inset-0 h-full w-full" />
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="relative bg-white">
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 hidden w-[28%] bg-pink md:block"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-10 md:py-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2rem] md:mx-0 md:max-w-none">
            <PicturePlaceholder className="absolute inset-0 h-full w-full" />
          </div>
          <div>
            <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
              How I Work
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
              My coaching is not legal advice, and I am not a mediator. My role
              isn&apos;t to tell you what to do. It&apos;s to help you slow down,
              see your options clearly, and move forward with intention — so your
              decisions feel grounded, not pressured.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink md:text-lg">
              Through decision clarity, mediation readiness, and attorney
              engagement preparation, I help you build the internal steadiness and
              practical roadmap to engage this process with clarity and
              self-trust — not just survive it.
            </p>
          </div>
        </div>
      </section>

      {/* Where to Start */}
      <section className="bg-pink py-14 md:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2 className="font-display font-normal text-3xl tracking-tight text-plum md:text-4xl">
            Where to Start
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
            You don&apos;t need to have it all figured out to begin. Start with a
            free discovery call to map where you are — or explore how we can work
            together through structured coaching support.
          </p>
          <p className="mt-4 font-display font-normal text-lg text-plum md:text-xl">
            Wherever you are in this process, you&apos;re welcome here.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-sm font-normal uppercase tracking-[0.6px] text-[#2a0418] transition-colors hover:bg-gold-deep"
            >
              Request a Free Discovery Call
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
