import type { ReactNode } from "react";

const tones = {
  cream: "",
  beige: "bg-beige",
  navy: "bg-navy text-[#EAF0F5]",
} as const;

export function Section({
  id,
  tone = "cream",
  children,
}: {
  id?: string;
  tone?: keyof typeof tones;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-14 md:py-[72px] ${tones[tone]}`}>
      <div className="mx-auto max-w-[1160px] px-5">{children}</div>
    </section>
  );
}

export const h2Class = "text-[clamp(1.8rem,4.2vw,2.6rem)]";
export const cardClass = "rounded-[22px] border border-[#EFE8DA] bg-white p-7 shadow-soft";
export const artClass = "overflow-hidden rounded-[28px] bg-tint shadow-soft";
