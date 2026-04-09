import { Section } from "../Section";

const audience = [
  "Business owners",
  "Founders and startup leaders",
  "Executives and operations managers",
  "Coaches and consultants",
  "Entrepreneurs looking to automate and scale",
  "Non-technical leaders who want to understand AI opportunities",
];

export function WhoFor() {
  return (
    <Section className="border-t border-black/[0.05] bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]">
              Who Should Attend
            </h2>
            <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-muted">
              Built for decision-makers who own outcomes—not only tools.
            </p>
          </div>
          <ul className="space-y-0 divide-y divide-black/[0.06] border-t border-b border-black/[0.06]">
            {audience.map((line) => (
              <li
                key={line}
                className="flex items-baseline gap-4 py-4 text-[16px] text-ink"
              >
                <span className="w-1.5 shrink-0 self-center rounded-full bg-accent/80" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
