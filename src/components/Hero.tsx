import { Section, artClass } from "./Section";
import { Icon } from "./Icon";
import { buttonStyles } from "./Button";
import { HeroArt } from "./Illustrations";

export function Hero() {
  return (
    <Section id="home">
      <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-tint px-4 py-2 font-bold text-navy">
            <Icon name="pin" />
            Friendly Local Tech Help • Essendon, Melbourne
          </p>
          <h1 className="text-[clamp(2.3rem,6vw,3.7rem)]">Technology doesn’t have to be complicated.</h1>
          <p className="max-w-xl text-xl">
            Friendly, patient, one-on-one technology lessons in the comfort of your own home. Learn to use your phone, tablet, computer and more — at your own pace.
          </p>
          <div className="my-6 flex flex-wrap gap-3.5">
            <a href="#contact" className={buttonStyles("primary")}>Book a Home Visit</a>
            <a href="#help" className={buttonStyles("ghost")}>See How I Can Help</a>
          </div>
          <p className="text-base text-[#4A5B6B]">From $79 per hour • No confusing jargon • Personalised lessons</p>
        </div>
        <div className={artClass} role="img" aria-label="Illustration of Dominic sitting beside a smiling older woman at a kitchen table, helping her with an iPad">
          <HeroArt />
        </div>
      </div>
    </Section>
  );
}
