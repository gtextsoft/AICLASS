import { HOST_IMAGE_URL } from "../../constants";
import { Section } from "../Section";

export function AboutHost() {
  return (
    <Section id="host" className="bg-ink text-paper py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-20 lg:items-start">
          <figure className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-white/5">
              <img
                src={HOST_IMAGE_URL}
                alt="Dr. Stephen Akintayo"
                className="h-full w-full object-cover"
                width={680}
                height={850}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <div className="min-w-0 pt-2">
            <p className="text-[13px] font-medium uppercase tracking-[0.22em] text-gold-soft">
              Your host
            </p>
            <h2 className="mt-5 text-[1.5rem] font-semibold tracking-tight md:text-[1.75rem]">
              Meet Dr. Stephen Akintayo
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-white/78">
              <p>
                Dr. Stephen Akintayo is a global entrepreneur, investor,
                business strategist, and mentor who has helped thousands of
                entrepreneurs build and scale successful businesses.
              </p>
              <p>
                In this webinar, he shares practical insights on how business
                owners can use AI to improve operations, strengthen systems,
                and create long-term competitive advantage—communicated with the
                clarity executives expect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
