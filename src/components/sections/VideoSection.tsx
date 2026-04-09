import { VideoEmbed } from "../VideoEmbed";
import { Section } from "../Section";

export function VideoSection() {
  return (
    <Section id="preview" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2
          id="preview-heading"
          className="text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]"
        >
          Hear Directly from Dr. Stephen Akintayo
        </h2>
        <p className="mx-auto mt-5 max-w-[52ch] text-[17px] leading-relaxed text-ink-muted">
          Watch this short message to understand why this webinar matters and
          how AI can help business owners build more efficient and future-ready
          companies.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl px-5 md:px-8">
        <VideoEmbed
          title="Message from Dr. Stephen Akintayo"
          aspectClassName="aspect-video"
        />
      </div>
    </Section>
  );
}
