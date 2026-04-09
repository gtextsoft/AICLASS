import { Section } from "../Section";

export function WhyMatters() {
  return (
    <Section className="border-y border-black/[0.05] bg-paper-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Context
            </p>
            <h2
              id="why-heading"
              className="mt-4 text-[1.5rem] font-semibold leading-snug tracking-tight text-ink md:text-[1.75rem]"
            >
              Why Business Owners Need to Understand AI Now
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-muted">
              <p>
                Artificial intelligence is no longer confined to research labs.
                It is already influencing how teams sell, serve customers,
                market, operate, and decide—often quietly, inside the software
                you already use.
              </p>
              <p>
                The leaders who understand where AI fits are better positioned
                to streamline workflows, reduce friction in day-to-day
                operations, and allocate attention where it matters most. This
                is not about chasing headlines; it is about clarity,
                execution, and sustainable advantage.
              </p>
              <p>
                This webinar is designed to be practical and strategic: you
                will leave with a sharper view of how AI can support your
                systems—without unnecessary complexity or theoretical detours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
