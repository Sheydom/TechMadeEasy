import { Section, h2Class } from "./Section";
import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <Section id="faqs">
      <h2 className={`${h2Class} text-center`}>Questions people often ask</h2>
      <div className="mx-auto mt-9 max-w-[820px]">
        {faqs.map((f) => (
          <details key={f.q} className="group mb-3.5 rounded-[18px] border border-line bg-white shadow-sm">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-6 py-3.5 text-[1.15rem] font-bold text-navy [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="grid h-9 w-9 flex-none place-items-center rounded-full bg-tint text-2xl leading-none text-teal-dark">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <p className="mx-6 mb-4 mt-0">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
