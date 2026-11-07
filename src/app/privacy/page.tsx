import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tech Made Easy with Dominic",
  description: "How Tech Made Easy with Dominic collects, uses and protects your personal information.",
};

// DRAFT – fill in the [BRACKETED] items, confirm every statement matches how
// the business really operates, and have it reviewed before publishing.
const BUSINESS = "Tech Made Easy with Dominic";
const EMAIL = "[your email address]";
const PHONE = "[your phone number]";
const UPDATED = "[date]";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who I am",
    body: (
      <p>
        {BUSINESS} (“I”, “me”, “my”) is a small in-home technology tutoring service based in Essendon, Victoria
        [ABN: add if you have one]. This policy explains what personal information I collect, why I collect it, and how
        I look after it. I’ve tried to keep it in plain English.
      </p>
    ),
  },
  {
    title: "What information I collect",
    body: (
      <>
        <p>When you contact me or book a visit, I may collect:</p>
        <ul>
          <li>your name, phone number and (optionally) email address;</li>
          <li>your suburb or home address, so I can visit you;</li>
          <li>what you’d like help with and your preferred appointment times;</li>
          <li>notes about your devices and what we covered, so I can help you better next time;</li>
          <li>if a family member books for you, their contact details as well.</li>
        </ul>
        <p>I don’t ask for credit card details through this website, and I don’t collect more than I need.</p>
      </>
    ),
  },
  {
    title: "How I collect it",
    body: (
      <p>
        I collect information directly from you: through the enquiry form on this website, by phone, text or email, and
        during visits. If a family member arranges a lesson for you, I’ll collect your details from them and will confirm
        with you directly.
      </p>
    ),
  },
  {
    title: "Why I use it",
    body: (
      <ul>
        <li>to reply to your enquiry and arrange, confirm or change appointments;</li>
        <li>to provide lessons and support that suit you and your devices;</li>
        <li>to keep simple records of visits and payments;</li>
        <li>to meet my legal and tax obligations.</li>
      </ul>
    ),
  },
  {
    title: "Visits to your home and your devices",
    body: (
      <>
        <p>
          Because lessons happen in your home and on your own devices, I may see things like photos, messages, emails or
          apps while helping you. I only access what’s needed for the lesson, and only with your permission.
        </p>
        <ul>
          <li>I don’t record, copy or keep the contents of your devices.</li>
          <li>I won’t ask you to share your passwords. If a password is needed, you type it in yourself.</li>
          <li>I’ll explain what I’m doing as I go, and you can ask me to stop at any time.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Who I share it with",
    body: (
      <>
        <p>I don’t sell your personal information, and I don’t use it for advertising.</p>
        <p>
          I only share it where needed to run the service, for example with an email, booking or website provider that
          handles enquiries on my behalf, or if the law requires it. [List the actual providers you use, e.g. your
          website host and email service.] Some of these providers may store information on servers outside Australia.
        </p>
      </>
    ),
  },
  {
    title: "Keeping your information safe",
    body: (
      <p>
        I take reasonable steps to protect your information from loss, misuse and unauthorised access, such as using
        password-protected devices and accounts. I keep information only as long as I need it for the purposes above, and
        then delete or de-identify it. [Add how long you keep records, if you have a set period.]
      </p>
    ),
  },
  {
    title: "This website",
    body: (
      <p>
        This website only uses the information you type into the enquiry form. [If you add analytics, cookies or other
        tracking tools later, describe them here.] Links to other websites are provided for convenience; I’m not
        responsible for their privacy practices.
      </p>
    ),
  },
  {
    title: "Seeing or correcting your information",
    body: (
      <p>
        You can ask to see the personal information I hold about you, ask me to correct it, or ask me to delete it, by
        contacting me using the details below. I’ll respond within a reasonable time.
      </p>
    ),
  },
  {
    title: "Questions or complaints",
    body: (
      <>
        <p>
          If you have a concern about how I’ve handled your information, please contact me first at {EMAIL} or {PHONE} and
          I’ll do my best to put things right. If you’re not satisfied, you can contact the Office of the Australian
          Information Commissioner (OAIC) at oaic.gov.au.
        </p>
      </>
    ),
  },
  {
    title: "Changes to this policy",
    body: <p>I may update this policy from time to time. The latest version will always be on this page.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-14 [&_li]:mb-2 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6">
      <Link href="/" className="font-bold">
        ← Back to home
      </Link>
      <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)]">Privacy Policy</h1>
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