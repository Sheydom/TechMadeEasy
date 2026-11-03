const base =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 px-7 text-[1.08rem] font-bold no-underline transition-colors cursor-pointer";

const variants = {
  primary: "border-teal-dark bg-teal-dark text-white hover:bg-[#215a53] hover:border-[#215a53]",
  ghost: "border-navy bg-transparent text-navy hover:bg-navy hover:!text-white",
  light: "border-white bg-white text-navy hover:bg-tint",
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles(variant: ButtonVariant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}
