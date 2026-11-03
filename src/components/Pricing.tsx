import { Section, h2Class, cardClass } from "./Section";
import { Icon } from "./Icon";
import { buttonStyles } from "./Button";
import { plans } from "@/lib/content";

export function Pricing() {
  return (
    <Section id="pricing">
      <h2 className={`${h2Class} text-center`}>Simple, honest pricing. No surprises.</h2>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article key={p.name} className={`${cardClass} relative flex flex-col ${p.badge ? "border-[3px] border-teal lg:-translate-y-2" : ""}`}>
            {p.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-navy px-4 py-1.5 text-[.92rem] font-bold text-white">
                {p.badge}
              </span>
            )}
            <h3 className="text-[1.3rem]">{p.name}</h3>
            <div className="mb-1 mt-2 font-display text-5xl font-bold leading-none text-navy">{p.price}</div>
            <div className="mb-4 text-[#4A5B6B]">{p.duration}</div>
            <ul className="mb-6 flex-1 list-none p-0">
              {p.features.map((f) => (
                <li key={f} className="mb-2.5 flex gap-2.5">
                  <Icon name="check" className="mt-1 h-[1.3em] w-[1.3em] flex-none text-teal-dark" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className={buttonStyles("primary", "w-full")}>{p.cta}</a>
          </article>
        ))}
      </div>
      <p className="mt-7 text-center text-base text-[#4A5B6B]">Introductory pricing. Service area and appointment availability apply.</p>
    </Section>
  );
}
