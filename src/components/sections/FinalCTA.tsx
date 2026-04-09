import { Section } from "../Section";

export function FinalCTA() {
  return (
    <Section
      id="closing"
      className="border-t border-black/[0.06] bg-gradient-to-b from-paper to-paper-soft py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="text-balance text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.85rem]">
          Do Not Let Your Business Fall Behind in the AI Era
        </h2>
        <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-muted">
          Join Dr. Stephen Akintayo for this free webinar and learn how to use
          AI to build smarter systems, improve execution, and position your
          business for long-term growth.
        </p>
        <div className="mt-10">
          <a
            href="#register"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3.5 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-accent-deep"
          >
            Claim My Free Spot
          </a>
        </div>
      </div>
    </Section>
  );
}
