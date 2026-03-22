# ForumX

A **conference / summit** landing site built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. Fork it, rename things, drop in your dates and assets, and you’re ready to promote your event.

The demo uses **ForumX Summit 2027** as placeholder branding—swap it everywhere for your own name.

---

## Screenshots

Five captures from the template (the last one highlights the same **dark, dotted** look used across the about block, CTA, and footer):

### 1. Hero & navigation

![ForumX — hero and nav](docs/readme-assets/forumx-01-hero.png)

### 2. About — imagery & countdown

![ForumX — about section with parallax imagery and countdown](docs/readme-assets/forumx-02-about-countdown.png)

### 3. Speakers

![ForumX — meet our speakers](docs/readme-assets/forumx-03-speakers.png)

### 4. Tickets & pricing

![ForumX — ticket tiers](docs/readme-assets/forumx-04-tickets.png)

### 5. Dark sections (shared look)

![ForumX — dark UI sections (about / marquee / footer style)](docs/readme-assets/forumx-05-dark-sections.png)

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm run start
```

---

## Customize

| What | Where |
|------|--------|
| Site title & SEO | `src/app/layout.tsx` |
| Hero (headline, dates, city) | `src/components/forumx/HeroNextConfo.tsx` |
| About & countdown | `src/components/forumx/AboutSection.tsx` |
| Other sections | Files under `src/components/forumx/` |
| Sponsor logos | `public/partners/` |

Search for **`ForumX`**, **`forumx.example.com`**, and **`2027`** to catch leftover placeholder copy.

---

## Stack

- [Next.js](https://nextjs.org/) (App Router)  
- [Tailwind CSS](https://tailwindcss.com/) v4  
- [Framer Motion](https://www.framer.com/motion/)  

Deploy easily on [Vercel](https://vercel.com) or any Node host.

---

## License

Use freely for your events. Credit in the footer is appreciated, not required.
