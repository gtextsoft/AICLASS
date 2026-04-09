import { HeroMediaCard } from "../HeroMediaCard";
import { Section } from "../Section";

export function Hero() {
  return (
    <Section
      id="overview"
      className="border-b border-black/[0.05] bg-gradient-to-b from-paper-soft to-paper pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <p className="mb-6 text-[13px] font-medium uppercase tracking-[0.22em] text-gold">
              Free live webinar
            </p>
            <h1 className="max-w-[34ch] animate-fade-up text-balance text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-ink motion-safe:opacity-0 md:text-[2.125rem] lg:text-[2.375rem]">
              How Business Owners Can Integrate AI Into Their Software and
              Build Smarter, Faster, More Profitable Companies
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17px] leading-relaxed text-ink-muted md:text-[18px]">
              Join Dr. Stephen Akintayo for this free live webinar and learn how
              to apply AI in your business systems to automate operations,
              improve performance, and stay ahead in a rapidly changing market.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#register"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-accent-deep"
              >
                Claim My Free Spot
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-md border border-ink/12 bg-white px-6 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink/20 hover:bg-paper-soft"
              >
                Watch Video
              </a>
            </div>

            <ul className="mt-12 flex flex-col gap-3 border-t border-black/[0.06] pt-10 text-[14px] text-ink-muted md:flex-row md:flex-wrap md:gap-x-10 md:gap-y-2">
              <li className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-px w-6 shrink-0 bg-gold/80"
                  aria-hidden
                />
                Trusted by ambitious business leaders
              </li>
              <li className="flex items-start gap-2.5">
                <span
                  className="mt-2 h-px w-6 shrink-0 bg-gold/80"
                  aria-hidden
                />
                Practical strategies for non-technical decision-makers
              </li>
              <li className="flex items-start gap-2.5 md:basis-full lg:basis-auto">
                <span
                  className="mt-2 h-px w-6 shrink-0 bg-gold/80"
                  aria-hidden
                />
                Free live session with actionable insights
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-black/[0.04] to-transparent" />
            <div className="relative">
              <HeroMediaCard />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
