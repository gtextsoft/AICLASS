import type { FormEvent } from "react";
import { FORM_ACTION } from "../../constants";
import { Section } from "../Section";

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  if (FORM_ACTION === "#") {
    e.preventDefault();
  }
}

export function Registration() {
  return (
    <Section id="register" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-20">
          <div className="max-w-xl">
            <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Registration
            </p>
            <h2 className="mt-4 text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]">
              Reserve Your Free Spot
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">
              Register now to secure your place in this free live session and
              receive access details and reminders.
            </p>
          </div>

          <div className="rounded-lg border border-black/[0.06] bg-white p-8 shadow-card md:p-10">
            <form
              action={FORM_ACTION}
              method="post"
              className="space-y-6"
              noValidate
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  name="full_name"
                  type="text"
                  autoComplete="name"
                  required
                  className="w-full rounded-md border border-black/[0.1] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 transition-shadow focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Jordan Mitchell"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-black/[0.1] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 transition-shadow focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="w-full rounded-md border border-black/[0.1] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 transition-shadow focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="mb-2 block text-[13px] font-medium text-ink"
                >
                  Business Name
                </label>
                <input
                  id="business"
                  name="business_name"
                  type="text"
                  autoComplete="organization"
                  required
                  className="w-full rounded-md border border-black/[0.1] bg-paper px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/50 transition-shadow focus:border-accent/40 focus:outline-none focus:ring-2 focus:ring-accent/20"
                  placeholder="Apex Advisory Group"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-accent py-3.5 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Register Now
              </button>
            </form>

            <p className="mt-6 text-center text-[13px] leading-relaxed text-ink-muted">
              We respect your privacy. Your details are used only for webinar
              access and reminders. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
