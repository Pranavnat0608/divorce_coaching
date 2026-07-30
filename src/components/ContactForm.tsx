"use client";

const fieldClass =
  "mt-2 w-full border border-plum/15 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-plum";

export default function ContactForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
      noValidate
    >
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
          className={`${fieldClass} resize-y`}
          placeholder="A few sentences about where you are in the process…"
        />
      </div>
      <button
        type="submit"
        className="rounded-[4px] bg-gold px-6 py-3.5 font-label text-xs font-normal uppercase tracking-[0.6px] text-white transition-colors hover:bg-gold-deep"
      >
        Request a Free Discovery Call
      </button>
    </form>
  );
}
