"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { buttonStyles } from "./Button";
import { nav, site } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        headerRef.current &&
        event.target instanceof Node &&
        !headerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex min-h-[68px] max-w-[1160px] items-center justify-between gap-2 px-4 sm:min-h-[76px] sm:gap-4 sm:px-5">
        <a href="#home" aria-label={`${site.name} – home`} className="flex shrink-0 items-center gap-2 whitespace-nowrap font-display text-[1.05rem] font-bold text-navy no-underline sm:gap-3 sm:text-[1.35rem]">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-teal text-white sm:h-11 sm:w-11">
            <Icon name="tablet" />
          </span>
          {site.name}
        </a>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-line bg-cream px-5 pb-5 pt-2 lg:static lg:block lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0 lg:flex-row">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-[10px] px-3.5 py-3.5 text-[1.15rem] font-bold text-navy no-underline hover:bg-tint lg:py-2.5 lg:text-[1rem]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className={buttonStyles("primary", "!hidden min-h-12 whitespace-nowrap px-5 lg:!inline-flex")}>
          Book a Friendly Visit
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
          className="min-h-12 cursor-pointer rounded-xl border-2 border-navy bg-transparent px-3 text-base font-bold text-navy sm:px-4 sm:text-lg lg:hidden"
        >
          Menu
        </button>
      </div>
    </header>
  );
}
