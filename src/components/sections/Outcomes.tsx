import { Section } from "../Section";

const outcomes = [
  "A clearer understanding of AI opportunities inside your business",
  "Practical ideas for improving software workflows",
  "Stronger decision-making around automation",
  "A better framework for adopting AI strategically",
  "Confidence to begin implementing AI in practical, measured ways",
];

export function Outcomes() {
  return (
    <Section className="bg-paper-soft py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="max-w-xl text-[1.5rem] font-semibold tracking-tight text-ink md:text-[1.75rem]">
          What You Will Walk Away With
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {outcomes.map((item, index) => (
            <li
              key={item}
              className="flex gap-5 border-l-2 border-gold/50 pl-6"
            >
              <span className="sr-only">{index + 1}. </span>
              <span className="text-[16px] leading-relaxed text-ink">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
