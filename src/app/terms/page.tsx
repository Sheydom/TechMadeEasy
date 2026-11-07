import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Tech Made Easy with Dominic",
  description: "Booking, payment and cancellation terms for in-home technology lessons with Tech Made Easy with Dominic.",
};

// DRAFT – fill in the [BRACKETED] items, decide your own policies (cancellations,
// payment methods, package expiry) and have this reviewed before publishing.
const BUSINESS = "Tech Made Easy with Dominic";
const EMAIL = "[your email address]";
const PHONE = "[your phone number]";
const UPDATED = "[date]";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "About these terms",
    body: (
      <p>
        These terms apply when you book or receive a lesson or support visit from {BUSINESS} (“I”, “me”, “my”)
        [ABN: add if you have one]. By booking a visit, you agree to them. If anything is unclear, please ask me before
        we begin.
      </p>
    ),
  },
  {
    title: "What I provide",
    body: (
      <>
        <p>
          I provide friendly, one-on-one technology lessons and help in your home, covering things like smartphones,
          tablets, computers, Wi-Fi, printers, Smart TVs and online safety.
        </p>
        <p>
          My focus is on teaching you to use your devices with confidence. I’ll always do my best to solve the problem you
          booked for, but I can’t guarantee a particular result. For example, I can’t promise to recover lost data or
          repair hardware faults. If something needs a repair shop or your provider (such as your internet company), I’ll
          let you know.
        </p>
      </>
    ),
  },
  {
    title: "Booking a visit",
    body: (
      <>
        <p>
          You can request a visit using the form on this website, or by phone, text or email. A booking is confirmed once
          I’ve replied with a date and time. Appointments are usually available on weekday afternoons (from 4:30 pm) and
          Saturday mornings, subject to availability.
        </p>
        <p>
          I visit suburbs in and around Essendon. Other areas may be possible by arrangement, and extra travel charges
          may apply [confirm or remove].
        </p>
      </>
    ),
  },
  {
    title: "Prices and payment",
    body: (
      <>
        <ul>
          <li>Friendly Home Visit (60 minutes): $79</li>
          <li>Extended Learning Session (90 minutes): $109</li>
          <li>Four-Week Learning Package (four 60-minute sessions): $280</li>
        </ul>
        <p>
          These are introductory prices and may change; the price I confirm when you book is the price you pay. Payment is
          due [at the end of each visit / in advance for packages]. I accept [e.g. bank transfer, cash]. If you need to buy
          anything (such as a cable or software), I’ll tell you the cost first and you decide whether to go ahead.
        </p>
      </>
    ),
  },
  {
    title: "Four-Week Learning Package",
    body: (
      <p>
        The package covers four 60-minute sessions, usually one a week. Sessions should be used within [e.g. eight weeks]
        of the first visit. [Explain what happens to unused sessions, and whether refunds apply.]
      </p>
    ),
  },
  {
    title: "Changing or cancelling a booking",
    body: (
      <p>
        Please give me at least [e.g. 24 hours’] notice if you need to change or cancel, so I can offer the time to
        someone else. [State any late-cancellation fee, or say there isn’t one.] If I need to reschedule, I’ll let you
        know as early as I can and arrange a new time with you.
      </p>
    ),
  },
  {
    title: "Your home and comfort",
    body: (
      <>
        <ul>
          <li>Please make sure the devices you want help with are charged and available.</li>
          <li>You’re welcome to have a family member or friend present during the visit.</li>
          <li>Please let me know in advance about pets or anything else I should be aware of.</li>
          <li>
            If I feel unsafe or can’t carry out the visit, I may end it early and we’ll arrange another time [confirm
            how fees apply].
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Your responsibilities",
    body: (
      <ul>
        <li>Keep your own passwords private. I won’t ask you to share them.</li>
        <li>
          Where possible, back up important photos and files before a visit. While I take care, changes to devices always
          carry some risk.
        </li>
        <li>Make sure you’re allowed to use the devices and accounts we work on.</li>
      </ul>
    ),
  },
  {
    title: "Booking for someone else",
    body: (
      <p>
        Family members are welcome to arrange a visit for a loved one. I’ll confirm the details with the person receiving
        the lesson, and the person who books is responsible for payment unless we agree otherwise.
      </p>
    ),
  },
  {
    title: "Your consumer rights",
    body: (
      <p>
        Nothing in these terms limits your rights under the Australian Consumer Law. Services come with guarantees that
        can’t be excluded, including that they’ll be provided with due care and skill.
      </p>
    ),
  },
  {
    title: "Limits on my responsibility",
    body: (
      <p>
        To the extent the law allows, I’m not responsible for losses caused by things outside my reasonable control, such
        as faults in your devices, your internet provider’s services, or third-party apps and websites. [Have a
        professional check this wording, and consider whether you need public liability insurance.]
      </p>
    ),
  },
  {
    title: "Privacy",
    body: (
      <p>
        How I handle your personal information is explained in my <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    title: "Changes and governing law",
    body: (
      <p>
        I may update these terms from time to time; the latest version will always be on this page. These terms are
        governed by the laws of Victoria, Australia.
      </p>
    ),
  },
  {
    title: "Contact",
    body: (
      <p>
        Questions about these terms? Contact me at {EMAIL} or {PHONE}.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 [&_li]:mb-2 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
      <Link href="/" className="font-bold">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)]">Terms of Service</h1>
      <p className="text-[#4A5B6B]">Last updated: {UPDATED}</p>

      {sections.map((s) => (
        <section key={s.title} className="mt-9">
          <h2 className="text-2xl">{s.title}</h2>
          {s.body}
        </section>
      ))}
    </main>
  );
}