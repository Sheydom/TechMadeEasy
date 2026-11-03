import { Section, h2Class, artClass } from "./Section";
import { buttonStyles } from "./Button";
import { FamilyArt } from "./Illustrations";

export function Family() {
  return (
    <Section tone="navy">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className={`${h2Class} !text-white`}>Give your parents the gift of confidence with technology.</h2>
          <p className="mb-6 text-xl">
            Want to help Mum or Dad feel more comfortable with their smartphone, tablet or computer? I offer patient, friendly lessons in their own home so they can stay connected with the people who matter most.
          </p>
          <a href="#contact" className={buttonStyles("light")}>Arrange a Visit for a Loved One</a>
        </div>
        <div className={`${artClass} !bg-[#244560]`} role="img" aria-label="Illustration of an older woman smiling during a video call with her family on a tablet">
          <FamilyArt />
        </div>
      </div>
    </Section>
  );
}
