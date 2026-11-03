import { Section, h2Class, artClass } from "./Section";
import { Icon } from "./Icon";
import { MapArt } from "./Illustrations";
import { suburbs } from "@/lib/content";

export function ServiceArea() {
  return (
    <Section tone="beige">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className={h2Class}>Proudly helping our local community.</h2>
          <ul className="my-6 flex list-none flex-wrap gap-3 p-0">
            {suburbs.map((s) => (
              <li key={s} className="flex items-center gap-2 rounded-full border border-line bg-white px-[18px] py-2.5 font-bold text-navy">
                <Icon name="pin" className="h-[1.3em] w-[1.3em] text-teal-dark" />
                {s}
              </li>
            ))}
          </ul>
          <p>Surrounding suburbs by arrangement.</p>
        </div>
        <div className={artClass} role="img" aria-label={`Simple illustrated map with ${suburbs.join(", ")}`}>
          <MapArt />
        </div>
      </div>
    </Section>
  );
}
