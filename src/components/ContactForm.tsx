"use client";

import { FormEvent, useState } from "react";

const fieldClass =
  "mt-2 w-full border border-plum/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-plum disabled:opacity-60";

const SITE_NAME = "Insightful Divorce Coaching";
const SCRIPT_URL = process.env.NEXT_PUBLIC_CONTACT_FORM_SCRIPT_URL?.trim() ?? "";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const fullName = [firstName, lastName].filter(Boolean).join(" ");

    if (!firstName || !lastName || !email || !message) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    if (!SCRIPT_URL) {
      setStatus("error");
      setErrorMessage("Contact form is not configured.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      siteName: SITE_NAME,
      fullName,
      email,
      phone: phone || "N/A",
      details: message,
    };

    try {
      // text/plain avoids a CORS preflight; Apps Script still reads JSON from the body
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      let parsed: { result?: string; message?: string } | null = null;
      try {
        parsed = (await res.json()) as { result?: string; message?: string };
      } catch {
        parsed = null;
      }

      if (parsed?.result === "error") {
        setStatus("error");
        setErrorMessage(
          parsed.message || "Something went wrong. Please try again.",
        );
        return;
      }

      if (parsed?.result === "success" || res.ok) {
        form.reset();
        setStatus("success");
        return;
      }

      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    } catch {
      // Apps Script sometimes triggers a network error after a successful write
      // because of redirect/CORS. Treat as success if we got past send.
      form.reset();
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4 py-4" role="status">
        <p className="font-display text-2xl font-normal text-plum">
          Thank you
        </p>
        <p className="font-body text-[1.05rem] font-light leading-relaxed text-ink">
          Your request was sent. I&apos;ll respond within 24 hours.
        </p>
        <button
          type="button"
          className="font-label text-xs font-normal uppercase tracking-[0.6px] text-plum underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm text-plum">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            disabled={status === "submitting"}
            className={fieldClass}
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-plum">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            disabled={status === "submitting"}
            className={fieldClass}
            placeholder="Last name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-plum">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={status === "submitting"}
          className={fieldClass}
          placeholder="Email address"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm text-plum">
          Phone <span className="text-plum/60">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          disabled={status === "submitting"}
          className={fieldClass}
          placeholder="Phone number"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-plum">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "submitting"}
          className={`${fieldClass} resize-y`}
          placeholder="A few sentences about where you are in the process…"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="font-body text-sm text-red-700" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-xs font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting"
          ? "Sending…"
          : "Request a Discovery Session"}
      </button>
    </form>
  );
}
