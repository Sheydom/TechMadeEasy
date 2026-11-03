import { Section, h2Class } from "./Section";
import { Icon } from "./Icon";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" tone="beige">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className={h2Class}>Ready to make technology easier?</h2>
          <p className="max-w-xl text-xl">Whether you have a quick question or want to learn something new, I’d love to help.</p>
          <a href={site.phoneHref} className="mt-6 flex items-center gap-4 rounded-[20px] border-2 border-teal bg-white px-6 py-5 text-navy no-underline">
            <span className="grid h-[62px] w-[62px] flex-none place-items-center rounded-[18px] bg-teal-dark text-white">
              <Icon name="call" className="h-8 w-8" />
            </span>
            <span>
              Prefer to talk? Call or text
              <b className="block font-display text-[1.6rem]">{site.phone}</b>
            </span>
          </a>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
