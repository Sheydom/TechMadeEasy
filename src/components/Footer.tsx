import { Icon } from "./Icon";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-beige pb-28 pt-14 md:pb-14">
      <div className="mx-auto max-w-[1160px] px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3 font-display text-[1.35rem] font-bold text-navy no-underline">
              <span className="grid h-11 w-11 place-items-center rounded-[13px] bg-teal text-white"><Icon name="tablet" /></span>
              {site.name}
            </a>
            <p className="mt-3.5">Friendly, patient in-home technology lessons for seniors and their families, with Dominic.</p>
          </div>
          <div>
            <h3 className="font-sans text-base">Explore</h3>
            <ul className="m-0 list-none p-0">
              {nav.filter((n) => n.href !== "#home").map((n) => (
                <li key={n.href} className="mb-1.5"><a href={n.href}>{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-base">Service area</h3>
            <ul className="m-0 list-none p-0">
              <li className="mb-1.5">Essendon &amp; Essendon North</li>
              <li className="mb-1.5">Moonee Ponds</li>
              <li className="mb-1.5">Niddrie, Aberfeldie, Strathmore</li>
              <li className="mb-1.5">Nearby suburbs by arrangement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-base">Contact</h3>
            <ul className="m-0 list-none p-0">
              <li className="mb-1.5">Phone: {site.phone}</li>
              <li className="mb-1.5">Email: {site.email}</li>
              <li className="mb-1.5">{site.area}</li>
            </ul>
          </div>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-5 border-t border-line pt-5 text-[.95rem] text-[#4A5B6B]">
          <span>© {new Date().getFullYear()} Tech Made Easy with Dominic.</span>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
