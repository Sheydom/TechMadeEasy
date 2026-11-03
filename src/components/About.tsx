import { Section, h2Class } from "./Section";
import { Icon } from "./Icon";
import { buttonStyles } from "./Button";
import { PortraitArt } from "./Illustrations";
import { highlights } from "@/lib/content";

export function About() {
  return (
    <Section id="about" tone="beige">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-14">
        {/* Replace <PortraitArt /> with <Image src="/dominic.jpg" alt="Dominic" fill className="object-cover" /> */}
        <div className="mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[36px] bg-tint shadow-soft" role="img" aria-label="Portrait placeholder for Dominic">
          <PortraitArt />
        </div>
        <div>
          <h2 className={h2Class}>Hi, I’m Dominic. Your friendly local tech helper.</h2>
          <p>I’m based around Essendon and have a background in engineering and information technology, including a Diploma of Information Technology.</p>
          <p>I genuinely enjoy helping people understand technology and making complicated things simple.</p>
          <p>My goal isn’t just to fix a problem and leave. I want you to feel confident using your devices independently.</p>
          <p>No rushing, no complicated technical terms, and no question is too small.</p>
          <ul className="mb-7 mt-5 flex list-none flex-wrap gap-3 p-0">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-2 rounded-full border border-line bg-white px-[18px] py-2.5 font-bold text-navy">
                <Icon name={h.icon} className="h-[1.4em] w-[1.4em] text-teal-dark" />
                {h.label}
              </li>
            ))}
          </ul>
          <a href="#contact" className={buttonStyles("primary")}>Get to Know Me</a>
        </div>
      </div>
    </Section>
  );
}
