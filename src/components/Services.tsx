import { Section, h2Class, cardClass } from "./Section";
import { Icon } from "./Icon";
import { services } from "@/lib/content";

export function Services() {
  return (
    <Section id="help" tone="beige">
      <div className="text-center">
        <h2 className={h2Class}>A little help makes technology a lot easier.</h2>
        <p className="mx-auto max-w-2xl text-xl">From learning your first smartphone to connecting your printer, I’m here to help.</p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className={cardClass}>
            <div className="mb-4 grid h-[62px] w-[62px] place-items-center rounded-[18px] bg-tint text-teal-dark">
              <Icon name={s.icon} className="h-8 w-8" />
            </div>
            <h3 className="text-[1.3rem]">{s.title}</h3>
            <p>{s.text}</p>
            <a href="#contact" className="font-bold">Learn More</a>
          </article>
        ))}
      </div>
    </Section>
  );
}
