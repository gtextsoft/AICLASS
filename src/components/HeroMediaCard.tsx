/**
 * Editorial media block — links to the full video section to avoid duplicate embeds.
 */
export function HeroMediaCard() {
  return (
    <a
      href="#preview"
      className="group relative block overflow-hidden rounded-xl border border-black/[0.06] bg-ink shadow-lift transition-shadow duration-300 hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper"
    >
      <div className="aspect-video bg-ink">
        <div className="flex h-full flex-col items-center justify-center px-8 text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
            Session preview
          </span>
          <div
            className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-transform duration-300 group-hover:scale-[1.03]"
            aria-hidden
          >
            <svg
              className="ml-1 h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7L8 5z" />
            </svg>
          </div>
          <p className="mt-6 max-w-[28ch] text-[15px] leading-snug text-white/75">
            Watch Dr. Akintayo&apos;s short message on why this briefing matters.
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 bg-white/[0.04] px-4 py-3 text-center text-[13px] text-white/50 transition-colors group-hover:text-white/65">
        Opens the full video below
      </p>
    </a>
  );
}
