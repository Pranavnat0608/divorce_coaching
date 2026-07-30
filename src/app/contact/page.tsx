import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import HeroPattern from "@/components/HeroPattern";
import { katePinkBg } from "@/lib/katePinkBg";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free discovery call with Insightful Divorce Coaching™.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden" style={katePinkBg}>
        <HeroPattern />
        <div className="relative mx-auto max-w-[75rem] px-6 py-[4.5rem] text-center md:px-[5rem] md:py-[7.5rem]">
          <p className="font-label text-[1rem] font-normal uppercase tracking-[0.6px] text-plum">
            Contact
          </p>
          <h1 className="mx-auto mt-3 font-display text-[2.1rem] font-normal leading-[1.2] text-plum md:text-[3.6rem] md:leading-[1.2]">
            Ready to build your roadmap?
          </h1>
          <p className="mx-auto mt-3 max-w-[48rem] font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem] md:leading-[1.75]">
            Let&apos;s talk about where you are and how structured support can
            help you move forward.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto grid max-w-[75rem] gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-[5rem]">
          <div>
            <h2 className="font-display text-[2rem] font-normal tracking-tight text-plum md:text-[2.5rem]">
              Request a Free Discovery Call
            </h2>
            <p className="mt-4 max-w-md font-body text-[1.05rem] font-light leading-[1.6] text-ink md:text-[1.1rem]">
              For general inquiries, please use the contact form. For
              time-sensitive matters, you may call{" "}
              <a
                href="tel:+17036891124"
                className="font-medium text-plum underline-offset-2 hover:underline"
              >
                (703) 689-1124
              </a>
              . I respond within 24 hours.
            </p>
            <dl className="mt-10 space-y-5 text-sm">
              <div>
                <dt className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
                  Location
                </dt>
                <dd className="mt-1 font-body font-light text-ink">
                  Serving clients virtually
                </dd>
              </div>
              <div>
                <dt className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
                  Phone
                </dt>
                <dd className="mt-1 font-body font-light text-ink">
                  <a
                    href="tel:+17036891124"
                    className="transition-colors hover:text-plum"
                  >
                    (703) 689-1124
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum">
                  Credentials
                </dt>
                <dd className="mt-1 font-body font-light text-ink">
                  Certified Divorce Coach®
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[1.75rem] bg-pink-soft p-6 md:rounded-[2.5rem] md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
