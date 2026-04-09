import { Section } from "../Section";

const items = [
  "How to identify where AI fits into your existing business systems",
  "How to integrate AI into software workflows without unnecessary complexity",
  "How to automate repetitive business processes",
  "How to improve customer support, communication, and follow-up using AI",
  "How to use AI in sales, marketing, and operations",
  "Common mistakes business owners make when adopting AI",
];

export function WhatYouLearn() {
  return (
    <Section id="agenda" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
            Agenda
          </p>
          <h2
            id="agenda-heading"
            className="mt-4 text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]"
          >
            What You Will Learn
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-ink-muted">
            A focused curriculum for owners and operators who want structure,
            not noise.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {items.map((text, i) => (
            <li
              key={text}
              className="group flex gap-5 border border-black/[0.06] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-card"
            >
              <span
                className="font-mono text-[13px] tabular-nums text-gold/90"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-[15px] leading-relaxed text-ink">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
