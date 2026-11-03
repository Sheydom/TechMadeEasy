import type { IconName } from "@/components/Icon";

export const site = {
  name: "Tech Made Easy",
  phone: "0416 356 755", // 
  phoneHref: "tel:+61416356755",
  email: "dominic.knabe@gmail.com",
  area: "Essendon, Victoria",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "How I Can Help", href: "#help" },
  { label: "About Me", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "phone", title: "Smartphones & Tablets", text: "Learn to use your iPhone, Android phone or iPad. Messages, photos, apps and video calls." },
  { icon: "laptop", title: "Computers & Laptops", text: "Learn email, internet browsing, organising files and everyday computer tasks." },
  { icon: "wifi", title: "Wi-Fi & Internet", text: "Help connecting your devices, setting up home internet and understanding Wi-Fi." },
  { icon: "printer", title: "Printers & Devices", text: "Printer installation, wireless connections and everyday device troubleshooting." },
  { icon: "tv", title: "Smart TVs & Streaming", text: "Learn to use Netflix, YouTube, streaming apps and Smart TV functions." },
  { icon: "shield", title: "Online Safety", text: "Learn to recognise suspicious messages, avoid common scams and browse more confidently." },
];

export const steps = [
  { title: "Get in Touch", text: "Tell me what technology you’re having trouble with." },
  { title: "Book a Convenient Time", text: "Choose an available afternoon or Saturday appointment." },
  { title: "Learn at Your Own Pace", text: "I’ll visit your home and guide you through everything, step by step." },
];

export const highlights: { icon: IconName; label: string }[] = [
  { icon: "cap", label: "IT Qualified" },
  { icon: "heart", label: "Friendly & Patient" },
  { icon: "home", label: "Local to Essendon" },
];

export type Plan = {
  name: string;
  price: string;
  duration: string;
  features: string[];
  cta: string;
  badge?: string;
};

export const plans: Plan[] = [
  {
    name: "Friendly Home Visit",
    price: "$79",
    duration: "60 minutes",
    features: ["Personal one-on-one support", "Help with your own devices", "Patient step-by-step guidance", "In-home service"],
    cta: "Book a Visit",
  },
  {
    name: "Extended Learning Session",
    price: "$109",
    duration: "90 minutes",
    features: ["More time for multiple questions", "Ideal for new device setup", "Personalised instruction", "In-home service"],
    cta: "Book a Session",
  },
  {
    name: "Four-Week Learning Package",
    price: "$280",
    duration: "Four 60-minute sessions",
    features: ["Learn gradually over four weeks", "Personalised learning goals", "Practice between appointments", "Build lasting confidence"],
    cta: "Enquire About Package",
    badge: "Great for Building Confidence",
  },
];

export const suburbs = ["Essendon", "Essendon North", "Moonee Ponds", "Niddrie", "Aberfeldie", "Strathmore"];

export const faqs = [
  { q: "Do I need to know anything about technology before booking?", a: "Not at all. Most of my customers are starting from the very beginning, and that’s perfectly fine. We’ll begin wherever you are." },
  { q: "Can you help with both Apple and Android devices?", a: "Yes. I can help with iPhones, iPads, Android phones and tablets, as well as Windows and Mac computers." },
  { q: "Will you come to my home?", a: "Yes. I visit you in your own home, so you can learn on your own devices, with your own Wi-Fi, in a place where you feel comfortable." },
  { q: "Can my family book a lesson for me?", a: "Absolutely. Family members are welcome to arrange a visit for a loved one. Just fill in the form or give me a call and we’ll sort out the details." },
  { q: "What if I need more than one lesson?", a: "That’s very common. You can book single visits as you need them, or choose the Four-Week Learning Package to build your skills gradually." },
  { q: "What times are appointments available?", a: "Appointments are usually available on weekday afternoons (from 4:30 pm) and Saturday mornings. If those don’t suit, let me know and we’ll see what we can do." },
  { q: "Can you help with several devices during one visit?", a: "Yes, as long as there’s time. If you have a few things to work through, the 90-minute Extended Learning Session is a good fit." },
];

export const timeOptions = [
  { value: "weekday", label: "Weekday afternoon (from 4:30 pm)" },
  { value: "weekend", label: "Saturday or Sunday" },
  { value: "other", label: "Other / Please contact me" },
];
