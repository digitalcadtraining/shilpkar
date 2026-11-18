# Shilpkar Dance & Fitness Center — Water Fasting Landing Page (v5)

Single-page, responsive static website: HTML, CSS, JS. No npm setup required.

## Preview

Open `index.html` in your browser, or use VS Code > right-click index.html > Open with Live Server.
You can also run `npx --yes live-server .` from this folder.
`npm run dev` is not supported: this project has no Vite/npm dev script.

## Activate payment

Edit `config.js` and set `paymentPageUrl` to your actual HTTPS hosted ₹99 checkout URL.
Until configured, the CTA displays a message and cannot collect payments. Configure customer details and confirmation within the payment provider.
Do not insert secret API keys into frontend files.

## Content and safety

The site promotes a 7-day guided fasting education program, not medically unsupervised seven-day food abstinence. Prolonged water-only fasting poses serious risks and requires medical supervision. The skin-glow messaging describes general skincare and hydration habits—not a guaranteed result of fasting. Verify the 10+ years of expertise and small-batch claims with the client before launch.

## Branding

Updated to **Shilpkar Dance & Fitness Center** (short wordmark **Shilpkar**) based on the client Instagram screenshot. The existing generic decorative leaf/lotus mark remains as an ornamental placeholder, not the official logo. Replace it with a high-resolution logo from the client if desired.

Instagram: https://www.instagram.com/shilpkarfitness6/


## V7: Full-page scroll animations

- Scroll reveal for headings, descriptions, benefit cards, slider, price card, FAQ and footer.
- Subtle hero-image parallax on desktop, a top-of-page reading progress bar, staggered elements, and refined FAQ/button animations.
- All interactions use native browser APIs, not React or npm.
- Reduced-motion preferences are respected, and touch devices avoid costly parallax.
- Run index.html via VS Code Live Server. Payment remains unconnected until configured in config.js.


## V8 full-section animations
Each major section now slides and unveils as you scroll, followed by existing staggered inner animations. The effect runs once per section and doesn't lock or hijack scrolling. Reduced-motion settings are honored. On mobile the transitions are shorter and lighter.
