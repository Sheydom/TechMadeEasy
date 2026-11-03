import { NextResponse } from "next/server";

type Enquiry = {
  name?: string;
  phone?: string;
  email?: string;
  suburb?: string;
  help?: string;
  time?: string;
};

export async function POST(request: Request) {
  let body: Enquiry;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim() || !body.suburb?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 422 });
  }

  // TODO: send this enquiry to Dominic (e.g. Resend, Postmark, Formspree or a Google Sheet).
  // For now it is only logged on the server.
  console.log("New enquiry:", body);

  return NextResponse.json({ ok: true });
}
