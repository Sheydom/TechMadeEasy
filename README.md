# Tech Made Easy with Dominic

Next.js (App Router) + React + TypeScript + Tailwind CSS v4.

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck  # TypeScript check
```
Requires Node.js 18.18 or newer.

## Where to edit things
- **Text, prices, suburbs, FAQs, phone, email:** `src/lib/content.ts` (one file, no layout code).
- **Colours and fonts:** `src/app/globals.css` (the `@theme` block) and `src/app/layout.tsx`.
- **Page order:** `src/app/page.tsx`.
- **Photos:** the hero, portrait and family images are SVG illustrations in `src/components/Illustrations.tsx`.
  To use real photos, put them in `/public` and swap the illustration for `next/image`
  (e.g. `<Image src="/dominic.jpg" alt="Dominic" width={420} height={525} />`).

## Booking form
The form posts to `src/app/api/enquiry/route.ts`, which validates and logs the enquiry.
Before launch, add your email or booking service there (e.g. Resend, Formspree, Postmark)
at the `TODO` marker. Replace the placeholder phone number and email in `content.ts`.

## Deploy
Push to GitHub and import the repo at vercel.com. No configuration needed.
