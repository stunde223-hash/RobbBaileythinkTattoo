# ThINK Tattoo · Robb Bailey

A local-first tattoo portfolio website built with Vite, HTML, CSS, and JavaScript. Includes 75 supplied photographs, locally hosted fonts, a dimensional artist portrait, a filterable portfolio, keyboard-accessible image viewer, service accordions, FAQs, an email inquiry builder, and privacy/terms pages.

## Run on your laptop

Install Node.js 22 or newer (Node.js 24 LTS recommended) and Git. Open Terminal or PowerShell:

```sh
git clone https://github.com/stunde223-hash/RobbBaileythinkTattoo.git
cd RobbBaileythinkTattoo
npm ci
npm run dev
```

Open `http://127.0.0.1:5173` in your browser. The development server binds to your laptop's loopback interface, so it is not exposed to other devices. Keep the terminal open. Press Ctrl+C to stop. If port 5173 is busy, Vite prints the alternative port it selected.

For later updates, stop the server, run `git pull` and `npm ci`, then `npm run dev` again.

## Production build (does not deploy)

```sh
npm run build
npm run preview
```

Open the address printed in the terminal. The output folder is `dist`; it includes the home page, privacy page, terms page, photos, and fonts. No backend or environment variables are needed. Nothing is automatically deployed.

## Browser tests

```sh
npx playwright install chromium
npm test
```

On a machine with an existing Chromium executable, set `CHROMIUM_PATH` to its path. For example on this cloud machine: `CHROMIUM_PATH=/usr/bin/chromium npm test`.

## Content and media notes

- The Facebook source gives 40555 California Oaks Road, Suite 131, Murrieta, CA. Menifee is described as a nearby community served. Confirm this with Robb before public launch.
- Contact: (760) 912-0549 and tattooedncolor@gmail.com, as supplied.
- The uploaded tattoo archive contains 75 JPEGs and no videos. Both requested videos remain outstanding. Intended placement: an artist introduction alongside the artist section and a session/process film in the experience section. Actual placement should follow a review of the footage. No fake players or unrelated videos are shown.
- Most supplied images are 206 × 206 pixels. Two are 540 × 960 and appear in the portfolio. Original higher-resolution photos will improve gallery and portrait sharpness.
- All supplied photos are retained in `public/images`. `source-index.json` maps filenames to the original uploads. Selected works are configured in `src/main.js`; the page content is in `index.html`.
- The hero uses an AI-restored version of the supplied Robb portrait, responsive WebP sizes, and CSS perspective. Restored detail is inferred, not recovered original detail. The original remains at public/images/71.jpg. Tattoo portfolio images are unchanged.
- The inquiry form validates fields and creates an email draft link. The visitor must open their email app and send the message. There is no server-side submission, payment, or automatic booking.
- Pricing promotions and conflicting review counts were deliberately omitted. No fabricated testimonials are included.
- Privacy and website terms describe the implemented website; studio booking, cancellation, and deposit policies must be supplied and agreed directly with Robb.
- Fonts are self-hosted through Fontsource packages. No analytics, third-party embeds, icon libraries, or remote font requests.

## Design direction

Charcoal, parchment, muted brass; Barlow Condensed, DM Sans, and Cormorant Garamond. Uses the four non-construction references for overall editorial structure. The supplied Ink Sanity logo is used as requested, alongside the ThINK Tattoo name. The footer follows the Dragonborn reference and credits northbridgelogic.com. A lightweight illustrative location map links to accurate Google Maps directions. No gradients, shadows, hover animations, glass effects, neon, rounded cards, or made-up reviews. Reduced motion is respected. Gallery images reserve space and use neutral loading placeholders.
