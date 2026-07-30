import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-plum text-nav-text">
      <div className="mx-auto flex max-w-[75rem] flex-col gap-10 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-[5rem]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Image
            src="/insightful-logo.png"
            alt="Insightful Divorce Coaching"
            width={88}
            height={88}
            className="h-[4.5rem] w-[4.5rem] rounded-md bg-white object-contain"
          />
          <div>
            <p className="font-display text-2xl font-normal">
              Insightful Divorce Coaching
            </p>
            <p className="mt-2 font-label text-sm font-normal uppercase tracking-[0.6px] text-nav-text/70">
              Structured. Steady. Forward.
            </p>
            <p className="mt-3 max-w-sm font-body text-sm font-light leading-relaxed text-nav-text/70">
              Certified Divorce Coach® · Serving clients virtually
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <Image
            src="/cdc-logo.jpg"
            alt="CDC Certified Divorce Coach® — The Professional Standard for Personal Divorce Coaching®"
            width={180}
            height={100}
            className="h-auto w-[10.5rem] rounded-md bg-white object-contain p-2"
          />
          <nav className="flex flex-wrap gap-6 font-label text-[0.875rem] font-normal uppercase tracking-[0.6px] text-nav-text/75">
            <Link
              href="/about"
              className="transition-colors hover:text-nav-text"
            >
              About
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-nav-text"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-nav-text"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-nav-text/15 px-6 py-5 text-center font-body text-xs font-light leading-relaxed text-nav-text/55 md:px-[5rem] md:text-left">
        <div className="mx-auto max-w-[75rem] space-y-2">
          <p>
            © {new Date().getFullYear()} Insightful Divorce Coaching. All rights
            reserved.
          </p>
          <p>
            Coaching services only — not legal, financial, or therapeutic advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
