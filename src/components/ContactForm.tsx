"use client";

import { useState, type FormEvent } from "react";
import { buttonStyles } from "./Button";
import { timeOptions } from "@/lib/content";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "min-h-14 w-full rounded-[14px] border-2 border-[#A9B6C2] bg-white px-4 py-3 text-ink focus:border-teal-dark";
const label = "mb-1.5 block font-bold text-navy";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.name?.trim() || !data.phone?.trim() || !data.suburb?.trim()||!data.help?.trim()) {
      setStatus("error");
      setMessage("Please fill in required fields so I can help you.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thank you! I’ll be in touch soon to arrange a time.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Sorry, something went wrong. Please call me instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-[#EFE8DA] bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-5">
        <label htmlFor="name" className={label}>Full name</label>
        <input id="name" name="name" type="text" autoComplete="name" required className={field} />
      </div>
      <div className="mb-5">
        <label htmlFor="phone" className={label}>Phone number</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required className={field} />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className={label}>Email address <span className="font-normal text-[#4A5B6B]">(optional)</span></label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>
      <div className="mb-5">
        <label htmlFor="suburb" className={label}>Suburb</label>
        <input id="suburb" name="suburb" type="text" autoComplete="address-level2" required className={field} />
      </div>
      <div className="mb-5">
        <label htmlFor="help" className={label}>What would you like help with?</label>
        <textarea id="help" name="help" rows={4} className={`${field} min-h-[120px] resize-y`} />
      </div>
      <fieldset className="mb-5 border-0 p-0">
        <legend className={`${label} p-0`}>Preferred appointment time</legend>
        {timeOptions.map((t, i) => (
          <label key={t.value} className="mb-2.5 flex min-h-[52px] cursor-pointer items-center gap-3 rounded-[14px] border-2 border-[#A9B6C2] px-4 py-2 has-[:checked]:border-teal-dark has-[:checked]:bg-tint">
            <input type="radio" name="time" value={t.value} defaultChecked={i === 0} className="m-0 h-6 w-6 accent-teal-dark" />
            {t.label}
          </label>
        ))}
      </fieldset>
      <button type="submit" disabled={status === "sending"} className={buttonStyles("primary", "w-full disabled:opacity-70")}>
        {status === "sending" ? "Sending…" : "Request a Friendly Visit"}
      </button>
      <p role="status" aria-live="polite" className={`mb-0 mt-4 rounded-[14px] bg-tint px-5 py-4 font-bold text-navy ${message ? "block" : "hidden"} ${status === "error" ? "!bg-[#FBE9E7]" : ""}`}>
        {message}
      </p>
    </form>
  );
}
