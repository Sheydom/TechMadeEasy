import { Section, h2Class } from "./Section";
import { steps } from "@/lib/content";

export function HowItWorks() {
  return (
    <Section>
      <h2 className={`${h2Class} text-center`}>Getting help is as easy as 1, 2, 3.</h2>
      <ol className="relative m-0 mt-11 grid list-none gap-7 p-0 md:grid-cols-3">
        <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-[38px] hidden border-t-[3px] border-dashed border-teal/60 md:block" />
        {steps.map((s, i) => (
          <li key={s.title} className="relative text-center">
            <div className="mx-auto mb-4 grid h-[76px] w-[76px] place-items-center rounded-full border-[6px] border-cream bg-teal-dark font-display text-3xl font-bold text-white">
              {i + 1}
            </div>
            <h3 className="text-[1.3rem]">{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
