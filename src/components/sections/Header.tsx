import { useState } from "react";

const nav = [
  { label: "Overview", href: "#overview" },
  { label: "Preview", href: "#preview" },
  { label: "Agenda", href: "#agenda" },
  { label: "Host", href: "#host" },
  { label: "Register", href: "#register" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          className="group flex min-w-0 flex-col leading-tight text-ink transition-opacity hover:opacity-80"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
            Executive Briefing
          </span>
          <span className="truncate text-[15px] font-semibold tracking-tight">
            AI in Business Systems
          </span>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Page sections"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-black/[0.08] text-[13px] font-medium text-ink lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            {mobileOpen ? "×" : "☰"}
          </button>
          <a
            href="#register"
            className="hidden rounded-md bg-accent px-4 py-2 text-[14px] font-medium text-white shadow-sm transition-colors hover:bg-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
          >
            Reserve Your Spot
          </a>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-b border-black/[0.06] bg-paper lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 md:px-8"
          aria-label="Mobile page sections"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-black/[0.03]"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="mt-2 rounded-md bg-accent px-3 py-3 text-center text-[15px] font-medium text-white"
            onClick={() => setMobileOpen(false)}
          >
            Reserve Your Spot
          </a>
        </nav>
      </div>
    </header>
  );
}
