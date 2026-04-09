import { useId, useState } from "react";
import { Section } from "../Section";

const faqs = [
  {
    q: "Is the webinar really free?",
    a: "Yes. There is no cost to attend the live session. Register to receive the joining link and any updates.",
  },
  {
    q: "Who should attend this webinar?",
    a: "Business owners, founders, executives, consultants, and operators who want a clear, practical view of how AI can support systems and execution—without requiring a technical background.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. The session is framed for decision-makers. Concepts are explained in business terms, with emphasis on application and judgment.",
  },
  {
    q: "Will there be a replay?",
    a: "If a replay is offered, registered attendees will be notified by email. Join live to participate fully and ask questions.",
  },
];

export function FAQ() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="faq"
      className="border-t border-black/[0.05] bg-paper-soft py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const headerId = `${baseId}-header-${index}`;
            const isOpen = openIndex === index;

            return (
              <div key={item.q} className="py-1">
                <h3 className="text-[15px] font-medium leading-snug text-ink">
                  <button
                    type="button"
                    id={headerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{item.q}</span>
                    <span
                      className={`shrink-0 text-gold transition-transform duration-200 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  aria-hidden={!isOpen}
                  inert={!isOpen ? true : undefined}
                  className={`overflow-hidden transition-[max-height] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "max-h-80" : "max-h-0"
                  }`}
                >
                  <p className="pb-5 pr-4 text-[15px] leading-relaxed text-ink-muted">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
