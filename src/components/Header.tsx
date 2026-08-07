"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const navLinkStyle = { color: "#e8f4f8" as const };

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-plum">
      <div className="mx-auto flex h-[4.5rem] max-w-[75rem] items-center justify-between gap-4 px-6 md:h-[5.9rem] md:px-[5rem]">
        <Link
          href="/"
          scroll
          className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
          }}
        >
          <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-md bg-white p-0.5 sm:h-12 sm:w-12">
            <Image
              src={assetPath("/insightful-logo.png")}
              alt=""
              width={88}
              height={88}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span
            className="min-w-0 font-display text-[0.9rem] font-normal leading-snug tracking-tight sm:text-lg md:text-[1.35rem]"
            style={navLinkStyle}
          >
            Insightful Divorce Coaching™
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll
              className="font-label text-[0.875rem] font-normal uppercase tracking-[0.6px] hover:underline hover:underline-offset-4"
              style={navLinkStyle}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "auto" })
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 shrink-0 items-center justify-center md:hidden"
          style={navLinkStyle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-plum md:hidden">
          <div className="flex h-full flex-col justify-center gap-8 px-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                scroll
                className="font-display text-4xl font-normal"
                style={navLinkStyle}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
