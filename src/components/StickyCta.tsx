import { Icon } from "./Icon";
import { buttonStyles } from "./Button";
import { site } from "@/lib/content";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2.5 border-t border-line bg-cream/95 px-3.5 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-[0_-6px_20px_rgba(25,50,74,0.1)] md:hidden">
      <a href={site.phoneHref} className={buttonStyles("primary", "flex-1 !gap-1 !whitespace-nowrap !px-2 !text-[0.9rem]")}>
        <Icon name="call" /> Call Dominic
      </a>
      <a href="#contact" className={buttonStyles("ghost", "flex-1 !whitespace-nowrap !px-2 !text-[0.9rem]")}>Book a Visit</a>
    </div>
  );
}
